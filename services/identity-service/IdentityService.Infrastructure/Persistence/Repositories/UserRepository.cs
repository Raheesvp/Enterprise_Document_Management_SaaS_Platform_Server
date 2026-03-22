using IdentityService.Domain.Entities;
using IdentityService.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.Infrastructure.Persistence.Repositories;

public sealed class UserRepository : IUserRepository
{
    private readonly IdentityDbContext _context;

    public UserRepository(IdentityDbContext context)
        => _context = context;

    public async Task<User?> GetByIdAsync(
        Guid id, CancellationToken ct = default)
        => await _context.Users
            .Include(u => u.RefreshTokens)
            .FirstOrDefaultAsync(u => u.Id == id, ct);

    public async Task<User?> GetByEmailAsync(
        Guid tenantId, string email,
        CancellationToken ct = default)
        => await _context.Users
            .Include(u => u.RefreshTokens)
            .FirstOrDefaultAsync(u =>
                u.TenantId == tenantId &&
                u.Email == email.ToLower(), ct);

    public async Task<bool> EmailExistsAsync(
        Guid tenantId, string email,
        CancellationToken ct = default)
        => await _context.Users
            .AnyAsync(u =>
                u.TenantId == tenantId &&
                u.Email == email.ToLower(), ct);

    public async Task AddAsync(
        User user, CancellationToken ct = default)
    {
        await _context.Users.AddAsync(user, ct);
        await _context.SaveChangesAsync(ct);
    }

    public async Task UpdateAsync(
        User user, CancellationToken ct = default)
    {
        if (_context.Entry(user).State == EntityState.Detached)
            _context.Users.Update(user);

        foreach (var token in user.RefreshTokens)
        {
            var tokenEntry = _context.Entry(token);
            if (tokenEntry.State == EntityState.Detached)
            {
                tokenEntry.State = EntityState.Added;
                continue;
            }
            if (tokenEntry.State == EntityState.Modified)
            {
                var exists = await _context.RefreshTokens
                    .AsNoTracking()
                    .AnyAsync(rt => rt.Id == token.Id, ct);
                if (!exists)
                    tokenEntry.State = EntityState.Added;
            }
        }
        await _context.SaveChangesAsync(ct);
    }

    // Get all users for a tenant — Admin user management page
    public async Task<IReadOnlyList<User>> GetByTenantAsync(
        Guid tenantId, CancellationToken ct = default)
        => await _context.Users
            .Where(u => u.TenantId == tenantId)
            .OrderBy(u => u.Role)
            .ThenBy(u => u.FullName)
            .ToListAsync(ct);
}
