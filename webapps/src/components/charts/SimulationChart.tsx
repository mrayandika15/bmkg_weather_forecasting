import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import TableCountChart from "@/components/charts/TableCountChart";

interface SimulationChartProps {
  params: any;
  setParams: (params: any) => void;
  isLoading: boolean;
  result: { simulatedMs: number; complexity: string } | null;
  onSimulate: (e: React.FormEvent) => void;
  mode?: "snowflake" | "starflake";
}

export default function SimulationChart({
  params,
  setParams,
  isLoading,
  result,
  onSimulate,
  mode = "snowflake",
}: SimulationChartProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    let newValue: number = Number(value);
    setParams((prev: any) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const chartData = result
    ? [
        { label: "Simulated Time (ms)", value: result.simulatedMs },
        {
          label: "Complexity",
          value:
            result.complexity === "High"
              ? 3
              : result.complexity === "Medium"
              ? 2
              : 1,
        },
      ]
    : [];

  const chartConfig = {
    value: { label: "Simulation", color: "hsl(var(--chart-1))" },
  };

  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Query Simulation</CardTitle>
        <CardDescription>
          Simulate query performance and complexity for a hypothetical scenario
          based on {mode === "starflake" ? "Starflake" : "Snowflake"} join path.
        </CardDescription>
        <form
          onSubmit={onSimulate}
          className="flex flex-wrap gap-4 items-end mt-4"
        >
          {mode === "snowflake" ? (
            <>
              <div>
                <Label htmlFor="provinceRows">Province Rows</Label>
                <Input
                  type="number"
                  name="provinceRows"
                  id="provinceRows"
                  min={1}
                  max={1000000}
                  value={params.provinceRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
              <div>
                <Label htmlFor="cityRows">City Rows</Label>
                <Input
                  type="number"
                  name="cityRows"
                  id="cityRows"
                  min={1}
                  max={1000000}
                  value={params.cityRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
              <div>
                <Label htmlFor="districtRows">District Rows</Label>
                <Input
                  type="number"
                  name="districtRows"
                  id="districtRows"
                  min={1}
                  max={1000000}
                  value={params.districtRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
              <div>
                <Label htmlFor="subdistrictRows">Subdistrict Rows</Label>
                <Input
                  type="number"
                  name="subdistrictRows"
                  id="subdistrictRows"
                  min={1}
                  max={1000000}
                  value={params.subdistrictRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
              <div>
                <Label htmlFor="forecastRows">Forecast Rows</Label>
                <Input
                  type="number"
                  name="forecastRows"
                  id="forecastRows"
                  min={1}
                  max={1000000}
                  value={params.forecastRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
              <div>
                <Label htmlFor="weatherRows">Weather Rows</Label>
                <Input
                  type="number"
                  name="weatherRows"
                  id="weatherRows"
                  min={1}
                  max={1000000}
                  value={params.weatherRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <Label htmlFor="locationRows">Location Rows</Label>
                <Input
                  type="number"
                  name="locationRows"
                  id="locationRows"
                  min={1}
                  max={1000000}
                  value={params.locationRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
              <div>
                <Label htmlFor="forecastRows">Forecast Rows</Label>
                <Input
                  type="number"
                  name="forecastRows"
                  id="forecastRows"
                  min={1}
                  max={1000000}
                  value={params.forecastRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
              <div>
                <Label htmlFor="weatherRows">Weather Rows</Label>
                <Input
                  type="number"
                  name="weatherRows"
                  id="weatherRows"
                  min={1}
                  max={1000000}
                  value={params.weatherRows ?? ""}
                  onChange={handleChange}
                  className="w-28"
                />
              </div>
            </>
          )}
          <Button type="submit" disabled={isLoading} className="h-9">
            {isLoading ? "Simulating..." : "Simulate"}
          </Button>
        </form>
      </CardHeader>
      <CardContent>
        {result && (
          <TableCountChart
            title="Query Simulation Result"
            description={`Simulated query performance and complexity for the given parameters.`}
            chartData={chartData}
            chartConfig={chartConfig}
            isLoading={isLoading}
          />
        )}
      </CardContent>
    </Card>
  );
}
