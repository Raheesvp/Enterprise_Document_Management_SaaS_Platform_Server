using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Xunit;

namespace Integration.Tests;

public class SecurityTests
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
            .ReadFromJsonAsync<SecurityLoginResult>();
        return result!.AccessToken;
    }

    [Fact]
    public async Task Documents_ShouldReturn_SecurityHeaders()
    {
        var token = await GetTokenAsync();
        _http.DefaultRequestHeaders.Authorization =
            new("Bearer", token);

        var response = await _http
            .GetAsync("http://localhost:5000/api/documents");

        response.StatusCode.Should().Be(HttpStatusCode.OK);

        response.Headers.Contains("X-Frame-Options")
            .Should().BeTrue();
        response.Headers.Contains("X-Content-Type-Options")
            .Should().BeTrue();
    }

    [Fact]
    public async Task Login_WithInvalidEmail_ShouldReturn400()
    {
        var response = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "not-an-email",
                password  = "Test@123456!",
                subdomain = "test-81e12ed4"
            });

        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task Login_WithEmptyPassword_ShouldReturn400()
    {
        var response = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "admin@test-81e12ed4.com",
                password  = "",
                subdomain = "test-81e12ed4"
            });

        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }

    [Fact]
    public async Task Documents_WithoutToken_ShouldReturn401()
    {
        var response = await new HttpClient()
            .GetAsync("http://localhost:5000/api/documents");

        response.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
    }

    [Fact]
    public async Task Register_WithWeakPassword_ShouldReturn400()
    {
        var response = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/register", new
            {
                companyName   = "Test Co",
                subdomain     = "testco",
                adminEmail    = "admin@testco.com",
                adminPassword = "weak",      // too weak
                adminFullName = "Test Admin"
            });

        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }
}

public record SecurityLoginResult(string AccessToken);