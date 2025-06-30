"use client";

import { useState } from "react";
import SimulationChart from "@/components/charts/SimulationChart";

const defaultParams = {
  locationRows: 100000,
  forecastRows: 1000000,
  weatherRows: 20,
};

function ensureControlledParams(params: any) {
  return {
    locationRows: params.locationRows ?? "",
    forecastRows: params.forecastRows ?? "",
    weatherRows: params.weatherRows ?? "",
  };
}

export default function StarflakeSimulationChart() {
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
    const res = await fetch("/api/starflake-simulation", {
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
      mode="starflake"
    />
  );
}
