"use client";

import { useState } from "react";
import SimulationChart from "@/components/charts/SimulationChart";

const defaultParams = {
  provinceRows: 34,
  cityRows: 500,
  districtRows: 7000,
  subdistrictRows: 85000,
  forecastRows: 1000000,
  weatherRows: 20,
};

function ensureControlledParams(params: any) {
  return {
    provinceRows: params.provinceRows ?? "",
    cityRows: params.cityRows ?? "",
    districtRows: params.districtRows ?? "",
    subdistrictRows: params.subdistrictRows ?? "",
    forecastRows: params.forecastRows ?? "",
    weatherRows: params.weatherRows ?? "",
  };
}

export default function SnowflakeSimulationChart() {
  const [params, setParamsRaw] = useState(defaultParams);
  const setParams = (updater: any) => {
    setParamsRaw((prev) =>
      ensureControlledParams(
        typeof updater === "function" ? updater(prev) : updater
      )
    );
  };
  const [result, setResult] = useState<{
    simulatedMs: number;
    complexity: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSimulate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    const res = await fetch("/api/snowflake-simulation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    const data = await res.json();
    setResult(data);
    setIsLoading(false);
  };

  return (
    <SimulationChart
      params={params}
      setParams={setParams}
      isLoading={isLoading}
      result={result}
      onSimulate={handleSimulate}
    />
  );
}
