namespace DocumentService.Application.Common;

public static class CacheKeys
{
    // Document list cache key pattern:
    // docs:{tenantId}:page:{page}:size:{pageSize}:status:{status}:search:{search}
    public static string DocumentList(
        Guid    tenantId,
        int     page,
        int     pageSize,
        string? status,
        string? type,
        string? search,
        DateTime? fromDate,
        DateTime? toDate)
        => $"docs:{tenantId}:page:{page}:size:{pageSize}" +
           $":status:{status ?? "all"}" +
           $":type:{type ?? "all"}" +
           $":search:{search ?? "none"}" +
           $":from:{fromDate?.ToString("O") ?? "none"}" +
           $":to:{toDate?.ToString("O") ?? "none"}";

    // Prefix for invalidating ALL document list pages for a tenant
    public static string DocumentListPrefix(Guid tenantId)
        => $"docs:{tenantId}:";
}
