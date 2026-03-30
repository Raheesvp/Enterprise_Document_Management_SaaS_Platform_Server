
namespace DocumentService.Domain.Search;

public class DocumentIndex
{
    public Guid Id { get; set; }
    public Guid TenantId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string ContentType { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string UploadedByName { get; set; } = string.Empty;
    public long FileSizeBytes { get; set; }
    public DateTime CreatedAt { get; set; }


}