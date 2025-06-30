import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    locationRows = 1,
    forecastRows = 1,
    weatherRows = 1,
  } = await req.json();

  // Starflake join path: location -> forecast -> weather
  let baseTime = 10; // ms
  let complexity = "Low";

  // 2 joins in the starflake path
  baseTime += 2 * 15;

  // Add log-scale penalty for each table's row count
  baseTime += Math.log10(locationRows + 1) * 15;
  baseTime += Math.log10(forecastRows + 1) * 20;
  baseTime += Math.log10(weatherRows + 1) * 5;

  // Set complexity label
  if (baseTime > 100) complexity = "High";
  else if (baseTime > 40) complexity = "Medium";

  return NextResponse.json({ simulatedMs: Math.round(baseTime), complexity });
}
