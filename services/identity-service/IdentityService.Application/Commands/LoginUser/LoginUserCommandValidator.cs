using FluentValidation;

namespace IdentityService.Application.Commands.LoginUser;

public class LoginUserCommandValidator : AbstractValidator<LoginUserCommand>
{
    public LoginUserCommandValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty().WithMessage("Email is required")
            .EmailAddress().WithMessage("Invalid email format").MaximumLength(256).WithMessage("Email too long");

        RuleFor(x => x.Password)
            .NotEmpty().WithMessage("Password is required").MinimumLength(8).WithMessage("Password must be atleast 8 characters").MaximumLength(128).WithMessage("Password too long");

        RuleFor(x => x.Subdomain)
            .NotEmpty()
                .WithMessage("Subdomain is required.")
            .Matches(@"^[a-z0-9\-]+$")
                .WithMessage("Subdomain can only contain lowercase letters, numbers and hyphens.")
            .MaximumLength(50)
                .WithMessage("Subdomain too long.");
    }
}