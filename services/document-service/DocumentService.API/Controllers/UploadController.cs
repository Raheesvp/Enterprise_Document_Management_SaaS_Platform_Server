using DocumentService.Application.Commands.UploadDocument;
using DocumentService.Infrastructure.Upload;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Shared.Domain.Common;

namespace DocumentService.API.Controllers;

// UploadController — handles chunked file uploads
//
// Flow:
// 1. Client POSTs to /api/upload/init — creates upload session
// 2. Client sends chunks via POST /api/upload/{uploadId}/chunk
// 3. Each chunk tracked in Redis
// 4. On completion — UploadDocumentCommand dispatched
// 5. DocumentUploadedEvent published to RabbitMQ
[ApiController]
[Route("api/upload")]
[Authorize]
public sealed class UploadController : ControllerBase
{
    private readonly IMediator _mediator;
    private readonly IUploadSessionStore _sessionStore;
    private readonly ITenantContext _tenantContext;
    private readonly ILogger<UploadController> _logger;

    public UploadController(
        IMediator mediator,
        IUploadSessionStore sessionStore,
        ITenantContext tenantContext,
        ILogger<UploadController> logger)
    {
        _mediator      = mediator;
        _sessionStore  = sessionStore;
        _tenantContext = tenantContext;
        _logger        = logger;
    }

    // POST api/upload/init
    // Initializes upload session — returns uploadId
    [HttpPost("init")]
    public async Task<IActionResult> InitUpload(
        [FromBody] InitUploadRequest request,
        CancellationToken ct)
    {
        if (!_tenantContext.IsResolved)
            return Unauthorized("Tenant context not resolved");

        var uploadId = Guid.NewGuid().ToString("N");

        var session = new UploadSession
        {
            UploadId        = uploadId,
            TenantId        = _tenantContext.TenantId,
            UserId          = GetUserId(),
            FileName        = request.FileName,
            ContentType     = request.ContentType,
            TotalSize       = request.TotalSize,
            TempStoragePath = $"temp/{_tenantContext.TenantId}/{uploadId}",
            IsComplete      = false
        };

        await _sessionStore.SaveAsync(session, ct);

        _logger.LogInformation(
            "Upload session initialized. UploadId: {UploadId} " +
            "FileName: {FileName} TotalSize: {TotalSize}",
            uploadId, request.FileName, request.TotalSize);

        return Ok(new InitUploadResponse
        {
            UploadId        = uploadId,
            TempStoragePath = session.TempStoragePath
        });
    }

    // POST api/upload/{uploadId}/chunk
    // Receives a single chunk and saves progress to Redis
    [HttpPost("{uploadId}/chunk")]
    public async Task<IActionResult> UploadChunk(
        string uploadId,
        [FromQuery] long offset,
        CancellationToken ct)
    {
        var session = await _sessionStore.GetAsync(uploadId, ct);

        if (session is null)
            return NotFound($"Upload session not found: {uploadId}");

        if (session.IsComplete)
            return BadRequest("Upload already completed");

        // Read chunk from request body
        using var memStream = new MemoryStream();
        await Request.Body.CopyToAsync(memStream, ct);
        var chunkBytes = memStream.ToArray();

        // Calculate new offset after this chunk
        var newOffset = offset + chunkBytes.Length;

        // Update progress in Redis
        await _sessionStore.UpdateProgressAsync(
            uploadId, newOffset, ct);

        _logger.LogDebug(
            "Chunk received. UploadId: {UploadId} " +
            "Offset: {Offset} ChunkSize: {ChunkSize}",
            uploadId, offset, chunkBytes.Length);

        // Check if upload is complete
        if (newOffset >= session.TotalSize)
        {
            await _sessionStore.CompleteAsync(uploadId, ct);
            await FinalizeUploadAsync(session, ct);

            return Ok(new
            {
                Status   = "Complete",
                UploadId = uploadId
            });
        }

        return Ok(new
        {
            Status          = "ChunkReceived",
            UploadId        = uploadId,
            BytesReceived   = newOffset,
            TotalSize       = session.TotalSize,
            PercentComplete = (int)((double)newOffset
                / session.TotalSize * 100)
        });
    }

    // GET api/upload/{uploadId}/status
    // Returns current upload progress
    [HttpGet("{uploadId}/status")]
    public async Task<IActionResult> GetStatus(
        string uploadId,
        CancellationToken ct)
    {
        var session = await _sessionStore.GetAsync(uploadId, ct);

        if (session is null)
            return NotFound($"Upload session not found: {uploadId}");

        return Ok(new
        {
            UploadId        = session.UploadId,
            FileName        = session.FileName,
            TotalSize       = session.TotalSize,
            BytesReceived   = session.BytesReceived,
            IsComplete      = session.IsComplete,
            PercentComplete = session.TotalSize > 0
                ? (int)((double)session.BytesReceived
                    / session.TotalSize * 100)
                : 0
        });
    }

    // DELETE api/upload/{uploadId}
    // Cancels upload and cleans up Redis session
    [HttpDelete("{uploadId}")]
    public async Task<IActionResult> CancelUpload(
        string uploadId,
        CancellationToken ct)
    {
        var session = await _sessionStore.GetAsync(uploadId, ct);

        if (session is null)
            return NotFound($"Upload session not found: {uploadId}");

        await _sessionStore.DeleteAsync(uploadId, ct);

        _logger.LogInformation(
            "Upload cancelled. UploadId: {UploadId}", uploadId);

        return NoContent();
    }

    // Called when all chunks received
    // Dispatches UploadDocumentCommand to Application layer
    private async Task FinalizeUploadAsync(
        UploadSession session,
        CancellationToken ct)
    {
        _logger.LogInformation(
            "Finalizing upload. UploadId: {UploadId} " +
            "FileName: {FileName}",
            session.UploadId, session.FileName);

        // Match exact constructor:
        // UploadDocumentCommand(TenantId, UploadedByUserId,
        //   Title, MimeType, FileSizeBytes, FileContent,
        //   Description?, Tags?)
        var command = new UploadDocumentCommand(
            TenantId:         session.TenantId,
            UploadedByUserId: session.UserId,
            Title:            Path.GetFileNameWithoutExtension(
                                  session.FileName),
            MimeType:         session.ContentType,
            FileSizeBytes:    session.TotalSize,
            FileContent:      Stream.Null);

        var result = await _mediator.Send(command, ct);

        if (result.IsFailure)
        {
            // Error has Code and Description — not Message
            _logger.LogError(
                "Failed to finalize upload. UploadId: {UploadId} " +
                "Error: {Code} - {Description}",
                session.UploadId,
                result.Error.Code,
                result.Error.Description);
        }
    }

    private Guid GetUserId()
    {
        var userIdClaim = User.FindFirst("sub")?.Value
                       ?? User.FindFirst("user_id")?.Value;

        return Guid.TryParse(userIdClaim, out var userId)
            ? userId
            : Guid.Empty;
    }
}

// Request/Response models
public sealed record InitUploadRequest
{
    public string FileName    { get; init; } = string.Empty;
    public string ContentType { get; init; } = string.Empty;
    public long   TotalSize   { get; init; }
}

public sealed record InitUploadResponse
{
    public string UploadId        { get; init; } = string.Empty;
    public string TempStoragePath { get; init; } = string.Empty;
}
