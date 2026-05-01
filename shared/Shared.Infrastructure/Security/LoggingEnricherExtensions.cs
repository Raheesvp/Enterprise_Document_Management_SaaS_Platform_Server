using Serilog;
using Serilog.Configuration;

namespace Shared.Infrastructure.Security;

public static class SerilogMaskingExtensions
{
    // Mask sensitive strings in log output
    public static string MaskSensitive(this string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return value;

        if (value.Length <= 4)
            return "****";

        return value[..2] +
               new string('*', value.Length - 4) +
               value[^2..];
    }

    public static string MaskEmail(this string email)
    {
        if (string.IsNullOrWhiteSpace(email))
            return email;

        var atIndex = email.IndexOf('@');
        if (atIndex <= 0)
            return "****";

        var local  = email[..atIndex];
        var domain = email[atIndex..];

        return local.Length <= 2
            ? $"**{domain}"
            : $"{local[..2]}***{domain}";
    }
}