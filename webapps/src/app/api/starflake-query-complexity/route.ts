import { NextResponse } from "next/server";
import { dbStarflake } from "@/lib/db";

export async function GET() {
  // Get scan stats for all tables in the forecasting schema
  const result = await dbStarflake.execute(`
    SELECT relname AS table_name, seq_scan, idx_scan
    FROM pg_stat_user_tables
    WHERE schemaname = 'forecasting';
  `);

  const rows = result.rows;
  const totalScans = rows.reduce(
    (sum, row) => sum + Number(row.seq_scan) + Number(row.idx_scan),
    0
  );
  const numTables = rows.length || 1;
  // Heuristic: average scans per table, normalized to 0-100
  let value = Math.round(totalScans / numTables / 100);
  value = Math.max(0, Math.min(100, value));

  let label = "Low";
  if (value > 66) label = "High";
  else if (value > 33) label = "Medium";

  return NextResponse.json({ value, label, rawValue: totalScans });
}
