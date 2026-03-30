using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Xunit;

namespace Integration.Tests;

public class SearchIntegrationTests
{
    private readonly HttpClient _http = new();

    private async Task LoginAsync()
    {
        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "admin@test-81e12ed4.com",
                password  = "Test@123456!",
                subdomain = "test-81e12ed4"
            });

        var result = await resp.Content
            .ReadFromJsonAsync<SearchLoginResult>();

        _http.DefaultRequestHeaders.Authorization =
            new("Bearer", result!.AccessToken);
    }

    [Fact]
    public async Task Search_WithValidQuery_ShouldReturn200()
    {
        await LoginAsync();

        var response = await _http.GetAsync(
            "http://localhost:5000/api/documents/search?q=admin");

        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }

    [Fact]
    public async Task Search_WithEmptyQuery_ShouldReturn400()
    {
        await LoginAsync();

        var response = await _http.GetAsync(
            "http://localhost:5000/api/documents/search?q=");

        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task Search_WithNoMatch_ShouldReturnEmptyArray()
    {
        await LoginAsync();

        var response = await _http.GetAsync(
            "http://localhost:5000/api/documents/search?q=xyznotexists999");

        response.StatusCode.Should().Be(HttpStatusCode.OK);

        var results = await response.Content
            .ReadFromJsonAsync<List<object>>();
        results.Should().BeEmpty();
    }

    [Fact]
    public async Task Search_WithoutToken_ShouldReturn401()
    {
        var response = await new HttpClient().GetAsync(
            "http://localhost:5000/api/documents/search?q=admin");

        response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
    }
}

public record SearchLoginResult(string AccessToken);