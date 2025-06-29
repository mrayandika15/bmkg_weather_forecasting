import { NextResponse } from "next/server";
import { dbSnowflake } from "@/lib/db";

export async function GET() {
  // Test query performance: EXPLAIN ANALYZE on a complex join
  const result = await dbSnowflake.execute(`
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
    s.subdistrict_name,
    d.district_name,
    c.city_name,
    p.province_name,
    s.latitude,
    s.longitude,
    s.timezone
FROM forecasting.dim_province p
JOIN forecasting.dim_city c ON c.province_id = p.province_id
JOIN forecasting.dim_district d ON d.city_id = c.city_id
JOIN forecasting.dim_subdistrict s ON s.district_id = d.district_id
JOIN forecasting.fact_weather_forecast f ON f.subdistrict_id = s.subdistrict_id
JOIN forecasting.dim_weather w ON f.weather_condition_id = w.weather_condition_id;
`);

  // Find the execution time in the EXPLAIN ANALYZE output
  // The output is usually in the last row, e.g., 'Execution Time: 12.345 ms'
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
  const countResult = await dbSnowflake.execute(`
    SELECT COUNT(*) as rowCount
    FROM forecasting.dim_province p
    JOIN forecasting.dim_city c ON c.province_id = p.province_id
    JOIN forecasting.dim_district d ON d.city_id = c.city_id
    JOIN forecasting.dim_subdistrict s ON s.district_id = d.district_id
    JOIN forecasting.fact_weather_forecast f ON f.subdistrict_id = s.subdistrict_id
    JOIN forecasting.dim_weather w ON f.weather_condition_id = w.weather_condition_id;
  `);
  const rowCount =
    countResult.rows[0]?.rowcount || countResult.rows[0]?.rowCount || 0;

  return NextResponse.json({ durationMs, source: "snowflake", rowCount });
}
