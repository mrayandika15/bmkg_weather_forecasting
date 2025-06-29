import { NextResponse } from "next/server";
import { dbSnowflake } from "@/lib/db";

export async function GET() {
  // Query to get the total size of all tables in the forecasting schema (in MB)
  const result = await dbSnowflake.execute(`
    SELECT
      SUM(pg_total_relation_size('"' || table_schema || '"."' || table_name || '"')) / 1024 / 1024 AS size_mb
    FROM information_schema.tables
    WHERE table_schema = 'forecasting'
      AND table_type = 'BASE TABLE';
  `);

  const sizeMB = Number(result.rows[0]?.size_mb ?? 0);
  return NextResponse.json({ sizeMB });
}
