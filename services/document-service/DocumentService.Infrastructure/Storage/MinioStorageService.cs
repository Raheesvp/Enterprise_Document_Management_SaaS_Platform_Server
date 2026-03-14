using DocumentService.Application.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Minio;
using Minio.DataModel.Args;
using Minio.Exceptions;

namespace DocumentService.Infrastructure.Storage;

// MinioStorageService � real file storage implementation
//
// MinIO is S3-compatible � same API as AWS S3
// Swap this for S3StorageService or AzureStorageService
// in production with zero application code change
//
// Storage path pattern:
// {tenantId}/{year}/{month}/{documentId}/{filename}
// Example: 3fa85f64/2024/03/abc123/contract.pdf
//
// This pattern ensures:
// ? Tenant data physically separated in storage
// ? Easy to audit and archive by date
// ? Efficient listing and cleanup per tenant
public sealed class MinioStorageService : IStorageService
{
    private readonly IMinioClient _minioClient;
    private readonly ILogger<MinioStorageService> _logger;
    private readonly string _bucketName;
    private readonly string _endpoint;

    public MinioStorageService(
        IMinioClient minioClient,
        IConfiguration configuration,
        ILogger<MinioStorageService> logger)
    {
        _minioClient = minioClient;
        _logger      = logger;
        _bucketName  = configuration["MinioSettings:BucketName"]
                       ?? "documents";
        _endpoint    = configuration["MinioSettings:Endpoint"]
                       ?? "localhost:9000";
    }

    public async Task<string> UploadAsync(
        string path,
        Stream content,
        string contentType,
        CancellationToken ct = default)
    {
        try
        {
            // Ensure bucket exists before uploading
            await EnsureBucketExistsAsync(ct);

            var args = new PutObjectArgs()
                .WithBucket(_bucketName)
                .WithObject(path)
                .WithStreamData(content)
                .WithObjectSize(content.Length)
                .WithContentType(contentType);

            await _minioClient.PutObjectAsync(args, ct);

            _logger.LogInformation(
                "File uploaded successfully. Path: {Path} " +
                "Bucket: {Bucket}",
                path, _bucketName);

            return path;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "Failed to upload file. Path: {Path}", path);
            throw;
        }
    }

    public async Task<Stream> DownloadAsync(
        string path,
        CancellationToken ct = default)
    {
        try
        {
            var memoryStream = new MemoryStream();

            var args = new GetObjectArgs()
                .WithBucket(_bucketName)
                .WithObject(path)
                .WithCallbackStream(stream =>
                {
                    stream.CopyTo(memoryStream);
                });

            await _minioClient.GetObjectAsync(args, ct);

            // Reset position so caller can read from beginning
            memoryStream.Position = 0;

            _logger.LogInformation(
                "File downloaded successfully. Path: {Path}", path);

            return memoryStream;
        }
        catch (ObjectNotFoundException)
        {
            _logger.LogWarning(
                "File not found in storage. Path: {Path}", path);
            throw new FileNotFoundException(
                $"File not found: {path}");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "Failed to download file. Path: {Path}", path);
            throw;
        }
    }

    public async Task DeleteAsync(
        string path,
        CancellationToken ct = default)
    {
        try
        {
            var args = new RemoveObjectArgs()
                .WithBucket(_bucketName)
                .WithObject(path);

            await _minioClient.RemoveObjectAsync(args, ct);

            _logger.LogInformation(
                "File deleted successfully. Path: {Path}", path);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "Failed to delete file. Path: {Path}", path);
            throw;
        }
    }

    public async Task<bool> ExistsAsync(
        string path,
        CancellationToken ct = default)
    {
        try
        {
            var args = new StatObjectArgs()
                .WithBucket(_bucketName)
                .WithObject(path);

            await _minioClient.StatObjectAsync(args, ct);
            return true;
        }
        catch (ObjectNotFoundException)
        {
            return false;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "Failed to check file existence. Path: {Path}", path);
            return false;
        }
    }

    // Returns direct URL for browser access
    // In production this would be a CDN URL or presigned S3 URL
    public string GetPublicUrl(string path)
        => $"http://{_endpoint}/{_bucketName}/{path}";

    // Creates bucket if it does not exist
    // Called before every upload � safe to call multiple times
    private async Task EnsureBucketExistsAsync(CancellationToken ct)
    {
        var existsArgs = new BucketExistsArgs()
            .WithBucket(_bucketName);

        var exists = await _minioClient
            .BucketExistsAsync(existsArgs, ct);

        if (!exists)
        {
            var makeArgs = new MakeBucketArgs()
                .WithBucket(_bucketName);

            await _minioClient.MakeBucketAsync(makeArgs, ct);

            _logger.LogInformation(
                "Bucket created. Name: {BucketName}", _bucketName);
        }
    }
}
