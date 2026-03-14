using MassTransit;
using Microsoft.Extensions.Logging;
using Shared.Contracts.IntegrationEvents.Documents;

namespace DocumentService.Infrastructure.Messaging;

// DocumentEventPublisher — publishes integration events to RabbitMQ
//
// Why a separate publisher class and not publish directly in handler?
// ? Single Responsibility — handler does business logic
//   publisher does messaging
// ? Easier to test — mock IDocumentEventPublisher in unit tests
// ? Swap MassTransit for another bus with zero handler changes
public interface IDocumentEventPublisher
{
    Task PublishDocumentUploadedAsync(
        DocumentUploadEvent evt,
        CancellationToken ct = default);
}

public sealed class DocumentEventPublisher : IDocumentEventPublisher
{
    private readonly IPublishEndpoint _publishEndpoint;
    private readonly ILogger<DocumentEventPublisher> _logger;

    public DocumentEventPublisher(
        IPublishEndpoint publishEndpoint,
        ILogger<DocumentEventPublisher> logger)
    {
        _publishEndpoint = publishEndpoint;
        _logger          = logger;
    }

    public async Task PublishDocumentUploadedAsync(
        DocumentUploadEvent evt,
        CancellationToken ct = default)
    {
        await _publishEndpoint.Publish(evt, ct);

        _logger.LogInformation(
            "DocumentUploadEvent published. " +
            "DocumentId: {DocumentId} TenantId: {TenantId}",
            evt.DocumentId, evt.TenantId);
    }
}
