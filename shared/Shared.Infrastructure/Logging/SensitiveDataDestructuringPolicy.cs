using Serilog.Core;
using Serilog.Events;
using System.Reflection;

namespace Shared.Infrastructure.Logging;

public class SensitiveDataDestructuringPolicy : IDestructuringPolicy
{
    private static readonly string[] SensitiveProperties = 
    { 
        "Password", 
        "Secret", 
        "Token", 
        "SecretKey", 
        "ClientSecret" 
    };

    public bool TryDestructure(
        object value, 
        ILogEventPropertyValueFactory propertyValueFactory, 
        out LogEventPropertyValue? result)
    {
        if (value == null)
        {
            result = null;
            return false;
        }

        var type = value.GetType();
        var props = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
        
        if (props.Any(p => SensitiveProperties.Contains(p.Name, StringComparer.OrdinalIgnoreCase)))
        {
            var elements = new List<LogEventProperty>();
            foreach (var prop in props)
            {
                object? propValue;
                try
                {
                    propValue = prop.GetValue(value);
                }
                catch
                {
                    propValue = "Error accessing property";
                }

                if (SensitiveProperties.Contains(prop.Name, StringComparer.OrdinalIgnoreCase))
                {
                    elements.Add(new LogEventProperty(prop.Name, new ScalarValue("****")));
                }
                else
                {
                    elements.Add(new LogEventProperty(prop.Name, propertyValueFactory.CreatePropertyValue(propValue, true)));
                }
            }
            result = new StructureValue(elements, type.Name);
            return true;
        }

        result = null;
        return false;
    }
}
