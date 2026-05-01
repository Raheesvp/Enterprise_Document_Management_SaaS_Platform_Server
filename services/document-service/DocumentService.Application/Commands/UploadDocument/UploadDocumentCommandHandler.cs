using DocumentService.Application.Common;
using DocumentService.Application.DTOs;
using DocumentService.Application.Interfaces;
using DocumentService.Domain.Entities;
using DocumentService.Domain.Repositories;
using DocumentService.Domain.Search;
using DocumentService.Domain.ValueObjects;
using MassTransit;
using MediatR;
using Shared.Contracts.IntegrationEvents.Documents;
using Shared.Domain.Common;
using System.Diagnostics;
using Shared.Infrastructure.Telemetry;



namespace DocumentService.Application.Commands.UploadDocument;

public sealed class UploadDocumentCommandHandler
    : IRequestHandler<UploadDocumentCommand, Result<DocumentDto>>
{
    private readonly IDocumentRepository _documentRepo;
    private readonly IStorageService     _storageService;
    private readonly IPublishEndpoint    _publishEndpoint;
    private readonly ISearchService      _searchService;
    private readonly ICacheService       _cache;

    public UploadDocumentCommandHandler(
        IDocumentRepository documentRepo,
        IStorageService     storageService,
        IPublishEndpoint    publishEndpoint,
        ISearchService      searchService,
        ICacheService       cache)
    {
        _documentRepo    = documentRepo;
        _storageService  = storageService;
        _publishEndpoint = publishEndpoint;
        _searchService   = searchService;
        _cache           = cache;
    }

    public async Task<Result<DocumentDto>> Handle(
        UploadDocumentCommand command,
        CancellationToken     cancellationToken)
    {
        // --- Value object validation ---
        DocumentTitle title;
        FileSize      fileSize;
        ContentType   contentType;

        try
        {
            title       = DocumentTitle.Create(command.Title);
            fileSize    = FileSize.FromBytes(command.FileSizeBytes);
            contentType = ContentType.Create(command.MimeType);

            if (contentType.DocumentType == Domain.Enums.DocumentType.Other)
            {
                return Result.Failure<DocumentDto>(
                    new Error("Document.UnsupportedType",
                        $"File type '{command.MimeType}' not allowed."));
            }
        }
        catch (ArgumentException ex)
        {
            return Result.Failure<DocumentDto>(
                new Error("Document.ValidationFailed", ex.Message));
        }

        // --- Storage ---
        var documentId  = Guid.NewGuid();
        var fileName    = SanitizeFileName(command.Title);
        var storagePath = StoragePath.Create(command.TenantId, documentId, fileName);

        using var storageSpan = ActivitySources.Documents
            .StartActivity("storage.upload");
        storageSpan?.SetTag("document.title",  command.Title);
        storageSpan?.SetTag("tenant.id",       command.TenantId.ToString());
        storageSpan?.SetTag("file.size.bytes", command.FileSizeBytes);

        await _storageService.UploadAsync(
            storagePath.Value,
            command.FileContent,
            command.MimeType,
            cancellationToken);

        storageSpan?.SetStatus(ActivityStatusCode.Ok);

        // --- Persist document ---
        Document document;

        if (command.DocumentId.HasValue)
        {
            var existing = await _documentRepo.GetByIdAsync(
                command.DocumentId.Value, command.TenantId, cancellationToken);

            if (existing is null || existing.TenantId != command.TenantId)
            {
                return Result.Failure<DocumentDto>(
                    new Error("Document.NotFound",
                        $"Document with ID {command.DocumentId} not found."));
            }

            existing.AddVersion(storagePath, fileSize, command.UploadedByUserId);
            document = existing;
            
            using var dbSpan = ActivitySources.Documents
                .StartActivity("db.update_document");
            await _documentRepo.UpdateAsync(document, cancellationToken);
            dbSpan?.SetTag("document.id", document.Id.ToString());
            dbSpan?.SetStatus(ActivityStatusCode.Ok);
        }
        else
        {
            var existing = await _documentRepo.GetByTitleAsync(
                command.Title, command.TenantId, cancellationToken);

            if (existing != null)
            {
                existing.AddVersion(storagePath, fileSize, command.UploadedByUserId);
                document = existing;
                
                using var dbSpan = ActivitySources.Documents
                    .StartActivity("db.update_document");
                await _documentRepo.UpdateAsync(document, cancellationToken);
                dbSpan?.SetTag("document.id", document.Id.ToString());
                dbSpan?.SetStatus(ActivityStatusCode.Ok);
            }
            else
            {
                document = Document.Create(
                    command.TenantId,
                    command.UploadedByUserId,
                    command.UploadedByName,
                    title,
                    contentType,
                    storagePath,
                    fileSize);

                if (command.Description is not null)
                    document.UpdateDescription(command.Description);

                if (command.Tags is not null)
                    document.UpdateTags(command.Tags);

                document.MarkAsProcessing();
                document.MarkAsActive();

                using var dbSpan = ActivitySources.Documents
                    .StartActivity("db.add_document");
                await _documentRepo.AddAsync(document, cancellationToken);
                dbSpan?.SetTag("document.id", document.Id.ToString());
                dbSpan?.SetStatus(ActivityStatusCode.Ok);
            }
        }

        // --- Cache invalidation span ---
        using var cacheSpan = ActivitySources.Documents
            .StartActivity("cache.invalidate");

        await _cache.RemoveByPrefixAsync(
            CacheKeys.DocumentListPrefix(command.TenantId),
            cancellationToken);

        cacheSpan?.SetStatus(ActivityStatusCode.Ok);

        // --- Elasticsearch: upsert ---
        var docIndex = new DocumentIndex
        {
            Id             = document.Id,
            TenantId       = document.TenantId,
            Title          = document.Title.Value,
            ContentType    = document.ContentType.MimeType,
            Status         = document.Status.ToString(),
            UploadedByName = document.UploadedByName,
            FileSizeBytes  = document.CurrentVersion?.FileSize.Bytes ?? fileSize.Bytes,
            CreatedAt      = document.CreatedAt
        };

        using var esSpan = ActivitySources.Documents
            .StartActivity("elasticsearch.index");

        await _searchService.IndexDocumentAsync(docIndex, cancellationToken);

        esSpan?.SetTag("es.index",       "documents");
        esSpan?.SetTag("document.id",    document.Id.ToString());
        esSpan?.SetStatus(ActivityStatusCode.Ok);

        // --- RabbitMQ: publish event ---
        using var mqSpan = ActivitySources.Documents
            .StartActivity("rabbitmq.publish");
        mqSpan?.SetTag("event.type", "DocumentUploadEvent");

        await _publishEndpoint.Publish(
            new DocumentUploadEvent(
                DocumentId:       document.Id,
                TenantId:         document.TenantId,
                Title:            document.Title.Value,
                UploadedByUserId: document.UploadedByUserId,
                FileName:         fileName,
                ContentType:      document.ContentType.MimeType,
                FileSizeBytes:    fileSize.Bytes,
                StoragePath:      storagePath.Value),
            cancellationToken);

        mqSpan?.SetStatus(ActivityStatusCode.Ok);

        return Result.Success(ToDto(document));
    }

    // --- Helpers ---

    private static string SanitizeFileName(string title)
    {
        var invalid = Path.GetInvalidFileNameChars();
        return string.Concat(title.Select(c => invalid.Contains(c) ? '_' : c));
    }

    private static DocumentDto ToDto(Document doc)
    {
        var current = doc.CurrentVersion!;
        return new DocumentDto(
            doc.Id,
            doc.TenantId,
            doc.Title.Value,
            doc.Status.ToString(),
            doc.ContentType.DocumentType.ToString(),
            doc.ContentType.MimeType,
            current.FileSize.Bytes,
            current.FileSize.ToString(),
            doc.Versions.Count,
            current.VersionNumber,
            current.StoragePath.Value,
            doc.UploadedByUserId.ToString(),
            doc.CreatedAt,
            doc.UpdatedAt,
            doc.Description,
            doc.Tags);
    }
}
