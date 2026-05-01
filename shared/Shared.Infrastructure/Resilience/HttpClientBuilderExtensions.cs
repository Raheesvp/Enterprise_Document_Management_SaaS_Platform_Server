using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Polly;

namespace Shared.Infrastructure.Resilience;

public static class HttpClientBuilderExtensions
{
    public static IHttpClientBuilder AddResiliencePolicies(
        this IHttpClientBuilder builder,
        string                  clientName)
    {
        return builder
            .AddPolicyHandler((services, _) =>
            {
                var logger = services
                    .GetRequiredService<ILoggerFactory>()
                    .CreateLogger("ResiliencePolicies");
                return ResiliencePolicies.GetCombinedPolicy(logger);
            });
    }
}