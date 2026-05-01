using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Shared.Infrastructure.Security;

public class GlobalExceptionHandler : IExceptionHandler
{
    private readonly ILogger<GlobalExceptionHandler> _logger;

    public GlobalExceptionHandler(
        ILogger<GlobalExceptionHandler> logger)
        => _logger = logger;

    public async ValueTask<bool> TryHandleAsync(
        HttpContext     httpContext,
        Exception       exception,
        CancellationToken ct)
    {
        _logger.LogError(exception,
            "[UNHANDLED EXCEPTION] {Message}", exception.Message);

        var (statusCode, title) = exception switch
        {
            UnauthorizedAccessException =>
                (StatusCodes.Status401Unauthorized, "Unauthorized"),
            ArgumentException =>
                (StatusCodes.Status400BadRequest, "Bad Request"),
            KeyNotFoundException =>
                (StatusCodes.Status404NotFound, "Not Found"),
            _ =>
                (StatusCodes.Status500InternalServerError,
                    "Internal Server Error")
        };

        var problem = new ProblemDetails
        {
            Status = statusCode,
            Title  = title,
            Detail = exception.Message,
            Instance = httpContext.Request.Path
        };

        httpContext.Response.StatusCode = statusCode;

        await httpContext.Response
            .WriteAsJsonAsync(problem, ct);

        return true;
    }
}