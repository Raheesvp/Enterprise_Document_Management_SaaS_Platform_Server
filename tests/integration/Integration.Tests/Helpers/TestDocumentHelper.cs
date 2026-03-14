using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;

namespace Integration.Tests.Helpers;

// TestDocumentHelper — helper methods for document upload tests
public static class TestDocumentHelper
{
    // Creates a fake PDF file content for testing
    // Returns byte array representing a small test file
    public static byte[] CreateTestFileContent(int sizeInBytes = 1024)
    {
        var content = new byte[sizeInBytes];
        // Fill with recognizable pattern
        for (int i = 0; i < sizeInBytes; i++)
            content[i] = (byte)(i % 256);
        return content;
    }

    // Initializes upload session and returns uploadId
    public static async Task<string> InitUploadAsync(
        HttpClient client,
        string token,
        string fileName    = "test-document.pdf",
        string contentType = "application/pdf",
        long totalSize     = 1024)
    {
        client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        var payload = new
        {
            fileName    = fileName,
            contentType = contentType,
            totalSize   = totalSize
        };

        var response = await client.PostAsJsonAsync(
            "http://localhost:5002/api/upload/init",
            payload);

        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        var json    = JsonSerializer.Deserialize<JsonElement>(content);

        return json.GetProperty("uploadId").GetString()
            ?? throw new Exception("UploadId not found");
    }

    // Uploads file content as a single chunk
    public static async Task<bool> UploadSingleChunkAsync(
        HttpClient client,
        string token,
        string uploadId,
        byte[] fileContent)
    {
        client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        using var chunkContent = new ByteArrayContent(fileContent);
        chunkContent.Headers.ContentType =
            new MediaTypeHeaderValue("application/octet-stream");

        var response = await client.PostAsync(
            $"http://localhost:5002/api/upload/{uploadId}/chunk?offset=0",
            chunkContent);

        return response.IsSuccessStatusCode;
    }

    // Gets upload status from Redis
    public static async Task<JsonElement> GetUploadStatusAsync(
        HttpClient client,
        string token,
        string uploadId)
    {
        client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", token);

        var response = await client.GetAsync(
            $"http://localhost:5002/api/upload/{uploadId}/status");

        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<JsonElement>(content);
    }
}
