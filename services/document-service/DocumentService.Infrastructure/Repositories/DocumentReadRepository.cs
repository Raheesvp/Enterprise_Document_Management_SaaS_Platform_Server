using Dapper;
using DocumentService.Domain.Repositories;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace DocumentService.Infrastructure.Repositories;

public sealed class DocumentReadRepository : IDocumentReadRepository
{
    private readonly string _connectionString;

    public DocumentReadRepository(IConfiguration configuration)
    {
        _connectionString = configuration
            .GetConnectionString("DocumentDb")!;
    }

    private NpgsqlConnection CreateConnection()
        => new(_connectionString);

    // Dapper-compatible DTO — needs parameterless constructor
    private sealed class DocumentSummaryRow
    {
        public Guid     Id                { get; set; }
        public Guid     TenantId          { get; set; }
        public string   Title             { get; set; } = "";
        public string   Status            { get; set; } = "";
        public string   DocumentType      { get; set; } = "";
        public string   MimeType          { get; set; } = "";
        public long     FileSizeBytes     { get; set; }
        public string   StoragePath       { get; set; } = "";
        public int      VersionCount      { get; set; }
        public Guid   UploadedByUserId  { get; set; } 
        public string   UploadedByName    { get; set; } = string.Empty;
        public DateTime CreatedAt         { get; set; }
        public DateTime UpdatedAt         { get; set; }
        public string?  Description       { get; set; }
        public string?  Tags              { get; set; }

        public DocumentSummary ToSummary() => new(
            Id, TenantId, Title, Status, DocumentType,
            MimeType, FileSizeBytes, StoragePath, VersionCount,
          UploadedByUserId, UploadedByName,
            CreatedAt, UpdatedAt, Description, Tags);
    }

    private sealed class DocumentVersionSummaryRow
    {
        public Guid     Id                { get; set; }
        public int      VersionNumber     { get; set; }
        public long     FileSizeBytes     { get; set; }
        public string   StoragePath       { get; set; } = "";
        public bool     IsCurrentVersion  { get; set; }
        public Guid   UploadedByUserId  { get; set; } 
        public string   UploadedByName    { get; set; } = string.Empty;
        public DateTime CreatedAt         { get; set; }
        public string?  ExtractedText     { get; set; }
        public int?     PageCount         { get; set; }

        public DocumentVersionSummary ToSummary() => new(
            Id, VersionNumber, FileSizeBytes, StoragePath,
            IsCurrentVersion, UploadedByUserId, UploadedByName,
            CreatedAt, ExtractedText, PageCount);
    }

    public async Task<DocumentSummary?> GetSummaryByIdAsync(
        Guid id,
        Guid tenantId,
        CancellationToken ct = default)
    {
        const string sql = @"
            SELECT
                d.id                    AS Id,
                d.tenant_id             AS TenantId,
                d.title                 AS Title,
                d.status                AS Status,
                d.document_type         AS DocumentType,
                d.mime_type             AS MimeType,
                COALESCE(dv.file_size_bytes, 0) AS FileSizeBytes,
                COALESCE(dv.storage_path, '') AS StoragePath,
                COUNT(dv2.id)           AS VersionCount,
                d.uploaded_by_user_id   AS UploadedByUserId,
                d.uploaded_by_name      AS UploadedByName,
                d.created_at            AS CreatedAt,
                d.updated_at            AS UpdatedAt,
                d.description           AS Description,
                d.tags                  AS Tags
            FROM documents d
            LEFT JOIN document_versions dv
                ON dv.document_id = d.id
                AND dv.is_current_version = true
            LEFT JOIN document_versions dv2
                ON dv2.document_id = d.id
            WHERE d.id = @Id
              AND d.tenant_id = @TenantId
            GROUP BY
                d.id, d.tenant_id, d.title, d.status,
                d.document_type, d.mime_type,
                dv.file_size_bytes, dv.storage_path, d.uploaded_by_user_id,
                d.created_at, d.updated_at,
                d.description, d.tags";

        await using var connection = CreateConnection();

        var row = await connection
            .QueryFirstOrDefaultAsync<DocumentSummaryRow>(
                new CommandDefinition(sql,
                    new { Id = id, TenantId = tenantId },
                    cancellationToken: ct));

        return row?.ToSummary();
    }

