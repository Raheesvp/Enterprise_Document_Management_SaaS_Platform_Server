using FluentValidation;


namespace IdentityService.Application.Commands.RegisterTenant;

public class RegisterTenantCommandValidator
    : AbstractValidator<RegisterTenantCommand>
{
    public RegisterTenantCommandValidator()
    {
        RuleFor(x => x.TenantName)
            .NotEmpty().WithMessage("Tenant name is required").MinimumLength(2).WithMessage("Company name is too short.")
            .MaximumLength(100).WithMessage("Company name is too long.");

        RuleFor(x => x.Subdomain)
            .NotEmpty()
                .WithMessage("Subdomain is required.")
            .Matches(@"^[a-z0-9\-]+$")
                .WithMessage("Subdomain: lowercase letters, numbers, hyphens only.")
            .MinimumLength(3)
                .WithMessage("Subdomain must be at least 3 characters.")
            .MaximumLength(50)
                .WithMessage("Subdomain too long.");

        RuleFor(x => x.ContactEmail)
            .NotEmpty().WithMessage("Contact email is required")
            .EmailAddress().WithMessage("Invalid email format");

         RuleFor(x => x.AdminEmail)
            .NotEmpty()
                .WithMessage("Admin email is required.")
            .EmailAddress()
                .WithMessage("Invalid email format.")
            .MaximumLength(256)
                .WithMessage("Email too long.");

       RuleFor(x => x.AdminPassword)
            .NotEmpty()
                .WithMessage("Password is required.")
            .MinimumLength(8)
                .WithMessage("Password must be at least 8 characters.")
            .MaximumLength(128)
                .WithMessage("Password too long.")
            .Matches(@"[A-Z]")
                .WithMessage("Password must contain uppercase letter.")
            .Matches(@"[a-z]")
                .WithMessage("Password must contain lowercase letter.")
            .Matches(@"[0-9]")
                .WithMessage("Password must contain a number.")
            .Matches(@"[^a-zA-Z0-9]")
                .WithMessage("Password must contain a special character.");

                RuleFor(x => x.AdminFullName)
            .NotEmpty()
                .WithMessage("Full name is required.")
            .MaximumLength(100)
                .WithMessage("Full name too long.");
    }
}