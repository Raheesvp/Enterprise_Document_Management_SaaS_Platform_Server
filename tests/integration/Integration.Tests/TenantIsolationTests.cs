using FluentAssertions;
using Integration.Tests.Helpers;
using System.Net.Http.Headers;

namespace Integration.Tests;

// TenantIsolationTests — proves tenant data is completely isolated
//
// This is the most critical test suite in the project
// A failure here means a data breach is possible
// These tests must ALWAYS pass before any deployment
public sealed class TenantIsolationTests
{
    private readonly HttpClient _clientA;
    private readonly HttpClient _clientB;

    public TenantIsolationTests()
    {
        _clientA = new HttpClient();
        _clientB = new HttpClient();
    }

    // TEST 1 — Two tenants get different upload sessions
    // Proves each tenant has completely isolated Redis sessions
    [Fact]
    public async Task TwoTenants_UploadInit_GetSeparateSessions()
    {
        // Arrange — register two completely separate tenants
        var emailA = $"admin_{Guid.NewGuid():N}@tenanta.com";
        var emailB = $"admin_{Guid.NewGuid():N}@tenantb.com";

        var tokenA = await TestAuthHelper.RegisterAndLoginAsync(
            _clientA,
            tenantName: $"TenantA_{Guid.NewGuid():N}",
            email: emailA);

        var tokenB = await TestAuthHelper.RegisterAndLoginAsync(
            _clientB,
            tenantName: $"TenantB_{Guid.NewGuid():N}",
            email: emailB);

        // Act — both tenants initialize upload
        var uploadIdA = await TestDocumentHelper.InitUploadAsync(
            _clientA, tokenA,
            fileName:  "tenant-a-contract.pdf",
            totalSize: 2048);

        var uploadIdB = await TestDocumentHelper.InitUploadAsync(
            _clientB, tokenB,
            fileName:  "tenant-b-contract.pdf",
            totalSize: 2048);

        // Assert — sessions are different
        uploadIdA.Should().NotBe(uploadIdB,
            "Each tenant must get a unique upload session");
    }

    // TEST 2 — Tenant B cannot access Tenant A upload session
    // Proves Redis sessions are tenant-scoped
    [Fact]
    public async Task TenantB_CannotAccess_TenantAUploadSession()
    {
        // Arrange
        var emailA = $"admin_{Guid.NewGuid():N}@tenanta.com";
        var emailB = $"admin_{Guid.NewGuid():N}@tenantb.com";

        var tokenA = await TestAuthHelper.RegisterAndLoginAsync(
            _clientA,
            tenantName: $"TenantA_{Guid.NewGuid():N}",
            email: emailA);

        var tokenB = await TestAuthHelper.RegisterAndLoginAsync(
            _clientB,
            tenantName: $"TenantB_{Guid.NewGuid():N}",
            email: emailB);

        // Tenant A creates upload session
        var uploadIdA = await TestDocumentHelper.InitUploadAsync(
            _clientA, tokenA, totalSize: 2048);

        // Act — Tenant B tries to access Tenant A session
        // Using Tenant B token but Tenant A uploadId
        _clientB.DefaultRequestHeaders.Authorization =
            new System.Net.Http.Headers.AuthenticationHeaderValue(
                "Bearer", tokenB);

        var response = await _clientB.GetAsync(
            $"http://localhost:5002/api/upload/{uploadIdA}/status");

        // Assert — Tenant B should not see Tenant A session
        // Either 404 (not found) or 403 (forbidden)
        var statusCode = (int)response.StatusCode;
        statusCode.Should().BeOneOf(
            new[] { 404, 403 },
            "Tenant B must not access Tenant A upload sessions");
    }

    // TEST 3 — Both tenants can upload simultaneously
    // Proves system handles concurrent multi-tenant uploads
    [Fact]
    public async Task TwoTenants_SimultaneousUpload_BothSucceed()
    {
        // Arrange
        var emailA = $"admin_{Guid.NewGuid():N}@tenanta.com";
        var emailB = $"admin_{Guid.NewGuid():N}@tenantb.com";

        var tokenA = await TestAuthHelper.RegisterAndLoginAsync(
            _clientA,
            tenantName: $"TenantA_{Guid.NewGuid():N}",
            email: emailA);

        var tokenB = await TestAuthHelper.RegisterAndLoginAsync(
            _clientB,
            tenantName: $"TenantB_{Guid.NewGuid():N}",
            email: emailB);

        var fileContent = TestDocumentHelper
            .CreateTestFileContent(512);

        // Act — both upload simultaneously
        var uploadIdA = await TestDocumentHelper.InitUploadAsync(
            _clientA, tokenA, totalSize: fileContent.Length);

        var uploadIdB = await TestDocumentHelper.InitUploadAsync(
            _clientB, tokenB, totalSize: fileContent.Length);

        var taskA = TestDocumentHelper.UploadSingleChunkAsync(
            _clientA, tokenA, uploadIdA, fileContent);

        var taskB = TestDocumentHelper.UploadSingleChunkAsync(
            _clientB, tokenB, uploadIdB, fileContent);

        // Run both uploads at same time
        var results = await Task.WhenAll(taskA, taskB);

        // Assert — both succeed
        results[0].Should().BeTrue(
            "Tenant A upload should succeed");
        results[1].Should().BeTrue(
            "Tenant B upload should succeed");
    }
}
