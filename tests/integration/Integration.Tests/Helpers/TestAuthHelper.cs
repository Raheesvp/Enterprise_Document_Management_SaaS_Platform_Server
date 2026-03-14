using System.Net.Http.Json;
using System.Text.Json;

namespace Integration.Tests.Helpers;

public static class TestAuthHelper
{
    public static async Task<string> RegisterAndLoginAsync(
        HttpClient client,
        string tenantName = "TestTenant",
        string email      = "admin@test.com",
        string password   = "Test@123456!")
    {
        // Subdomain must match: ^[a-z0-9-]+$
        // Only lowercase letters, numbers and hyphens
        var uniqueId  = Guid.NewGuid().ToString("N")
            .Substring(0, 8).ToLower();
        var subdomain = $"test-{uniqueId}";

        // Step 1 — Register tenant
        var registerPayload = new
        {
            tenantName    = tenantName,
            subdomain     = subdomain,
            contactEmail  = email,
            adminFullName = "Test Admin",
            adminEmail    = email,
            adminPassword = password
        };

        var registerResponse = await client.PostAsJsonAsync(
            "http://localhost:5001/api/identity/register",
            registerPayload);

        if (!registerResponse.IsSuccessStatusCode)
        {
            var err = await registerResponse.Content
                .ReadAsStringAsync();
            throw new Exception(
                $"Register failed: " +
                $"{registerResponse.StatusCode} — {err}");
        }

        // Step 2 — Login and get JWT
        var loginPayload = new
        {
            email     = email,
            password  = password,
            subdomain = subdomain
        };

        var loginResponse = await client.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login",
            loginPayload);

        if (!loginResponse.IsSuccessStatusCode)
        {
            var err = await loginResponse.Content
                .ReadAsStringAsync();
            throw new Exception(
                $"Login failed: " +
                $"{loginResponse.StatusCode} — {err}");
        }

        var content = await loginResponse.Content
            .ReadAsStringAsync();

        var json = JsonSerializer.Deserialize<JsonElement>(
            content,
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

        // AuthResponseDto returns AccessToken
        if (json.TryGetProperty("accessToken", out var tokenProp))
            return tokenProp.GetString()!;

        throw new Exception(
            $"AccessToken not found in response: {content}");
    }
}
