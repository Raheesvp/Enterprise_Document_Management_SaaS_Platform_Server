namespace Shared.Infrastructure.Security;

public static class PasswordValidator
{
    public record PasswordStrength(
        bool   IsValid,
        string Message,
        int    Score);

    public static PasswordStrength Validate(string password)
    {
        if (string.IsNullOrWhiteSpace(password))
            return new(false, "Password is required.", 0);

        var score   = 0;
        var issues  = new List<string>();

        if (password.Length >= 8)  score++;
        else issues.Add("at least 8 characters");

        if (password.Length >= 12) score++;

        if (password.Any(char.IsUpper))  score++;
        else issues.Add("uppercase letter");

        if (password.Any(char.IsLower))  score++;
        else issues.Add("lowercase letter");

        if (password.Any(char.IsDigit))  score++;
        else issues.Add("number");

        if (password.Any(c => !char.IsLetterOrDigit(c))) score++;
        else issues.Add("special character");

        // Common weak passwords
        var weakPasswords = new[]
        {
            "password", "123456", "qwerty",
            "abc123", "password123", "admin"
        };

        if (weakPasswords.Any(w =>
            password.Contains(w,
                StringComparison.OrdinalIgnoreCase)))
        {
            score -= 2;
            issues.Add("not a common password");
        }

        var isValid = issues.Count == 0 && score >= 4;
        var message = isValid
            ? "Password is strong."
            : $"Password must contain: {string.Join(", ", issues)}.";

        return new(isValid, message, Math.Max(0, score));
    }
}
