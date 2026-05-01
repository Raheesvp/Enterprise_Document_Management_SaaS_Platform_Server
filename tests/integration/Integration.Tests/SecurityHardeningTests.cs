using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Xunit;

namespace Integration.Tests;

public class SecurityHardeningTests
{
    private readonly HttpClient _http = new();

    private async Task<(string AccessToken,
        string RefreshToken)> LoginAsync()
    {
        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "admin@test-81e12ed4.com",
                password  = "Test@123456!",
                subdomain = "test-81e12ed4"
            });

        resp.EnsureSuccessStatusCode();

        var result = await resp.Content
            .ReadFromJsonAsync<FullAuthResult>();

        return (result!.AccessToken, result.RefreshToken);
    }

    [Fact]
    public async Task RefreshToken_ShouldReturn_NewTokens()
    {
        var (_, refreshToken) = await LoginAsync();

        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/refresh",
            new { refreshToken });

        resp.StatusCode.Should().Be(HttpStatusCode.OK);

        var result = await resp.Content
            .ReadFromJsonAsync<FullAuthResult>();

        result!.AccessToken.Should().NotBeNullOrEmpty();
        result.RefreshToken.Should().NotBeNullOrEmpty();
        result.RefreshToken.Should().NotBe(refreshToken,
            "refresh token should be rotated");
    }

    [Fact]
    public async Task RefreshToken_WithInvalidToken_ShouldReturn401()
    {
        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/refresh",
            new { refreshToken = "invalid-token-xyz" });

        resp.StatusCode.Should().Be(HttpStatusCode.Unauthorized);
    }

    [Fact]
    public async Task Login_WithSqlInjection_ShouldReturn400Or401()
    {
        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "'; DROP TABLE users; --",
                password  = "Test@123456!",
                subdomain = "test"
            });

        resp.StatusCode.Should().BeOneOf(
            HttpStatusCode.BadRequest,
            HttpStatusCode.Unauthorized);
    }

    [Fact]
    public async Task Login_WithXssPayload_ShouldReturn400Or401()
    {
        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "<script>alert('xss')</script>@test.com",
                password  = "Test@123456!",
                subdomain = "test"
            });

        resp.StatusCode.Should().BeOneOf(
            HttpStatusCode.BadRequest,
            HttpStatusCode.Unauthorized);
    }

    [Fact]
    public async Task Documents_ShouldHave_SecurityHeaders()
    {
        var (token, _) = await LoginAsync();
        _http.DefaultRequestHeaders.Authorization =
            new("Bearer", token);

        var response = await _http
            .GetAsync("http://localhost:5000/api/documents");

        response.StatusCode.Should().Be(HttpStatusCode.OK);

        response.Headers.Contains("X-Frame-Options")
            .Should().BeTrue("X-Frame-Options header missing");
        response.Headers.Contains("X-Content-Type-Options")
            .Should().BeTrue("X-Content-Type-Options header missing");
    }

    [Fact]
    public async Task PasswordStrength_WeakPassword_ShouldFail()
    {
        var resp = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/register", new
            {
                companyName   = "Test Company",
                subdomain     = "testcompany99",
                adminEmail    = "admin@testcompany99.com",
                adminPassword = "123456",    // too weak
                adminFullName = "Test Admin"
            });

        resp.StatusCode.Should().Be(HttpStatusCode.BadRequest);
    }
}

public record FullAuthResult(
    string AccessToken,
    string RefreshToken,
    DateTime ExpiresAt,
    DateTime RefreshExpiresAt);