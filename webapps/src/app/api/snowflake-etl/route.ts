import { NextResponse } from "next/server";
import { dbSnowflake } from "@/lib/db";

export async function GET() {
  // Query to count rows in fact_weather_forecast grouped by day using created_at
  const result = await dbSnowflake.execute(`
    SELECT
      DATE_TRUNC('day', created_at) AS batch,
      COUNT(*) AS dataIn
    FROM forecasting.fact_weather_forecast
    GROUP BY batch
    ORDER BY batch
  `);

  // Format for recharts: [{ batch: '2024-06-01', dataIn: 123 }, ...]
  return NextResponse.json(result.rows);
}
