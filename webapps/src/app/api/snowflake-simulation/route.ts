import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    provinceRows = 1,
    cityRows = 1,
    districtRows = 1,
    subdistrictRows = 1,
    forecastRows = 1,
    weatherRows = 1,
  } = await req.json();

  // Static join path: province -> city -> district -> subdistrict -> forecast -> weather
  // Simulate: base time + log(row counts) + join penalty
  let baseTime = 10; // ms
  let complexity = "Low";

  // 5 joins in the snowflake path
  baseTime += 5 * 15;

  // Add log-scale penalty for each table's row count
  baseTime += Math.log10(provinceRows + 1) * 10;
  baseTime += Math.log10(cityRows + 1) * 10;
  baseTime += Math.log10(districtRows + 1) * 10;
  baseTime += Math.log10(subdistrictRows + 1) * 10;
  baseTime += Math.log10(forecastRows + 1) * 15;
  baseTime += Math.log10(weatherRows + 1) * 5;

  // Set complexity label
  if (baseTime > 100) complexity = "High";
  else if (baseTime > 40) complexity = "Medium";

  return NextResponse.json({ simulatedMs: Math.round(baseTime), complexity });
}
