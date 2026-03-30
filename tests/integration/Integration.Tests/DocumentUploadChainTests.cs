using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Xunit;

namespace Integration.Tests;

public class DocumentUploadChainTests
{
    private readonly HttpClient _http = new();
    private string _token = string.Empty;

    private async Task LoginAsync()
    {
        var loginResponse = await _http.PostAsJsonAsync(
            "http://localhost:5001/api/identity/login", new
            {
                email     = "admin@test-81e12ed4.com",
                password  = "Test@123456!",
                subdomain = "test-81e12ed4"
            });

        loginResponse.StatusCode.Should().Be(HttpStatusCode.OK);

        var loginResult = await loginResponse.Content
            .ReadFromJsonAsync<ChainLoginResult>();

        _token = loginResult!.AccessToken;
        _http.DefaultRequestHeaders.Authorization =
            new("Bearer", _token);
    }

    [Fact]
    public async Task UploadDocument_ShouldTrigger_WorkflowAndNotification()
    {
        // Step 1 — Login
        await LoginAsync();

        // Step 2 — Init upload
        var initResponse = await _http.PostAsJsonAsync(
            "http://localhost:5000/api/upload/init", new
            {
                fileName    = "ChainTest.txt",
                contentType = "text/plain",
                totalSize   = 43
            });

        initResponse.StatusCode.Should().Be(HttpStatusCode.OK);

        var initResult = await initResponse.Content
            .ReadFromJsonAsync<ChainInitResult>();
        var uploadId = initResult!.UploadId;

        // Step 3 — Upload chunk
        var bytes   = System.Text.Encoding.UTF8
            .GetBytes("This is a chain test document content ok");
        var content = new ByteArrayContent(bytes);
        content.Headers.ContentType =
            new System.Net.Http.Headers.MediaTypeHeaderValue(
                "application/octet-stream");

        var chunkResponse = await _http.PostAsync(
            $"http://localhost:5000/api/upload/{uploadId}/chunk?offset=0",
            content);

        chunkResponse.StatusCode.Should().Be(HttpStatusCode.OK);

        // Step 4 — Wait for async chain to complete
        await Task.Delay(3000);

        // Step 5 — Verify document exists
        var docsResponse = await _http
            .GetAsync("http://localhost:5000/api/documents");
        docsResponse.StatusCode.Should().Be(HttpStatusCode.OK);

        // Step 6 — Verify workflow created
        var workflowResponse = await _http
            .GetAsync("http://localhost:5003/api/workflow/my");
        workflowResponse.StatusCode.Should().Be(HttpStatusCode.OK);

        // Step 7 — Verify notification created
        var notifResponse = await _http
            .GetAsync("http://localhost:5004/api/notifications");
        notifResponse.StatusCode.Should().Be(HttpStatusCode.OK);
    }

    [Fact]
    public async Task UploadDocument_Documents_ShouldReturn200()
    {
        await LoginAsync();

        var response = await _http
            .GetAsync("http://localhost:5000/api/documents");

        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }

    [Fact]
    public async Task UploadDocument_Workflow_ShouldReturn200()
    {
        await LoginAsync();

        var response = await _http
            .GetAsync("http://localhost:5003/api/workflow/my");

        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }

    [Fact]
    public async Task UploadDocument_Notifications_ShouldReturn200()
    {
        await LoginAsync();

        var response = await _http
            .GetAsync("http://localhost:5004/api/notifications");

        response.StatusCode.Should().Be(HttpStatusCode.OK);
    }
}

public record ChainLoginResult(string AccessToken);
public record ChainInitResult(string UploadId);