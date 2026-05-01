using System.Text.RegularExpressions;

namespace Shared.Infrastructure.Security;

public static class InputSanitizer
{
    // Remove HTML/script tags
    private static readonly Regex HtmlTagPattern =
        new(@"<[^>]*>", RegexOptions.Compiled);

    // Remove dangerous characters
    private static readonly Regex DangerousCharsPattern =
        new(@"[<>""'%;()&+]", RegexOptions.Compiled);

    // SQL injection patterns
    private static readonly Regex SqlPattern =
        new(@"(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);

    public static string Sanitize(string input)
    {
        if (string.IsNullOrWhiteSpace(input))
            return string.Empty;

        // Trim whitespace
        var sanitized = input.Trim();

        // Remove HTML tags
        sanitized = HtmlTagPattern.Replace(sanitized, string.Empty);

        // Remove dangerous characters
        sanitized = DangerousCharsPattern.Replace(sanitized, string.Empty);

        return sanitized;
    }

    public static bool ContainsSqlInjection(string input)
    {
        if (string.IsNullOrWhiteSpace(input))
            return false;
        return SqlPattern.IsMatch(input);
    }

    public static string SanitizeFileName(string fileName)
    {
        if (string.IsNullOrWhiteSpace(fileName))
            return "unnamed_file";

        // Remove path traversal
        var sanitized = Path.GetFileName(fileName);

        // Remove dangerous chars
        var invalid = Path.GetInvalidFileNameChars();
        sanitized = string.Concat(
            sanitized.Select(c => invalid.Contains(c) ? '_' : c));

        // Limit length
        if (sanitized.Length > 255)
            sanitized = sanitized[..255];

        return sanitized;
    }
}