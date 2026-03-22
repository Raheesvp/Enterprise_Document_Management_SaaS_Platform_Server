using IdentityService.Domain.Entities;

namespace IdentityService.Domain.Repositories;

public interface IUserRepository
{
    Task<User?> GetByIdAsync(
        Guid id,
        CancellationToken ct = default);

    Task<User?> GetByEmailAsync(
        Guid tenantId,
        string email,
        CancellationToken ct = default);

    Task<bool> EmailExistsAsync(
        Guid tenantId,
        string email,
        CancellationToken ct = default);

    Task AddAsync(
        User user,
        CancellationToken ct = default);

    Task UpdateAsync(
        User user,
        CancellationToken ct = default);

    // Get all users for a tenant — used by Admin user management
    Task<IReadOnlyList<User>> GetByTenantAsync(
        Guid tenantId,
        CancellationToken ct = default);
}