    public async Task<PagedResult<DocumentSummary>> GetPagedAsync(
        Guid tenantId,
        DocumentQueryFilter filter,
        CancellationToken ct = default)
    {
        var sql = @"
            SELECT
                d.id                    AS Id,
                d.tenant_id             AS TenantId,
                d.title                 AS Title,
                d.status                AS Status,
                d.document_type         AS DocumentType,
                d.mime_type             AS MimeType,
                COALESCE(dv.file_size_bytes, 0) AS FileSizeBytes,
                COALESCE(dv.storage_path, '') AS StoragePath,
                COUNT(dv2.id)           AS VersionCount,
                d.uploaded_by_user_id   AS UploadedByUserId,
                d.uploaded_by_name      AS UploadedByName,
                d.created_at            AS CreatedAt,
                d.updated_at            AS UpdatedAt,
                d.description           AS Description,
                d.tags                  AS Tags
            FROM documents d
            LEFT JOIN document_versions dv
                ON dv.document_id = d.id
                AND dv.is_current_version = true
            LEFT JOIN document_versions dv2
                ON dv2.document_id = d.id
            WHERE d.tenant_id = @TenantId
              AND (@Status IS NULL OR d.status = @Status)
              AND (@DocumentType IS NULL OR d.document_type = @DocumentType)
              AND (@SearchTerm IS NULL OR d.title ILIKE @SearchPattern)
              AND (@FromDate IS NULL OR d.created_at >= @FromDate)
              AND (@ToDate IS NULL OR d.created_at <= @ToDate)
              AND (@ExcludeArchived = false OR d.status != 'Archived')
            GROUP BY
                d.id, d.tenant_id, d.title, d.status,
                d.document_type, d.mime_type,
                dv.file_size_bytes, dv.storage_path, d.uploaded_by_user_id,
                d.created_at, d.updated_at,
                d.description, d.tags
            ORDER BY d.created_at DESC
            LIMIT @PageSize OFFSET @Offset";

        var countSql = @"
            SELECT COUNT(*)
            FROM documents d
            WHERE d.tenant_id = @TenantId
              AND (@Status IS NULL OR d.status = @Status)
              AND (@DocumentType IS NULL OR d.document_type = @DocumentType)
              AND (@SearchTerm IS NULL OR d.title ILIKE @SearchPattern)
              AND (@FromDate IS NULL OR d.created_at >= @FromDate)
              AND (@ToDate IS NULL OR d.created_at <= @ToDate)
              AND (@ExcludeArchived = false OR d.status != 'Archived')";

        var parameters = new
        {
            TenantId        = tenantId,
            Status          = filter.Status?.ToString(),
            DocumentType    = filter.Type?.ToString(),
            SearchTerm      = filter.SearchTerm,
            SearchPattern   = $"%{filter.SearchTerm}%",
            FromDate        = filter.FromDate,
            ToDate          = filter.ToDate,
            ExcludeArchived = !filter.Status.HasValue,
            PageSize        = filter.PageSize,
            Offset          = (filter.Page - 1) * filter.PageSize
        };

        await using var connection = CreateConnection();

        var totalCount = await connection.ExecuteScalarAsync<int>(
            new CommandDefinition(countSql, parameters, cancellationToken: ct));

        var rows = await connection.QueryAsync<DocumentSummaryRow>(
            new CommandDefinition(sql, parameters, cancellationToken: ct));

        var items = rows.Select(r => r.ToSummary())
            .ToList().AsReadOnly();

        return new PagedResult<DocumentSummary>(
            items, totalCount, filter.Page, filter.PageSize);
    }

    public async Task<IReadOnlyList<DocumentVersionSummary>> GetVersionsAsync(
        Guid documentId,
        Guid tenantId,
        CancellationToken ct = default)
    {
        const string sql = @"
            SELECT
                dv.id                   AS Id,
                dv.version_number       AS VersionNumber,
                dv.file_size_bytes      AS FileSizeBytes,
                dv.storage_path         AS StoragePath,
                dv.is_current_version   AS IsCurrentVersion,
                d.uploaded_by_user_id  AS UploadedByUserId,
                d.uploaded_by_name      AS UploadedByName,
                dv.created_at           AS CreatedAt,
                dv.extracted_text       AS ExtractedText,
                dv.page_count           AS PageCount
            FROM document_versions dv
            INNER JOIN documents d ON d.id = dv.document_id
            WHERE dv.document_id = @DocumentId
              AND d.tenant_id = @TenantId
            ORDER BY dv.version_number ASC";

        await using var connection = CreateConnection();

        var rows = await connection
            .QueryAsync<DocumentVersionSummaryRow>(
                new CommandDefinition(sql,
                    new { DocumentId = documentId, TenantId = tenantId },
                    cancellationToken: ct));

        return rows.Select(r => r.ToSummary())
            .ToList().AsReadOnly();
    }
}
