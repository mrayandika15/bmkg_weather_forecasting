"use client";

import { useQuery } from "@tanstack/react-query";
import JoinDepthChart from "@/components/charts/JoinDepthChart";
import ExplanationCard from "@/components/explanation-card";

export default function SnowflakeJoinDepthChart() {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["snowflake-join-depth"],
    queryFn: async () => {
      const res = await fetch("/api/snowflake-join-depth");
      if (!res.ok) throw new Error("Failed to fetch join depth");
      return res.json();
    },
  });

  const chartConfig = {
    value: { label: "Join Depth", color: "hsl(var(--chart-1))" },
  };

  if (isError) return <div>Failed to load join depth.</div>;

  return (
    <div className="flex flex-col gap-4">
      <JoinDepthChart
        title="Snowflake Join Depth"
        description="Average number of table joins per query in the Snowflake schema. Higher join depth indicates a more normalized and standardized schema."
        chartData={chartData}
        chartConfig={chartConfig}
        isLoading={isLoading}
      />
    </div>
  );
}
