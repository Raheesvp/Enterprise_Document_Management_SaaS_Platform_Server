using  Shared.Domain.Primitives;
using Shared.Domain.Common;

namespace IdentityService.Domain.Entities;

//sealed class means no other class can inherit
public sealed class Tenant : AggregateRoot<Guid>
{
    private Tenant() {}

    private Tenant(
        Guid id,
        string name,
        string subdomain,
        string contactEmail) : base(id)
    {
        Name = name;
        Subdomain = subdomain.ToLower();
        ContactEmail =  contactEmail;
        IsActive = true;
        CreatedAt = DateTime.UtcNow;
    }

    public string Name {get; private set;} = string.Empty;
    public string Subdomain {get; private set;} = string.Empty;
    public string ContactEmail {get; private set;} = string.Empty;
    public bool IsActive {get; private set;}
    public DateTime CreatedAt {get; private set;}
    public DateTime? DeactivatedAt {get; private set;}

    public static Tenant Create(
        string name,
        string subdomain,
        string contactEmail)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(name);
        ArgumentException.ThrowIfNullOrWhiteSpace(subdomain);
        ArgumentException.ThrowIfNullOrWhiteSpace(contactEmail);

        return new Tenant(Guid.NewGuid(),name,subdomain,contactEmail);
    }

//Deactivate tenatn instead of delteing , because we want to keep the data for auditing and historical purposes.
    public void Deactivate()
    {
        IsActive = false;
        DeactivatedAt = DateTime.UtcNow;

    }

    public void Activate()
    {
        IsActive = true;
        DeactivatedAt = null;
    }
}