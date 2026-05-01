using IdentityService.Application.DTOs;
using IdentityService.Application.Interfaces;
using IdentityService.Domain.Entities; // Required for RefreshToken entity
using IdentityService.Domain.Errors;   // Required for IdentityErrors
using IdentityService.Domain.Repositories;
using MediatR;
using Shared.Domain.Common;

namespace IdentityService.Application.Commands.RefreshToken;

public sealed class RefreshTokenCommandHandler
    : IRequestHandler<RefreshTokenCommand, Result<AuthResponseDto>>
{
    private readonly IUserRepository _userRepo;
    private readonly ITenantRepository _tenantRepo;
    private readonly IJwtService _jwtService;

    public RefreshTokenCommandHandler(
        IUserRepository userRepo,
        ITenantRepository tenantRepo,
        IJwtService jwtService)
    {
        _userRepo = userRepo;
        _tenantRepo = tenantRepo;
        _jwtService = jwtService;
    }

    public async Task<Result<AuthResponseDto>> Handle(
        RefreshTokenCommand command,
        CancellationToken ct)
    {
        // 1. Find user by ID (Newer version passes UserId in the command)
        var user = await _userRepo.GetByIdAsync(command.UserId, ct);

        if (user is null)
            return Result.Failure<AuthResponseDto>(IdentityErrors.Token.Invalid);

        // 2. Validate the specific refresh token against the user's active tokens
        var activeToken = user.GetActiveRefreshToken(command.Token);

        if (activeToken is null)
            return Result.Failure<AuthResponseDto>(IdentityErrors.Token.Invalid);

        // 3. User status check
        if (!user.IsActive)
            return Result.Failure<AuthResponseDto>(IdentityErrors.User.Inactive);

        // 4. Get and validate tenant
        var tenant = await _tenantRepo.GetByIdAsync(user.TenantId, ct);

        if (tenant is null || !tenant.IsActive)
            return Result.Failure<AuthResponseDto>(IdentityErrors.Tenant.Inactive);

        // 5. ROTATION: Issue new refresh token entity
        var newRefreshTokenStr = _jwtService.GenerateRefreshToken();
        var newRefreshTokenExpiry = _jwtService.GetRefreshTokenExpiry();

        var newRefreshTokenEntity = new IdentityService.Domain.Entities.RefreshToken(
            user.Id,
            newRefreshTokenStr,
            newRefreshTokenExpiry);

        // This method should handle revoking the 'activeToken' we used to get here
        user.AddRefreshToken(newRefreshTokenEntity);

        await _userRepo.UpdateAsync(user, ct);

        // 6. Generate access token and return full response
        var newAccessToken = _jwtService.GenerateAccessToken(user, tenant);

        return Result.Success(new AuthResponseDto(
            AccessToken: newAccessToken,
            RefreshToken: newRefreshTokenStr,
            AccessTokenExpiry: _jwtService.GetAccessTokenExpiry(),
            User: new UserDto(
                user.Id,
                user.TenantId,
                user.Email,
                user.FullName,
                user.Role.ToString())));
    }
}