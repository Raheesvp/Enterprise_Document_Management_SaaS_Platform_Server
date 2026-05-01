namespace Shared.Infrastructure.Extensions;

public static class StringExtensions
{
    public static string MaskEmail(this string email)
    {
        if (string.IsNullOrEmpty(email) || !email.Contains('@'))
            return email;

        var parts = email.Split('@');
        var name = parts[0];
        var domain = parts[1];

        if (name.Length <= 2)
            return $"{name}***@{domain}";

        return $"{name[..2]}***{name[^1..]}@{domain}";
    }
}
