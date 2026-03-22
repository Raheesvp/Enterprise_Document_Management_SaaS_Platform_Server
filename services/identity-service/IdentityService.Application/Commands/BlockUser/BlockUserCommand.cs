using MediatR;
using Shared.Domain.Common;

namespace IdentityService.Application.Commands.BlockUser;

public record BlockUserCommand(
    Guid UserId,
    Guid TenantId,
    bool Block) : IRequest<Result>;
