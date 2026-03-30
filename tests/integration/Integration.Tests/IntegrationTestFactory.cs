using Microsoft.AspNetCore.Mvc.Testing;

namespace Integration.Tests;

public class IntegrationTestFactory : WebApplicationFactory<Program>
{
    // Your setup for Testcontainers (Postgres/Redis) goes here.
}
