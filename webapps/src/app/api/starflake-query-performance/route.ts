import { NextResponse } from "next/server";
import { dbStarflake } from "@/lib/db";

export async function GET() {
  // Test query performance: EXPLAIN ANALYZE on a join between available tables
  const result = await dbStarflake.execute(`
    EXPLAIN ANALYZE
SELECT 
    f.forecast_id,
    f.utc_datetime,
    f.local_datetime,
    f.time_index,
    f.analysis_date,
    f.wind_direction_degrees,
    f.wind_direction,
    f.wind_direction_to,
    f.wind_speed,
    f.temperature,
    f.cloud_cover_percentage,
    f.precipitation_probability,
    f.humidity,
    f.visibility_meters,
    f.visibility_text,
    w.weather_desc,
    w.weather_desc_en,
    l.subdistrict_name,
    l.district_name,
    l.city_name,
    l.province_name,
    l.latitude,
    l.longitude,
    l.timezone
FROM forecasting.fact_weather_forecast f
JOIN forecasting.dim_location l ON f.location_id = l.location_id
JOIN forecasting.dim_weather w ON f.weather_condition_id = w.weather_condition_id;

  `);

  // Find the execution time in the EXPLAIN ANALYZE output
  const explainRows = result.rows.map((row: any) => Object.values(row)[0]);

  const execTimeRow = explainRows.find(
    (line) => typeof line === "string" && line.includes("Execution Time:")
  );
  let durationMs = 0;
  if (typeof execTimeRow === "string") {
    const match = execTimeRow.match(/Execution Time: ([\d.]+) ms/);
    if (match) {
      durationMs = parseFloat(match[1]);
    }
  }

  // Get row count for the same query (without EXPLAIN ANALYZE)
  const countResult = await dbStarflake.execute(`
    SELECT COUNT(*) as rowCount
    FROM forecasting.fact_weather_forecast f
    JOIN forecasting.dim_location l ON f.location_id = l.location_id
    JOIN forecasting.dim_weather w ON f.weather_condition_id = w.weather_condition_id;
  `);
  const rowCount =
    countResult.rows[0]?.rowcount || countResult.rows[0]?.rowCount || 0;

  return NextResponse.json({ durationMs, source: "starflake", rowCount });
}
