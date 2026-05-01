using System.Diagnostics;

namespace Shared.Infrastructure.Telemetry;

public static class ActivitySources
{
    public static readonly ActivitySource Documents =
        new("ProjectSaaS.Documents", "1.0.0");

    public static readonly ActivitySource Workflow =
        new("ProjectSaaS.Workflow", "1.0.0");

    public static readonly ActivitySource Notifications =
        new("ProjectSaaS.Notifications", "1.0.0");
}