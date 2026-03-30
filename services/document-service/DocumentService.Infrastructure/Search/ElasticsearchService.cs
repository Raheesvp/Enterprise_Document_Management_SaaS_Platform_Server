using Nest;
using DocumentService.Application.Interfaces;
using DocumentService.Domain.Search;
using Microsoft.Extensions.Logging;

namespace DocumentService.Infrastructure.Search;

public class ElasticsearchService : ISearchService
{
    private readonly IElasticClient _client;
    private readonly ILogger<ElasticsearchService> _logger;
    private const string IndexName = "documents";

    public ElasticsearchService(
        IElasticClient client,
        ILogger<ElasticsearchService> logger)
    {
        _client = client;
        _logger = logger;
    }

    public async Task IndexDocumentAsync(DocumentIndex document, CancellationToken ct = default)
    {
        try
        {
            _logger.LogInformation(
                "[ES] Indexing document. Id: {Id} Title: {Title} TenantId: {TenantId}",
                document.Id, document.Title, document.TenantId);

            var response = await _client.IndexAsync(document, i => i
                .Index(IndexName)
                .Id(document.Id.ToString()), ct);

            if (response.IsValid)
            {
                _logger.LogInformation(
                    "[ES] Indexed successfully. Id: {Id} Result: {Result}",
                    document.Id, response.Result);
            }
            else
            {
                _logger.LogError(
                    "[ES] Index failed. Id: {Id} Error: {Error} DebugInfo: {Debug}",
                    document.Id,
                    response.ServerError?.Error?.Reason,
                    response.DebugInformation);
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "[ES] EXCEPTION during IndexDocumentAsync. Id: {Id}",
                document.Id);
        }
    }

    public async Task<IReadOnlyList<DocumentIndex>> SearchAsync(
        Guid tenantId, string query, CancellationToken ct = default)
    {
        try
        {
            _logger.LogInformation(
                "[ES] Searching. TenantId: {TenantId} Query: {Query}",
                tenantId, query);

            var response = await _client.SearchAsync<DocumentIndex>(s => s
                .Index(IndexName)
                .Query(q => q
                    .Bool(b => b
                        .Must(
                            m => m.Term(t => t
                                .Field("tenantId.keyword")
                                .Value(tenantId.ToString())),
                            m => m.MultiMatch(mm => mm
                                .Query(query)
                                .Fields(f => f
                                    .Field(d => d.Title)
                                    .Field(d => d.UploadedByName)
                                    .Field(d => d.ContentType))
                            )
                        )
                    )
                ), ct);

            if (!response.IsValid)
            {
                _logger.LogError(
                    "[ES] Search failed. Error: {Error}",
                    response.ServerError?.Error?.Reason);
                return Array.Empty<DocumentIndex>();
            }

            _logger.LogInformation(
                "[ES] Search returned {Count} results.",
                response.Documents.Count);

            return response.Documents.ToList();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "[ES] EXCEPTION during SearchAsync. TenantId: {TenantId} Query: {Query}",
                tenantId, query);
            return Array.Empty<DocumentIndex>();
        }
    }
}