import { NextResponse } from "next/server";
import { dbSnowflake } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  let whereClause = "";
  if (startDate && endDate) {
    whereClause = `WHERE created_at >= '${startDate}' AND created_at <= '${endDate}'`;
  }

  const result = await dbSnowflake.execute(`
    SELECT
      DATE_TRUNC('day', created_at) AS batch,
      COUNT(*) AS dataIn
    FROM forecasting.fact_weather_forecast
    ${whereClause}
    GROUP BY batch
    ORDER BY batch
  `);

  return NextResponse.json(result.rows);
}
