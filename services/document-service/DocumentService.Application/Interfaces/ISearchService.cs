using DocumentService.Domain.Search;

namespace DocumentService.Application.Interfaces;

public interface ISearchService
{
    Task IndexDocumentAsync(DocumentIndex document, CancellationToken ct = default);
    Task<IReadOnlyList<DocumentIndex>> SearchAsync(Guid tenantId, string query, CancellationToken ct = default);
}