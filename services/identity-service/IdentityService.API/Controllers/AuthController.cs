using IdentityService.Application.Commands.LoginUser;
using IdentityService.Application.Commands.RefreshToken;
using IdentityService.Application.Commands.RegisterTenant;
using IdentityService.Application.Commands.AddUser;
using IdentityService.Application.Commands.BlockUser;
using IdentityService.Domain.Repositories;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IdentityService.API.Controllers;

[ApiController]
[Route("api/identity")]
public class AuthController : ControllerBase
{
    private readonly IMediator       _mediator;
    private readonly IUserRepository _userRepo;

    public AuthController(
        IMediator       mediator,
        IUserRepository userRepo)
    {
        _mediator = mediator;
        _userRepo = userRepo;
    }

    /// <summary>Register a new tenant and admin user</summary>
    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register(
        [FromBody] RegisterTenantCommand command,
        CancellationToken ct)
    {
        var result = await _mediator.Send(command, ct);
        if (result.IsFailure)
            return BadRequest(new { error = result.Error.Description });
        return CreatedAtAction(nameof(Register), result.Value);
    }

    /// <summary>Login and receive JWT + refresh token</summary>
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login(
        [FromBody] LoginUserCommand command,
        CancellationToken ct)
    {
        var result = await _mediator.Send(command, ct);
        if (result.IsFailure)
            return Unauthorized(new { error = result.Error.Description });
        return Ok(result.Value);
    }

    /// <summary>Refresh access token using refresh token</summary>
    [HttpPost("refresh")]
    [AllowAnonymous]
    public async Task<IActionResult> Refresh(
        [FromBody] RefreshTokenCommand command,
        CancellationToken ct)
    {
        var result = await _mediator.Send(command, ct);
        if (result.IsFailure)
            return Unauthorized(new { error = result.Error.Description });
        return Ok(result.Value);
    }

    /// <summary>Get all users in tenant — Admin only</summary>
    [HttpGet("users")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetUsers(CancellationToken ct)
    {
        var tenantId = GetTenantId();
        var users    = await _userRepo.GetByTenantAsync(tenantId, ct);

        var result = users.Select(u => new
        {
            userId   = u.Id,
            email    = u.Email,
            fullName = u.FullName,
            role     = u.Role.ToString(),
            isActive = u.IsActive,
        });

        return Ok(result);
    }

    /// <summary>Add Manager or Viewer user — Admin only</summary>
    [HttpPost("users")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> AddUser(
        [FromBody] AddUserCommand command,
        CancellationToken ct)
    {
        var result = await _mediator.Send(
            command with { TenantId = GetTenantId() }, ct);

        if (result.IsFailure)
            return BadRequest(new { error = result.Error.Description });

        return CreatedAtAction(nameof(AddUser), result.Value);
    }

    /// <summary>Block a user — Admin only</summary>
    [HttpPut("users/{userId}/block")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> BlockUser(
        Guid userId,
        CancellationToken ct)
    {
        var result = await _mediator.Send(
            new BlockUserCommand(userId, GetTenantId(), Block: true),
            ct);

        if (result.IsFailure)
            return BadRequest(new { error = result.Error.Description });

        return NoContent();
    }

    /// <summary>Unblock a user — Admin only</summary>
    [HttpPut("users/{userId}/unblock")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> UnblockUser(
        Guid userId,
        CancellationToken ct)
    {
        var result = await _mediator.Send(
            new BlockUserCommand(userId, GetTenantId(), Block: false),
            ct);

        if (result.IsFailure)
            return BadRequest(new { error = result.Error.Description });

        return NoContent();
    }

    /// <summary>Get current user info — requires valid JWT</summary>
    [HttpGet("me")]
    [Authorize]
    public IActionResult Me()
    {
        var userId   = User.FindFirst(
            System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
        var email    = User.FindFirst(
            System.Security.Claims.ClaimTypes.Email)?.Value;
        var role     = User.FindFirst(
            System.Security.Claims.ClaimTypes.Role)?.Value;
        var tenantId = User.FindFirst("tenant_id")?.Value;

        return Ok(new { userId, email, role, tenantId });
    }

    private Guid GetTenantId() =>
        Guid.Parse(User.FindFirst("tenant_id")?.Value
            ?? Guid.Empty.ToString());
}
