using Polly;
using Polly.Retry;
using Polly.CircuitBreaker;
using Microsoft.Extensions.Logging;
using System.Net.Http;

public static class ResiliencePolicies
{
    // --- Retry Policy ---
    // Retries 3 times with exponential backoff: 2s, 4s, 8s
    public static AsyncRetryPolicy<HttpResponseMessage> GetRetryPolicy(
        ILogger logger)
    {
        return Policy<HttpResponseMessage>
            .Handle<HttpRequestException>()
            .OrResult(r => !r.IsSuccessStatusCode)
            .WaitAndRetryAsync(
                retryCount: 3,
                sleepDurationProvider: attempt =>
                    TimeSpan.FromSeconds(Math.Pow(2, attempt)),
                onRetry: (outcome, timespan, attempt, context) =>
                {
                    logger.LogWarning(
                        "[POLLY RETRY] Attempt {Attempt} after {Delay}s. " +
                        "Reason: {Reason}",
                        attempt,
                        timespan.TotalSeconds,
                        outcome.Exception?.Message
                            ?? outcome.Result?.StatusCode.ToString());
                });
    }

    // --- Circuit Breaker Policy ---
    // Opens circuit after 5 consecutive failures
    // Stays open for 30 seconds
    // Half-opens to test one request
    public static AsyncCircuitBreakerPolicy<HttpResponseMessage>
        GetCircuitBreakerPolicy(ILogger logger)
    {
        return Policy<HttpResponseMessage>
            .Handle<HttpRequestException>()
            .OrResult(r => !r.IsSuccessStatusCode)
            .CircuitBreakerAsync(
                handledEventsAllowedBeforeBreaking: 5,
                durationOfBreak: TimeSpan.FromSeconds(30),
                onBreak: (outcome, breakDelay) =>
                {
                    logger.LogError(
                        "[POLLY CIRCUIT OPEN] Circuit opened for {Delay}s. " +
                        "Reason: {Reason}",
                        breakDelay.TotalSeconds,
                        outcome.Exception?.Message
                            ?? outcome.Result?.StatusCode.ToString());
                },
                onReset: () =>
                {
                    logger.LogInformation(
                        "[POLLY CIRCUIT CLOSED] Circuit reset — " +
                        "service is healthy again.");
                },
                onHalfOpen: () =>
                {
                    logger.LogWarning(
                        "[POLLY CIRCUIT HALF-OPEN] Testing one request...");
                });
    }

    // --- Combined Policy (Retry + Circuit Breaker) ---
    // Circuit Breaker wraps Retry
    // Order matters: outer = circuit breaker, inner = retry
    public static IAsyncPolicy<HttpResponseMessage> GetCombinedPolicy(
        ILogger logger)
    {
        return Policy.WrapAsync(
            GetCircuitBreakerPolicy(logger),
            GetRetryPolicy(logger));
    }
}