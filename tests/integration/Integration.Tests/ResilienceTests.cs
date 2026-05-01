using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Xunit;

namespace Integration.Tests;

public class ResilienceTests
{
    private readonly HttpClient _http = new();

    private async Task<string> GetTokenAsync()
    {
        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "admin@test-81e12ed4.com",
                password  = "Test@123456!",
                subdomain = "test-81e12ed4"
            });

        var result = await resp.Content
            .ReadFromJsonAsync<ResilienceLoginResult>();
        return result!.AccessToken;
    }

    [Fact]
    public async Task Documents_ShouldReturn200_UnderNormalLoad()
    {
        var token = await GetTokenAsync();
        _http.DefaultRequestHeaders.Authorization =
            new("Bearer", token);

        // Send 5 concurrent requests
        var tasks = Enumerable.Range(1, 5).Select(_ =>
            _http.GetAsync("http://localhost:5000/api/documents"));

        var responses = await Task.WhenAll(tasks);

        responses.Should().AllSatisfy(r =>
            r.StatusCode.Should().Be(HttpStatusCode.OK));
    }

    [Fact]
    public async Task Documents_ShouldHandle_RapidRequests()
    {
        var token = await GetTokenAsync();
        _http.DefaultRequestHeaders.Authorization =
            new("Bearer", token);

        // 10 rapid sequential requests
        for (int i = 0; i < 10; i++)
        {
            var response = await _http
                .GetAsync("http://localhost:5000/api/documents");
            response.StatusCode.Should().Be(HttpStatusCode.OK);
        }
    }
}

public record ResilienceLoginResult(string AccessToken);