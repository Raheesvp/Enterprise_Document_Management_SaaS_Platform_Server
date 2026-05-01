using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using IdentityService.Application.Interfaces;
using IdentityService.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace IdentityService.Infrastructure.Services;

/// <summary>
/// JwtService — Generates JWT access tokens with tenant isolation and role claims.
/// This is the core of the Single Sign-On (SSO) pattern for the SaaS platform.
/// </summary>
public sealed class JwtService : IJwtService
{
    private readonly IConfiguration _configuration;

    public JwtService(IConfiguration configuration)
        => _configuration = configuration;

    public string GenerateAccessToken(User user, Tenant tenant)
    {
        var jwtSettings = _configuration.GetSection("JwtSettings");
        var secretKey = jwtSettings["SecretKey"]!;
        var issuer = jwtSettings["Issuer"];
        var audience = jwtSettings["Audience"];

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        // Claims embedded in JWT — readable by the Gateway and all downstream services
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(JwtRegisteredClaimNames.Iat, 
                DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString()),
            
            // Multi-tenant isolation claims
            new Claim("tenant_id", tenant.Id.ToString()),
            new Claim("tenant_name", tenant.Name),
            new Claim("tenant_subdomain", tenant.Subdomain),
            
            // RBAC (Role-Based Access Control)
            new Claim(ClaimTypes.Role, user.Role.ToString()),
            new Claim("full_name", user.FullName)
        };

        var token = new JwtSecurityToken(
            issuer: issuer,
            audience: audience,
            claims: claims,
            notBefore: DateTime.UtcNow,
            expires: GetAccessTokenExpiry(), // Centralized expiry logic
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    /// <summary>
    /// Generates a cryptographically secure random token (Opaque token) for refresh cycles.
    /// </summary>
    public string GenerateRefreshToken()
    {
        var randomBytes = new byte[64];
        using var rng = RandomNumberGenerator.Create();
        rng.GetBytes(randomBytes);
        return Convert.ToBase64String(randomBytes);
    }

    public DateTime GetAccessTokenExpiry()
    {
        var minutes = int.Parse(_configuration["JwtSettings:ExpiryMinutes"] ?? "60");
        return DateTime.UtcNow.AddMinutes(minutes);
    }

    public DateTime GetRefreshTokenExpiry()
        => DateTime.UtcNow.AddDays(7);

    /// <summary>
    /// Validates an incoming token (useful for the Gateway or internal service-to-service calls).
    /// </summary>
    public ClaimsPrincipal? ValidateToken(string token)
    {
        var secretKey = _configuration["JwtSettings:SecretKey"]!;
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

        var validationParams = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = _configuration["JwtSettings:Issuer"],
            ValidAudience = _configuration["JwtSettings:Audience"],
            IssuerSigningKey = key,
            ClockSkew = TimeSpan.Zero // Forces immediate expiration
        };

        try
        {
            var handler = new JwtSecurityTokenHandler();
            return handler.ValidateToken(token, validationParams, out _);
        }
        catch
        {
            return null; // Token is invalid, expired, or tampered with
        }
    }
}