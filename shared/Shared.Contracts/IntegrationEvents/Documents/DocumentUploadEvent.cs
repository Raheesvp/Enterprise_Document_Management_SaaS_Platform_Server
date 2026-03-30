namespace Shared.Contracts.IntegrationEvents.Documents;

public record DocumentUploadEvent(
    Guid DocumentId,
    Guid TenantId,
    string Title,
    Guid UploadedByUserId,
    string FileName,
    string ContentType,
    long FileSizeBytes,
    string StoragePath,
    Guid? WorkflowTemplateId = null)
{
    // These remain inside because they have default values
    public Guid EventId { get; init; } = Guid.NewGuid();
    public DateTime OccuredOn { get; init; } = DateTime.UtcNow;
}