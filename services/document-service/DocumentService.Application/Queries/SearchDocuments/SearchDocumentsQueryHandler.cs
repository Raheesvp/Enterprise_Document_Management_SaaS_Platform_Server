using DocumentService.Application.Interfaces;
using DocumentService.Domain.Search;
using MediatR;

namespace DocumentService.Application.Queries.SearchDocuments;

public class SearchDocumentsQueryHandler
    : IRequestHandler<SearchDocumentsQuery, IReadOnlyList<DocumentIndex>>
{
    private readonly ISearchService _searchService;

    public SearchDocumentsQueryHandler(ISearchService searchService)
        => _searchService = searchService;

    public async Task<IReadOnlyList<DocumentIndex>> Handle(
        SearchDocumentsQuery request,
        CancellationToken    ct)
        => await _searchService.SearchAsync(request.TenantId, request.Q, ct);
}