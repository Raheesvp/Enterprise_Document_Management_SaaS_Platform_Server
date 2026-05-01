using Gateway.API.Extensions;
using Gateway.API.Middleware;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Serilog;
using Serilog.Enrichers.Span;
using Shared.Infrastructure.Resilience;
using Shared.Infrastructure.Telemetry;
using Shared.Infrastructure.Security;
using AspNetCoreRateLimit;

var builder = WebApplication.CreateBuilder(args);

// ── Logging ────────────────────────────────────────────────────────────────
// Serilog structured logging — every log line has TenantId, RequestId etc.
builder.Host.UseSerilog((context, configuration) =>
    configuration
        .ReadFrom.Configuration(context.Configuration)
        .Destructure.With<Shared.Infrastructure.Logging.SensitiveDataDestructuringPolicy>());

// ── YARP Reverse Proxy ─────────────────────────────────────────────────────
// Reads route + cluster config from appsettings.json
// Hot-reload supported — change routes without restarting
builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

// ── Authentication + Authorization ────────────────────────────────────────
// JWT validated HERE at gateway — downstream services trust the headers
builder.Services.AddGatewayAuthentication(builder.Configuration);


builder.Services.AddAuthorization(options =>
{
    // Matches the "public-access" policy in your JSON
    options.AddPolicy("public-access", policy => policy.RequireAssertion(_ => true));

    // Matches the "authenticated" policy in your JSON
    options.AddPolicy("authenticated", policy => policy.RequireAuthenticatedUser());
});

// ── Rate Limiting ──────────────────────────────────────────────────────────
builder.Services.AddGatewayRateLimiting();

// ── Health Checks ──────────────────────────────────────────────────────────
builder.Services.AddHealthChecks();
builder.Services.AddEndpointsApiExplorer();

// Exception handling
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

builder.Services.AddOpenTelemetryTracing(
    builder.Configuration,
    "Gateway.API");

builder.Services.AddMemoryCache();
builder.Services.Configure<IpRateLimitOptions>(
    builder.Configuration.GetSection("IpRateLimiting"));
builder.Services.AddSingleton<IIpPolicyStore,
    MemoryCacheIpPolicyStore>();
builder.Services.AddSingleton<IRateLimitCounterStore,
    MemoryCacheRateLimitCounterStore>();
builder.Services.AddSingleton<IRateLimitConfiguration,
    RateLimitConfiguration>();
builder.Services.AddSingleton<IProcessingStrategy,
    AsyncKeyLockProcessingStrategy>();
builder.Services.AddInMemoryRateLimiting();




builder.Services.AddSwaggerGen(c =>
{
   

 
    // 1. Define the Security Scheme (How the lock button works)
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "bearer"
    });

c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});

// ── CORS ───────────────────────────────────────────────────────────────────
// Configured once at gateway — downstream services don't need CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:4200",
                "https://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            .WithExposedHeaders(
                "traceparent",
                "tracestate",
                "X-Trace-Id");
    });

    options.AddPolicy("AllowFrontendStrict", policy =>
    {
        policy
            .WithOrigins("https://yourdomain.com") // Placeholder for production
            .WithMethods("GET", "POST", "PUT", "DELETE")
            .WithHeaders(
                "Authorization",
                "Content-Type",
                "X-Requested-With")
            .AllowCredentials();
    });
});

builder.Services.Configure<Microsoft.AspNetCore.Http.Features.FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = 52_428_800; // 50MB
});

builder.WebHost.ConfigureKestrel(options =>
{
    options.Limits.MaxRequestBodySize = 30 * 1024 * 1024; // 30MB
});

builder.Services.AddHttpClient("YARPClient")
    .AddResiliencePolicies("YARPClient");

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        // Same-origin path via gateway proxy (avoids browser CORS issues)
        c.SwaggerEndpoint("/identity-swagger/v1/swagger.json", "Identity Service API");

        c.SwaggerEndpoint("/workflow-swagger/v1/swagger.json", "Workflow Service");

        // This shows the Gateway's own (empty) definition
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Identity Service(via Gateway)");

        c.RoutePrefix = "swagger";
    });
}

// ── Middleware Pipeline (ORDER MATTERS) ────────────────────────────────────
// 1. Serilog request logging — log every request
app.UseSerilogRequestLogging();

// 1.5 Global exception handler
app.UseExceptionHandler();

// 2. CORS — must be before auth
app.UseCors("AllowFrontend");

// 2.5 Security headers
app.UseSecurityHeaders();

// 3. Rate limiting — reject before spending auth resources
//app.UseRateLimiter();

app.UseIpRateLimiting();

// 4. Authentication — validate JWT
app.UseAuthentication();

// 5. Authorization — check policies
app.UseAuthorization();

// 6. Tenant resolution — extract tenant from JWT, add headers
app.UseMiddleware<TenantResolutionMiddleware>();

// 7. Health check endpoint

// 8. YARP — forward to downstream services
app.MapHealthChecks("/health");
app.MapReverseProxy();

app.Run();
