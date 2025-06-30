"use client";

import { useQuery } from "@tanstack/react-query";
import JoinDepthChart from "@/components/charts/JoinDepthChart";

export default function StarflakeJoinDepthChart() {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["starflake-join-depth"],
    queryFn: async () => {
      const res = await fetch("/api/starflake-join-depth");
      if (!res.ok) throw new Error("Failed to fetch join depth");
      return res.json();
    },
  });

  const chartConfig = {
    value: { label: "Join Depth", color: "hsl(var(--chart-2))" },
  };

  if (isError) return <div>Failed to load join depth.</div>;

  return (
    <JoinDepthChart
      title="Starflake Join Depth"
      description="Average number of table joins per query in the Starflake schema. Lower join depth indicates a more denormalized schema."
      chartData={chartData}
      chartConfig={chartConfig}
      isLoading={isLoading}
    />
  );
}
