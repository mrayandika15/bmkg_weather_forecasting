import { NextResponse } from "next/server";
import { dbStarflake } from "@/lib/db";

export async function GET() {
  try {
    // Define the query to test
    const testQuery = `
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
      JOIN forecasting.dim_weather w ON f.weather_condition_id = w.weather_condition_id
    `;

    // Perform multiple test runs for more accurate timing
    const numRuns = 5;
    const executionTimes: number[] = [];
    let totalRowCount = 0;

    for (let i = 0; i < numRuns; i++) {
      const startTime = performance.now();

      const result = await dbStarflake.execute(testQuery);

      const endTime = performance.now();
      const executionTime = endTime - startTime;

      executionTimes.push(executionTime);
      totalRowCount = result.rows.length;
    }

    // Calculate statistics
    const avgExecutionTime =
      executionTimes.reduce((sum, time) => sum + time, 0) /
      executionTimes.length;
    const minExecutionTime = Math.min(...executionTimes);
    const maxExecutionTime = Math.max(...executionTimes);
    const medianExecutionTime = executionTimes.sort((a, b) => a - b)[
      Math.floor(executionTimes.length / 2)
    ];

    // Calculate standard deviation
    const variance =
      executionTimes.reduce(
        (sum, time) => sum + Math.pow(time - avgExecutionTime, 2),
        0
      ) / executionTimes.length;
    const standardDeviation = Math.sqrt(variance);

    return NextResponse.json({
      durationMs: Math.round(avgExecutionTime * 100) / 100, // Round to 2 decimal places
      source: "starflake",
      rowCount: totalRowCount,
      statistics: {
        average: Math.round(avgExecutionTime * 100) / 100,
        minimum: Math.round(minExecutionTime * 100) / 100,
        maximum: Math.round(maxExecutionTime * 100) / 100,
        median: Math.round(medianExecutionTime * 100) / 100,
        standardDeviation: Math.round(standardDeviation * 100) / 100,
        numberOfRuns: numRuns,
        allExecutionTimes: executionTimes.map(
          (time) => Math.round(time * 100) / 100
        ),
      },
    });
  } catch (error) {
    console.error("Error measuring query performance:", error);
    return NextResponse.json(
      {
        error: "Failed to measure query performance",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
