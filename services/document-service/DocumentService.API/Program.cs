using DocumentService.Application;
using DocumentService.Infrastructure;
using DocumentService.Infrastructure.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Shared.Infrastructure.Telemetry;
using Shared.Infrastructure.Resilience;
using Shared.Infrastructure.Security;
using Serilog.Enrichers.Span;

var builder = WebApplication.CreateBuilder(args);

IdentityModelEventSource.ShowPII = true;
JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
JwtSecurityTokenHandler.DefaultMapInboundClaims = false;

builder.Host.UseSerilog((context, config) =>
    config
        .ReadFrom.Configuration(context.Configuration)
        .Destructure.With<Shared.Infrastructure.Logging.SensitiveDataDestructuringPolicy>());

builder.Services.AddApplicationServices();
builder.Services.AddInfrastructure(builder.Configuration);

// Add HTTP clients with resilience policies
builder.Services.AddHttpClient("MinioClient")
    .AddResiliencePolicies("MinioClient");

builder.Services.AddHttpClient("ElasticsearchClient")
    .AddResiliencePolicies("ElasticsearchClient");

builder.Services.AddControllers();

builder.Services.Configure<Microsoft.AspNetCore.Http.Features.FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = 52_428_800; // 50MB
});

builder.WebHost.ConfigureKestrel(options =>
{
    options.Limits.MaxRequestBodySize = 30 * 1024 * 1024; // 30MB
});

builder.Services.AddEndpointsApiExplorer();

// Exception handling
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

var jwtSecretKey = builder.Configuration["JwtSettings:SecretKey"]!;
var jwtIssuer    = builder.Configuration["JwtSettings:Issuer"]!;
var jwtAudience  = builder.Configuration["JwtSettings:Audience"]!;

Console.WriteLine($"[JWT CONFIG] Issuer:     {jwtIssuer}");
Console.WriteLine($"[JWT CONFIG] Audience:   {jwtAudience}");
Console.WriteLine($"[JWT CONFIG] Key length: {jwtSecretKey.Length}");

// CRITICAL FIX - token has no kid so validator cannot match key
// Solution: disable kid validation entirely
// Accept any key that successfully validates the signature
var signingKey = new SymmetricSecurityKey(
    Encoding.UTF8.GetBytes(jwtSecretKey));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme =
        JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme =
        JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.UseSecurityTokenValidators = true;

    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer           = true,
        ValidateAudience         = true,
        ValidateLifetime         = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer              = jwtIssuer,
        ValidAudience            = jwtAudience,
        ClockSkew                = TimeSpan.Zero,

        // CRITICAL - bypass kid matching
        // Token has no kid - resolve key manually
        IssuerSigningKeyResolver = (token, securityToken, kid, parameters) =>
        {
            Console.WriteLine($"[KEY RESOLVER] kid='{kid}'");
            // Return our key regardless of kid value
            return new List<SecurityKey> { signingKey };
        }
    };

    options.Events = new JwtBearerEvents
    {
        OnAuthenticationFailed = context =>
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(
                $"[JWT FAILED] {context.Exception.Message}");
            Console.ResetColor();
            return Task.CompletedTask;
        },
        OnTokenValidated = context =>
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("[JWT OK] Token validated");
            Console.ResetColor();
            return Task.CompletedTask;
        },
        OnChallenge = context =>
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine(
                $"[JWT CHALLENGE] {context.Error}: " +
                $"{context.ErrorDescription}");
            Console.ResetColor();
            return Task.CompletedTask;
        }
    };
});
builder.Services.AddOpenTelemetryTracing(
    builder.Configuration,
    "DocumentService.API");

builder.Services.AddAuthorization();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new()
    {
        Title   = "Document Service API",
        Version = "v1"
    });
    c.AddSecurityDefinition("Bearer", new()
    {
        Name         = "Authorization",
        Type         = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Scheme       = "Bearer",
        BearerFormat = "JWT",
        In           = Microsoft.OpenApi.Models.ParameterLocation.Header,
        Description  = "Enter your JWT token here"
    });
    c.AddSecurityRequirement(new()
    {
        {
            new()
            {
                Reference = new()
                {
                    Type = Microsoft.OpenApi.Models.ReferenceType
                        .SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

builder.Services.AddHealthChecks()
    .AddNpgSql(
        builder.Configuration.GetConnectionString("DocumentDb")!,
        name: "postgresql",
        tags: new[] { "db", "postgresql" });

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider
        .GetRequiredService<DocumentDbContext>();
    db.Database.Migrate();
}

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .Enrich.WithSpan()              // ← Add this line
    .WriteTo.Console(
        outputTemplate:
            "[{Level:u3}] {TraceId} {Message:lj}{NewLine}{Exception}")
    .WriteTo.Seq(
        builder.Configuration["Seq:Endpoint"]
        ?? "http://localhost:5341")
    .CreateLogger();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json",
        "Document Service v1");
    c.RoutePrefix = "swagger";
});

app.UseSerilogRequestLogging();
app.UseExceptionHandler();
app.UseSecurityHeaders();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.MapHealthChecks("/health");

app.Run();
