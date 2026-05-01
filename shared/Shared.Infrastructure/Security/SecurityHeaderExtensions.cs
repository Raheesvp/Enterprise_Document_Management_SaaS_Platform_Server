using Microsoft.AspNetCore.Builder;

namespace Shared.Infrastructure.Security;

public static class SecurityHeadersExtensions
{
    public static IApplicationBuilder UseSecurityHeaders(
        this IApplicationBuilder app)
        => app.UseMiddleware<SecurityHeadersMiddleware>();
}