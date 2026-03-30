using DocumentService.Application.Common;
using DocumentService.Application.DTOs;
using DocumentService.Application.Interfaces;
using DocumentService.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;
using Shared.Domain.Common;

namespace DocumentService.Application.Queries.GetDocumentList;

public sealed class GetDocumentListQueryHandler
    : IRequestHandler<GetDocumentListQuery, Result<DocumentListDto>>
{
    private readonly IDocumentReadRepository _readRepo;
    private readonly IStorageService _storageService;
    private readonly ICacheService _cache;
    private readonly ILogger<GetDocumentListQueryHandler> _logger;

    private static readonly TimeSpan CacheTtl = TimeSpan.FromMinutes(5);

    public GetDocumentListQueryHandler(
        IDocumentReadRepository readRepo,
        IStorageService storageService,
        ICacheService cache,
        ILogger<GetDocumentListQueryHandler> logger)
    {
        _readRepo = readRepo;
        _storageService = storageService;
        _cache = cache;
        _logger = logger;
    }

    public async Task<Result<DocumentListDto>> Handle(
        GetDocumentListQuery query,
        CancellationToken cancellationToken)
    {
        try
        {
            var cacheKey = CacheKeys.DocumentList(
                query.TenantId,
                query.Page,
                query.PageSize,
                query.Status?.ToString(),
                query.Type?.ToString(),
                query.SearchTerm,
                query.FromDate,
                query.ToDate);

            var cached = await _cache.GetAsync<DocumentListDto>(
                cacheKey,
                cancellationToken);

            if (cached is not null)
                return Result.Success(cached);

            var filter = new DocumentQueryFilter(
                Status: query.Status,
                Type: query.Type,
                SearchTerm: query.SearchTerm,
                FromDate: query.FromDate,
                ToDate: query.ToDate,
                Page: query.Page,
                PageSize: query.PageSize);

            var paged = await _readRepo.GetPagedAsync(
                query.TenantId,
                filter,
                cancellationToken);

            var items = new List<DocumentSummaryDto>();

            foreach (var document in paged.Items)
            {
                var downloadUrl = await TryGetDownloadUrlAsync(
                    document.StoragePath,
                    document.MimeType);

                items.Add(new DocumentSummaryDto(
                    document.Id,
                    document.Title,
                    document.Status,
                    document.DocumentType,
                    document.MimeType,
                    document.FileSizeBytes,
                    FormatFileSize(document.FileSizeBytes),
                    document.VersionCount,
                    document.UploadedByUserId.ToString(),
                    document.UploadedByName,
                    document.CreatedAt,
                    document.UpdatedAt,
                    document.Tags,
                    downloadUrl));
            }

            var result = new DocumentListDto(
                items.AsReadOnly(),
                paged.TotalCount,
                paged.Page,
                paged.PageSize,
                paged.TotalPages,
                paged.HasNextPage,
                paged.HasPreviousPage);

            await _cache.SetAsync(cacheKey, result, CacheTtl, cancellationToken);

            return Result.Success(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(
                ex,
                "Failed to get document list for tenant {TenantId}",
                query.TenantId);

            return Result.Failure<DocumentListDto>(
                new Error(
                    "Document.ListFailed",
                    "Unable to load documents right now. Please try again."));
        }
    }

    private async Task<string?> TryGetDownloadUrlAsync(
        string storagePath,
        string? mimeType)
    {
        if (string.IsNullOrWhiteSpace(storagePath))
            return null;

        try
        {
            return await _storageService.GetPresignedUrlAsync(
                storagePath,
                mimeType);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(
                ex,
                "Failed to generate download URL for storage path {StoragePath}",
                storagePath);

            return null;
        }
    }

    private static string FormatFileSize(long bytes) =>
        bytes switch
        {
            >= 1024 * 1024 => $"{bytes / (1024.0 * 1024.0):F2} MB",
            >= 1024 => $"{bytes / 1024.0:F2} KB",
            _ => $"{bytes} B"
        };
}
