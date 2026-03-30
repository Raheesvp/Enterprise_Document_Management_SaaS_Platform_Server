using DocumentService.Domain.Search;
using MediatR;

namespace DocumentService.Application.Queries.SearchDocuments;

public record SearchDocumentsQuery(Guid TenantId, string Q)
    : IRequest<IReadOnlyList<DocumentIndex>>;