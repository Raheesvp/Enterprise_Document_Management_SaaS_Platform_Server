using MediatR;
using NotificationService.Application.DTOs;
using NotificationService.Application.Interfaces;
using NotificationService.Domain.Entities;
using Microsoft.Extensions.Logging;
using Shared.Domain.Common;
using System.Diagnostics;
using Shared.Infrastructure.Telemetry;

namespace NotificationService.Application.Commands.CreateNotification;

public sealed class CreateNotificationCommandHandler
    : IRequestHandler<CreateNotificationCommand, Result<Guid>>
{
    private readonly INotificationRepository _repository;
    private readonly INotificationBroadcaster _broadcaster;
    private readonly ILogger<CreateNotificationCommandHandler> _logger;

    public CreateNotificationCommandHandler(
        INotificationRepository repository,
        INotificationBroadcaster broadcaster,
        ILogger<CreateNotificationCommandHandler> logger)
    {
        _repository = repository;
        _broadcaster = broadcaster;
        _logger = logger;
    }

    public async Task<Result<Guid>> Handle(
        CreateNotificationCommand request,
        CancellationToken cancellationToken)
    {
        using var span = ActivitySources.Notifications
            .StartActivity("notification.create");

        try
        {
            // 1. Create domain entity
            var notification = Notification.Create(
                request.TenantId,
                request.UserId,
                request.Title,
                request.Message,
                request.Type,
                request.ReferenceId,
                request.ReferenceType);

            // 2. Persist to database
            await _repository.AddAsync(notification, cancellationToken);

            // 3. Add telemetry tags
            span?.SetTag("notification.id", notification.Id.ToString());
            span?.SetTag("notification.type", request.Type.ToString());
            span?.SetTag("tenant.id", request.TenantId.ToString());
            span?.SetTag("user.id", request.UserId.ToString());

            // 4. Prepare DTO
            var dto = new NotificationDto(
                notification.Id,
                notification.TenantId,
                notification.UserId,
                notification.Title,
                notification.Message,
                notification.Type.ToString(),
                notification.Status.ToString(),
                notification.ReferenceId,
                notification.ReferenceType,
                notification.CreatedAt,
                notification.ReadAt);

            // 5. Fire-and-forget (safe wrapper)
            _ = Task.Run(async () =>
            {
                try
                {
                    await _broadcaster.BroadcastToUserAsync(
                        notification.UserId.ToString(),
                        dto,
                        CancellationToken.None); // do NOT use request token
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Failed to broadcast notification {NotificationId} to user {UserId}", 
                        notification.Id, 
                        notification.UserId);
                }
            });

            // 6. Mark telemetry success BEFORE return
            span?.SetStatus(ActivityStatusCode.Ok);

            // 7. Return result
            return Result.Success(notification.Id);
        }
        catch (Exception ex)
        {
            span?.SetStatus(ActivityStatusCode.Error, ex.Message);
            throw;
        }
    }
}