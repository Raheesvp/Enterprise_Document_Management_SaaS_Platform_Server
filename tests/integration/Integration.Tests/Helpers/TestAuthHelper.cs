using System.Net.Http.Json;
using System.Text.Json;

namespace Integration.Tests.Helpers;

// TestAuthHelper — registers tenant and gets JWT token
// Used by all integration tests that need authentication
public static class TestAuthHelper
{
    // Registers a new tenant and returns JWT token
    // Each test gets its own tenant — fully isolated
    public static async Task<string> RegisterAndLoginAsync(
        HttpClient client,
        string tenantName = "TestTenant",
        string email      = "admin@test.com",
        string password   = "Test@123456!")
    {
        // Step 1 — Register tenant
        var registerPayload = new
        {
            tenantName   = tenantName,
            email        = email,
            password     = password,
            firstName    = "Test",
            lastName     = "Admin"
        };

        var registerResponse = await client.PostAsJsonAsync(
            "http://localhost:5001/api/auth/register",
            registerPayload);

        // Step 2 — Login and get JWT
        var loginPayload = new
        {
            email    = email,
            password = password
        };

        var loginResponse = await client.PostAsJsonAsync(
            "http://localhost:5001/api/auth/login",
            loginPayload);

        loginResponse.EnsureSuccessStatusCode();

        var content = await loginResponse.Content
            .ReadAsStringAsync();

        var json = JsonSerializer.Deserialize<JsonElement>(content);

        return json.GetProperty("token").GetString()
            ?? throw new Exception("Token not found in response");
    }
}
