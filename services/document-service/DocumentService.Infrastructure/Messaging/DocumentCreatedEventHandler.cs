using DocumentService.Domain.Events;
using DocumentService.Domain.Repositories;
using MediatR;
using Microsoft.Extensions.Logging;
using Shared.Contracts.IntegrationEvents.Documents;

namespace DocumentService.Infrastructure.Messaging;

public sealed class DocumentCreatedEventHandler
    : INotificationHandler<DocumentCreatedEvent>
{
    private readonly IDocumentRepository _documentRepo;
    private readonly IDocumentEventPublisher _publisher;
    private readonly ILogger<DocumentCreatedEventHandler> _logger;

    public DocumentCreatedEventHandler(
        IDocumentRepository documentRepo,
        IDocumentEventPublisher publisher,
        ILogger<DocumentCreatedEventHandler> logger)
    {
        _documentRepo = documentRepo;
        _publisher    = publisher;
        _logger       = logger;
    }

    public async Task Handle(
        DocumentCreatedEvent domainEvent,
        CancellationToken cancellationToken)
    {
        _logger.LogInformation(
            "[DOMAIN EVENT] DocumentCreated. Handling... " +
            "DocumentId: {DocumentId} MimeType: {MimeType}",
            domainEvent.DocumentId,
            domainEvent.MimeType);

        var document = await _documentRepo.GetByIdAsync(
            domainEvent.DocumentId,
            domainEvent.TenantId,
            cancellationToken);

        if (document is null)
        {
            _logger.LogError(
                "Document {DocumentId} not found when handling created event.",
                domainEvent.DocumentId);
            return;
        }

        var integrationEvent = new DocumentUploadEvent(
            DocumentId:       domainEvent.DocumentId,
            TenantId:         domainEvent.TenantId,
            Title:            domainEvent.Title,
            UploadedByUserId: domainEvent.UploadedByUserId,
            FileName:         domainEvent.Title,
            ContentType:      domainEvent.MimeType,
            FileSizeBytes:    document.CurrentVersion?.FileSize.Bytes ?? 0,
            StoragePath:      domainEvent.StoragePath)
        {
            EventId   = domainEvent.EventId,
            OccuredOn = domainEvent.OccuredOn
        };

        await _publisher.PublishDocumentUploadedAsync(
            integrationEvent,
            cancellationToken);

        _logger.LogInformation(
            "[INTEGRATION EVENT] DocumentUploadEvent published. " +
            "DocumentId: {DocumentId}",
            domainEvent.DocumentId);
    }
}
