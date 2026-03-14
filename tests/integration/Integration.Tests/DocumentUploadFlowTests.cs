using FluentAssertions;
using Integration.Tests.Helpers;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;

namespace Integration.Tests;

// DocumentUploadFlowTests — proves full upload pipeline works
//
// These tests require all services running:
// ? Identity Service  :5001
// ? Document Service  :5002
// ? PostgreSQL        :5432
// ? Redis             :6379
// ? MinIO             :9000
// ? RabbitMQ          :5672
//
// Run these AFTER starting all services with dotnet run
// These are not unit tests — they test real infrastructure
public sealed class DocumentUploadFlowTests
{
    private readonly HttpClient _client;

    public DocumentUploadFlowTests()
    {
        _client = new HttpClient();
    }

    // TEST 1 — Identity Service health check
    // Proves Identity Service is running before other tests
    [Fact]
    public async Task IdentityService_HealthCheck_ReturnsHealthy()
    {
        // Act
        var response = await _client.GetAsync(
            "http://localhost:5001/health");

        // Assert
        response.IsSuccessStatusCode.Should().BeTrue(
            "Identity Service should be running on :5001");
    }

    // TEST 2 — Document Service health check
    // Proves Document Service is running before other tests
    [Fact]
    public async Task DocumentService_HealthCheck_ReturnsHealthy()
    {
        // Act
        var response = await _client.GetAsync(
            "http://localhost:5002/health");

        // Assert
        response.IsSuccessStatusCode.Should().BeTrue(
            "Document Service should be running on :5002");
    }

    // TEST 3 — Upload session initialization
    // Proves Redis session is created on upload init
    [Fact]
    public async Task UploadInit_WithValidToken_CreatesSession()
    {
        // Arrange — get JWT token
        var uniqueEmail = $"test_{Guid.NewGuid():N}@test.com";
        var token = await TestAuthHelper.RegisterAndLoginAsync(
            _client,
            tenantName: $"Tenant_{Guid.NewGuid():N}",
            email: uniqueEmail);

        token.Should().NotBeNullOrEmpty(
            "JWT token should be returned after login");

        // Act — initialize upload
        var uploadId = await TestDocumentHelper.InitUploadAsync(
            _client,
            token,
            fileName:  "test-contract.pdf",
            totalSize: 2048);

        // Assert
        uploadId.Should().NotBeNullOrEmpty(
            "Upload session should be created in Redis");
    }

    // TEST 4 — Upload status check
    // Proves Redis tracks upload session correctly
    [Fact]
    public async Task UploadStatus_AfterInit_ReturnsZeroProgress()
    {
        // Arrange
        var uniqueEmail = $"test_{Guid.NewGuid():N}@test.com";
        var token = await TestAuthHelper.RegisterAndLoginAsync(
            _client,
            tenantName: $"Tenant_{Guid.NewGuid():N}",
            email: uniqueEmail);

        var uploadId = await TestDocumentHelper.InitUploadAsync(
            _client, token, totalSize: 4096);

        // Act — check status
        var status = await TestDocumentHelper.GetUploadStatusAsync(
            _client, token, uploadId);

        // Assert
        status.GetProperty("uploadId").GetString()
            .Should().Be(uploadId);

        status.GetProperty("isComplete").GetBoolean()
            .Should().BeFalse(
                "Upload should not be complete yet");

        status.GetProperty("bytesReceived").GetInt64()
            .Should().Be(0,
                "No bytes received yet");

        status.GetProperty("percentComplete").GetInt32()
            .Should().Be(0);
    }

    // TEST 5 — Single chunk upload
    // Proves chunk is received and Redis progress updated
    [Fact]
    public async Task UploadChunk_SingleChunk_CompletesUpload()
    {
        // Arrange
        var fileContent = TestDocumentHelper.CreateTestFileContent(1024);
        var uniqueEmail = $"test_{Guid.NewGuid():N}@test.com";

        var token = await TestAuthHelper.RegisterAndLoginAsync(
            _client,
            tenantName: $"Tenant_{Guid.NewGuid():N}",
            email: uniqueEmail);

        var uploadId = await TestDocumentHelper.InitUploadAsync(
            _client, token,
            fileName:  "test-document.pdf",
            totalSize: fileContent.Length);

        // Act — upload single chunk
        var success = await TestDocumentHelper.UploadSingleChunkAsync(
            _client, token, uploadId, fileContent);

        // Assert
        success.Should().BeTrue(
            "Single chunk upload should succeed");
    }

    // TEST 6 — Upload cancel
    // Proves Redis session is deleted on cancel
    [Fact]
    public async Task CancelUpload_ActiveSession_DeletesFromRedis()
    {
        // Arrange
        var uniqueEmail = $"test_{Guid.NewGuid():N}@test.com";
        var token = await TestAuthHelper.RegisterAndLoginAsync(
            _client,
            tenantName: $"Tenant_{Guid.NewGuid():N}",
            email: uniqueEmail);

        var uploadId = await TestDocumentHelper.InitUploadAsync(
            _client, token, totalSize: 10240);

        _client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        // Act — cancel upload
        var cancelResponse = await _client.DeleteAsync(
            $"http://localhost:5002/api/upload/{uploadId}");

        // Assert
        cancelResponse.IsSuccessStatusCode.Should().BeTrue(
            "Cancel should return success");

        // Verify session deleted — status should return 404
        var statusResponse = await _client.GetAsync(
            $"http://localhost:5002/api/upload/{uploadId}/status");

        statusResponse.StatusCode.Should().Be(
            System.Net.HttpStatusCode.NotFound,
            "Session should be deleted from Redis after cancel");
    }

    // TEST 7 — Unauthorized upload attempt
    // Proves JWT authentication is enforced
    [Fact]
    public async Task UploadInit_WithoutToken_Returns401()
    {
        // Arrange — no auth header
        var clientWithNoAuth = new HttpClient();

        var payload = new
        {
            fileName    = "test.pdf",
            contentType = "application/pdf",
            totalSize   = 1024
        };

        // Act
        var response = await clientWithNoAuth.PostAsJsonAsync(
            "http://localhost:5002/api/upload/init",
            payload);

        // Assert
        response.StatusCode.Should().Be(
            System.Net.HttpStatusCode.Unauthorized,
            "Upload without JWT token should be rejected");
    }
}
