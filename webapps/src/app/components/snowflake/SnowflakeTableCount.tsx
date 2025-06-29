"use client";

import { useQuery } from "@tanstack/react-query";
import TableCountChart from "@/components/charts/TableCountChart";

export default function SnowflakeTableCountChart() {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["snowflake-table-count"],
    queryFn: async () => {
      const res = await fetch("/api/snowflake-table-count");
      if (!res.ok) throw new Error("Failed to fetch table count");
      return res.json();
    },
  });

  const chartConfig = {
    value: { label: "Tables", color: "hsl(var(--chart-1))" },
  };

  if (isError) return <div>Failed to load table count.</div>;

  return (
    <TableCountChart
      title="Snowflake Table Count"
      description="A comprehensive view of the Snowflake schema's table structure, showing the distribution between dimension and fact tables that form the foundation of this normalized data model."
      chartData={chartData}
      chartConfig={chartConfig}
      isLoading={isLoading}
    />
  );
}
