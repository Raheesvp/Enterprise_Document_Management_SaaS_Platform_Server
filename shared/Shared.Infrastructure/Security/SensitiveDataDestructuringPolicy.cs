using Serilog.Core;
using Serilog.Events;

namespace Shared.Infrastructure.Security;

public class SensitiveDataDestructuringPolicy
    : IDestructuringPolicy
{
    private static readonly HashSet<string> SensitiveFields =
        new(StringComparer.OrdinalIgnoreCase)
        {
            "password",
            "passwordhash",
            "refreshtoken",
            "accesstoken",
            "token",
            "secret",
            "secretkey",
            "connectionstring",
            "apikey",
            "authorization",
            "creditcard",
            "ssn"
        };

    public bool TryDestructure(
        object          value,
        ILogEventPropertyValueFactory factory,
        out LogEventPropertyValue     result)
    {
        result = null!;
        return false;
    }
}