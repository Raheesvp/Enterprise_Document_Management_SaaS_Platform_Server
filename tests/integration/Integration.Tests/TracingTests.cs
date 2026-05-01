using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Xunit;

namespace Integration.Tests;

public class TracingTests
{
    private readonly HttpClient _http = new(); //use real HttpClient to test the full stack (including Seq)

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
            .ReadFromJsonAsync<TracingLoginResult>();
        return result!.AccessToken;
    }

    [Fact]
    public async Task Seq_ShouldBeReachable()
    {
        var response = await new HttpClient()
            .GetAsync("http://localhost:5341/api");
        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }

    [Fact]
    public async Task Documents_ShouldRespond_WithinSLA()
    {
        var token = await GetTokenAsync();
        _http.DefaultRequestHeaders.Authorization =
            new("Bearer", token);

        var sw = System.Diagnostics.Stopwatch.StartNew();

        var response = await _http
            .GetAsync("http://localhost:5000/api/documents");

        sw.Stop();

        response.StatusCode.Should().Be(HttpStatusCode.OK);
        sw.ElapsedMilliseconds.Should().BeLessThan(2000,
            "document list should respond within 2s (Redis cache active)");
    }

    [Fact]
    public async Task AllServices_ShouldBeHealthy()
    {
        var ports = new[] { 5001, 5002, 5003, 5004 };
        foreach (var port in ports)
        {
            var response = await new HttpClient()
                .GetAsync($"http://localhost:{port}/health");
            response.StatusCode.Should().Be(HttpStatusCode.OK,
                $"service on port {port} should be healthy");
        }
    }
}

public record TracingLoginResult(string AccessToken);