using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;
using OpenTelemetry.Instrumentation.EntityFrameworkCore;

namespace Shared.Infrastructure.Telemetry;

public static class OpenTelemetryExtensions
{
    public static IServiceCollection AddOpenTelemetryTracing(
        this IServiceCollection services,
        IConfiguration          configuration,
        string                  serviceName)
    {
        var seqEndpoint = configuration["Seq:Endpoint"]
            ?? "http://localhost:5341";

        services.AddOpenTelemetry()
            .WithTracing(builder =>
            {
                builder
                    // Service identity
                    .SetResourceBuilder(
                        ResourceBuilder.CreateDefault()
                            .AddService(
                                serviceName:    serviceName,
                                serviceVersion: "1.0.0"))

                    // Auto-instrument ASP.NET Core requests
                    .AddAspNetCoreInstrumentation(opts =>
                    {
                        opts.RecordException = true;
                        opts.Filter = ctx =>
                            !ctx.Request.Path.StartsWithSegments("/health");
                    })

                    // Auto-instrument outgoing HTTP calls
                    .AddHttpClientInstrumentation(opts =>
                    {
                        opts.RecordException = true;
                    })

                    // Auto-instrument EF Core queries
                    .AddEntityFrameworkCoreInstrumentation(opts =>
                    {
                        
                    })

                    // Export to Seq via OTLP
                    .AddOtlpExporter(opts =>
                    {
                        opts.Endpoint = new Uri(
                            $"{seqEndpoint}/ingest/otlp/v1/traces");
                        opts.Protocol =
                            OpenTelemetry.Exporter.OtlpExportProtocol.HttpProtobuf;
                    }).AddSource("ProjectSaaS.Documents")
.AddSource("ProjectSaaS.Workflow")
.AddSource("ProjectSaaS.Notifications");

                    
            });

            

        return services;
    }
}
