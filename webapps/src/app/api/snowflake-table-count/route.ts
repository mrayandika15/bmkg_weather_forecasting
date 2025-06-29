import { NextResponse } from "next/server";
import { dbSnowflake } from "@/lib/db";

export async function GET() {
  // Query to count tables by type (dimension/fact) in the 'forecasting' schema
  const result = await dbSnowflake.execute(`
    SELECT
      CASE
        WHEN table_name ILIKE 'dim_%' THEN 'Dimension Tables'
        WHEN table_name ILIKE 'fact_%' THEN 'Fact Tables'
        ELSE 'Other'
      END AS label,
      COUNT(*) AS value
    FROM information_schema.tables
    WHERE table_schema = 'forecasting'
    GROUP BY label
  `);

  return NextResponse.json(result.rows);
}
