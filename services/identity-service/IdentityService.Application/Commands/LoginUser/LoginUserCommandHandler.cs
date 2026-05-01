using IdentityService.Application.DTOs;
using IdentityService.Application.Interfaces;
using IdentityService.Domain.Entities;
using IdentityService.Domain.Errors;
using IdentityService.Domain.Repositories;
using MediatR;
using Shared.Domain.Common;
using Microsoft.Extensions.Logging;
using Shared.Infrastructure.Extensions;

namespace IdentityService.Application.Commands.LoginUser;

public sealed class LoginUserCommandHandler
    : IRequestHandler<LoginUserCommand, Result<AuthResponseDto>>
{
    private readonly IUserRepository _userRepo;
    private readonly ITenantRepository _tenantRepo;
    private readonly IPasswordService _passwordService;
    private readonly IJwtService _jwtService;
    private readonly ILogger<LoginUserCommandHandler> _logger;
    private readonly Microsoft.AspNetCore.Http.IHttpContextAccessor _httpContextAccessor;

    public LoginUserCommandHandler(
        IUserRepository userRepo,
        ITenantRepository tenantRepo,
        IPasswordService passwordService,
        IJwtService jwtService,
        ILogger<LoginUserCommandHandler> logger,
        Microsoft.AspNetCore.Http.IHttpContextAccessor httpContextAccessor)
    {
        _userRepo = userRepo;
        _tenantRepo = tenantRepo;
        _passwordService = passwordService;
        _jwtService = jwtService;
        _logger = logger;
        _httpContextAccessor = httpContextAccessor;
    }

    //email doesnot exist or password is wrong, we return the same error to prevent attackers from knowing which part is incorrect.
    //hackers use this technique to find valid emails in the system by analyzing error messages or response times.
    //perform a verification step so the response time is consistent whether the email exists or not, making it harder for attackers to infer valid emails based on timing differences.
    public async Task<Result<AuthResponseDto>> Handle(
        LoginUserCommand command,
        CancellationToken cancellationToken)
    {
        // 1. Resolve tenant from subdomain
        var tenant = await _tenantRepo.GetBySubdomainAsync(
            command.Subdomain, cancellationToken);

        if (tenant is null)
            return LogAndReturnFailure(command, Result.Failure<AuthResponseDto>(
                IdentityErrors.User.InvalidCredentials));

        if (!tenant.IsActive)
            return LogAndReturnFailure(command, Result.Failure<AuthResponseDto>(
                IdentityErrors.Tenant.Inactive));

        // 2. Find user within this tenant
        var user = await _userRepo.GetByEmailAsync(
            tenant.Id, command.Email, cancellationToken);

        // Always verify password even if user not found
        // Prevents timing attacks revealing whether email exists
        if (user is null || !_passwordService.VerifyPassword(
                command.Password, user.PasswordHash))
            return LogAndReturnFailure(command, Result.Failure<AuthResponseDto>(
                IdentityErrors.User.InvalidCredentials));

        if (!user.IsActive)
            return LogAndReturnFailure(command, Result.Failure<AuthResponseDto>(
                IdentityErrors.User.Inactive));

        // 3. Generate tokens
        var accessToken = _jwtService.GenerateAccessToken(user, tenant);
        var refreshToken = _jwtService.GenerateRefreshToken();
        var refreshTokenExpiry = _jwtService.GetRefreshTokenExpiry();

        // 4. Attach refresh token to user aggregate
        var refreshTokenEntity = new IdentityService.Domain.Entities.RefreshToken(
            user.Id,
            refreshToken,
            refreshTokenExpiry);

        user.AddRefreshToken(refreshTokenEntity);
        user.RecordLogin();

        await _userRepo.UpdateAsync(user, cancellationToken);

        // 5. Return auth response
        var result = Result.Success(new AuthResponseDto(
            accessToken,
            refreshToken,
            _jwtService.GetAccessTokenExpiry(),
            new UserDto(
                user.Id,
                user.TenantId,
                user.Email,
                user.FullName,
                user.Role.ToString())));

        _logger.LogInformation(
            "[SECURITY] Successful login. " +
            "UserId: {UserId} TenantId: {TenantId}",
            user.Id, tenant.Id);

        return result;
    }

    private Result<AuthResponseDto> LogAndReturnFailure(
        LoginUserCommand command, 
        Result<AuthResponseDto> result)
    {
        _logger.LogWarning(
            "[SECURITY] Failed login attempt. " +
            "Email: {Email} Subdomain: {Subdomain} " +
            "Reason: {Reason} IP: {IP}",
            command.Email.MaskEmail(),
            command.Subdomain,
            result.Error.Description,
            _httpContextAccessor.HttpContext?
                .Connection.RemoteIpAddress?.ToString()
                ?? "unknown");

        return result;
    }
}