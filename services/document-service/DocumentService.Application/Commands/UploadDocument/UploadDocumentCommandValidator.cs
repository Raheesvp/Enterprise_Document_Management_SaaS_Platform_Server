using FluentValidation;
using Shared.Infrastructure.Security;


namespace DocumentService.Application.Commands.UploadDocument;

public sealed class UploadDocumentCommandValidator
    : AbstractValidator<UploadDocumentCommand>
{
    // All MIME types the system accepts
    private static readonly string[] AllowedMimeTypes =
    [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "text/plain"
    ];

// Max file size (500MB)
    private const long MaxFileSizeBytes = 50 * 1024 * 1024; // 50MB

    public UploadDocumentCommandValidator()
    {
         // Title validation
        RuleFor(x => x.Title)
            .NotEmpty()
                .WithMessage("Document title is required.")
            .MinimumLength(2)
                .WithMessage("Title must be at least 2 characters.")
            .MaximumLength(200)
                .WithMessage("Title cannot exceed 200 characters.")
            .Must(title => !InputSanitizer.ContainsSqlInjection(title))
                .WithMessage("Title contains invalid characters.")
            .Must(title => !title.Contains(".."))
                .WithMessage("Title contains invalid path characters.");

        // File size validation
        RuleFor(x => x.FileSizeBytes)
            .GreaterThan(0)
                .WithMessage("File size must be greater than 0.")
            .LessThanOrEqualTo(MaxFileSizeBytes)
                .WithMessage($"File size cannot exceed 50MB.");

        // MIME type validation
        RuleFor(x => x.MimeType)
            .NotEmpty()
                .WithMessage("MIME type is required.")
            .Must(mime => AllowedMimeTypes.Contains(mime))
                .WithMessage(x =>
                    $"File type '{x.MimeType}' is not allowed. " +
                    "Allowed: PDF, Word, Excel, JPEG, PNG, TXT");

        // TenantId validation
        RuleFor(x => x.TenantId)
            .NotEmpty()
                .WithMessage("Tenant ID is required.");

        // UploadedByUserId validation
        RuleFor(x => x.UploadedByUserId)
            .NotEmpty()
                .WithMessage("User ID is required.");

        // Description (optional but sanitized)
        RuleFor(x => x.Description)
            .MaximumLength(1000)
                .WithMessage("Description cannot exceed 1000 characters.")
            .When(x => x.Description is not null);
    }
}