using IdentityService.API.Extensions;
using IdentityService.API.Middleware;
using IdentityService.Infrastructure;
using IdentityService.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Serilog;
using Serilog.Enrichers.Span;
using Shared.Infrastructure.Telemetry;
using Shared.Infrastructure.Security;

var builder = WebApplication.CreateBuilder(args);

// ── Logging ────────────────────────────────────────────────────
builder.Host.UseSerilog((context, configuration) =>
{
    configuration
        .ReadFrom.Configuration(context.Configuration)
        .Enrich.FromLogContext()
        .Enrich.WithSpan()
        .WriteTo.Console(
            outputTemplate:
                "[{Level:u3}] [{TraceId}] {Message:lj}{NewLine}{Exception}")
        .WriteTo.Seq(
            context.Configuration["Seq:ServerUrl"]
            ?? "http://localhost:5341");
});

// ── Application Services (MediatR, Validation, JWT) ───────────
builder.Services.AddApplicationServices(builder.Configuration);

// ── Infrastructure (EF Core, Repositories, Services) ──────────
builder.Services.AddInfrastructure(builder.Configuration);

// ── Controllers ────────────────────────────────────────────────
builder.Services.AddControllers();

// ── Exception Handling ─────────────────────────────────────────
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();

// ── Health Checks ──────────────────────────────────────────────
builder.Services.AddHealthChecks()
    .AddSqlServer(builder.Configuration.GetConnectionString("IdentityDb")!);

builder.Services.AddOpenTelemetryTracing(
    builder.Configuration,
    "IdentityService.API");


// ── Swagger (Dev only) ─────────────────────────────────────────
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{

    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Identity Service API",
        Version = "v1",
        Description = "Identity and Access Management for FinTrack"
    });

    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter JWT token. Example: Bearer {your token}"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
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
            Array.Empty<string>()
        }
    });
});



builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowGateway", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5000",
                "http://localhost:5010",
                "http://localhost:4200"
                )
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});
var app = builder.Build();

// ── Auto-migrate on startup ────────────────────────────────────
// Creates DB and tables automatically — no manual migration needed
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<IdentityDbContext>();
    await db.Database.MigrateAsync();
}

// ── Middleware Pipeline ────────────────────────────────────────
// ✅ Correct order
app.UseMiddleware<ExceptionMiddleware>();    // 1. catch all exceptions first


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>                      // ✅ c => lambda syntax
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Identity Service API v1");
        c.RoutePrefix = "swagger";
    });
}

app.UseSerilogRequestLogging();             // 2. log requests
app.UseExceptionHandler();                  // 3. global exception handling
app.UseSecurityHeaders();
app.UseCors("AllowGateway");               // 4. CORS before auth
app.UseAuthentication();                    // 5. validate JWT
app.UseAuthorization();                     // 6. check permissions
app.MapControllers();                       // 7. route to controllers
app.MapHealthChecks("/health");             // 8. health endpoint
app.Run();
