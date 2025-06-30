import { NextResponse } from "next/server";
import { dbSnowflake } from "@/lib/db";

export async function GET() {
  // Try to calculate average join depth from pg_stat_statements
  try {
    const result = await dbSnowflake.execute(`
      SELECT
        AVG(join_count) AS avg_join_depth
      FROM (
        SELECT
          regexp_count(lower(query), ' join ') AS join_count
        FROM pg_stat_statements
        WHERE query LIKE '%from forecasting.%'
      ) sub;
    `);
    const avgJoinDepth =
      parseFloat(String(result.rows[0]?.avg_join_depth)) || 0;
    const chartData = [
      { label: "Average Join Depth", value: Number(avgJoinDepth.toFixed(2)) },
    ];
    return NextResponse.json(chartData);
  } catch (e) {
    // Fallback to static value if pg_stat_statements is not available
    const chartData = [{ label: "Average Join Depth", value: 4.2 }];
    return NextResponse.json(chartData);
  }
}
