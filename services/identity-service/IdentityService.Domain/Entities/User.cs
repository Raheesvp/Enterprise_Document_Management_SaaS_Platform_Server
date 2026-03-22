using IdentityService.Domain.Enums;
using Shared.Domain.Primitives;

namespace IdentityService.Domain.Entities;

public sealed class User : AggregateRoot<Guid>
{
    private readonly List<RefreshToken> _refreshTokens = new();

    private User() {}

    private User(
        Guid id,
        Guid tenantId,
        string email,
        string fullName,
        string passwordHash,
        UserRole role) : base(id)
    {
        TenantId     = tenantId;
        Email        = email;
        FullName     = fullName;
        PasswordHash = passwordHash;
        Role         = role;
        IsActive     = true;
        CreatedAt    = DateTime.UtcNow;
    }

    public Guid     TenantId     { get; private set; }
    public string   Email        { get; private set; } = string.Empty;
    public string   FullName     { get; private set; } = string.Empty;
    public string   PasswordHash { get; private set; } = string.Empty;
    public UserRole Role         { get; private set; }
    public bool     IsActive     { get; private set; }
    public DateTime CreatedAt    { get; private set; }
    public DateTime? LastLoginAt { get; private set; }

    public IReadOnlyCollection<RefreshToken> RefreshTokens
        => _refreshTokens.AsReadOnly();

    public static User Create(
        Guid tenantId,
        string email,
        string fullName,
        string passwordHash,
        UserRole role = UserRole.Viewer)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(email);
        ArgumentException.ThrowIfNullOrWhiteSpace(fullName);
        ArgumentException.ThrowIfNullOrWhiteSpace(passwordHash);
        return new User(
            Guid.NewGuid(), tenantId,
            email, fullName, passwordHash, role);
    }

    public void RecordLogin() => LastLoginAt = DateTime.UtcNow;

    public void AddRefreshToken(RefreshToken token)
    {
        RevokeAllRefreshTokens("Replaced by new token");
        _refreshTokens.Add(token);
    }

    public RefreshToken? GetActiveRefreshToken(string token)
        => _refreshTokens.FirstOrDefault(t =>
            t.Token == token &&
            !t.IsRevoked &&
            t.ExpiresAt > DateTime.UtcNow);

    public void RevokeRefreshToken(string token, string reason)
    {
        var refreshToken = GetActiveRefreshToken(token);
        refreshToken?.Revoke(reason);
    }

    private void RevokeAllRefreshTokens(string reason)
    {
        foreach (var token in _refreshTokens.Where(t => !t.IsRevoked))
            token.Revoke(reason);
    }

    public void Deactivate()              => IsActive = false;
    public void Activate()                => IsActive = true;
    public void ChangeRole(UserRole role) => Role = role;
}
