using Npgsql;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string connStr = "Host=localhost;Port=5432;Database=documentdb;Username=saasuser;Password=SaaS@Postgres2024!";
        await using var conn = new NpgsqlConnection(connStr);
        await conn.OpenAsync();

        string sql = @"
            UPDATE workflow_instances
            SET document_title = d.title
            FROM documents d
            WHERE workflow_instances.document_id = d.id
              AND workflow_instances.document_title = '';
        ";

        await using var cmd = new NpgsqlCommand(sql, conn);
        int rowsUpdated = await cmd.ExecuteNonQueryAsync();

        Console.WriteLine($"Updated {rowsUpdated} empty document titles in workflow_instances.");
    }
}
