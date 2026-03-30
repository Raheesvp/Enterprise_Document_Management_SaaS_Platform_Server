using System.Text.Json;
using DocumentService.Application.Interfaces;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using StackExchange.Redis;

namespace DocumentService.Infrastructure.Caching;

public class RedisCacheService : ICacheService
{
    private readonly IDistributedCache          _cache;
    private readonly IConnectionMultiplexer     _redis;
    private readonly ILogger<RedisCacheService> _logger;

    public RedisCacheService(
        IDistributedCache          cache,
        IConnectionMultiplexer     redis,
        ILogger<RedisCacheService> logger)
    {
        _cache  = cache;
        _redis  = redis;
        _logger = logger;
    }

    public async Task<T?> GetAsync<T>(string key, CancellationToken ct = default)
        where T : class
    {
        try
        {
            var data = await _cache.GetStringAsync(key, ct);
            if (data is null) return null;

            _logger.LogDebug("[CACHE HIT] Key: {Key}", key);
            return JsonSerializer.Deserialize<T>(data);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "[CACHE GET ERROR] Key: {Key}", key);
            return null;
        }
    }

    public async Task SetAsync<T>(string key, T value, TimeSpan ttl,
        CancellationToken ct = default)
        where T : class
    {
        try
        {
            var data = JsonSerializer.Serialize(value);
            var options = new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = ttl
            };
            await _cache.SetStringAsync(key, data, options, ct);
            _logger.LogDebug("[CACHE SET] Key: {Key} TTL: {TTL}", key, ttl);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "[CACHE SET ERROR] Key: {Key}", key);
        }
    }

    public async Task RemoveAsync(string key, CancellationToken ct = default)
    {
        try
        {
            await _cache.RemoveAsync(key, ct);
            _logger.LogDebug("[CACHE REMOVE] Key: {Key}", key);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "[CACHE REMOVE ERROR] Key: {Key}", key);
        }
    }

    public async Task RemoveByPrefixAsync(string prefix,
        CancellationToken ct = default)
    {
        try
        {
            var db     = _redis.GetDatabase();
            var server = _redis.GetServer(
                _redis.GetEndPoints().First());

            var keys = server.Keys(pattern: $"{prefix}*").ToArray();

            if (keys.Length > 0)
            {
                await db.KeyDeleteAsync(keys);
                _logger.LogInformation(
                    "[CACHE INVALIDATE] Prefix: {Prefix} Keys deleted: {Count}",
                    prefix, keys.Length);
            }
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex,
                "[CACHE INVALIDATE ERROR] Prefix: {Prefix}", prefix);
        }
    }
}