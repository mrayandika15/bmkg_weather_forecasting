import { useQuery } from "@tanstack/react-query";
import QueryPerformanceChart from "@/components/charts/QueryPerformanceChart";

export default function SnowflakeQueryPerformance() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["snowflake-query-performance"],
    queryFn: async () => {
      const res = await fetch("/api/snowflake-query-performance");
      if (!res.ok) throw new Error("Failed to fetch query performance");
      return res.json();
    },
  });

  const chartConfig = {
    value: { label: "Execution Time (ms)", color: "hsl(var(--chart-1))" },
  };

  const performanceData = [
    {
      label: "COUNT(*) on fact_weather_forecast",
      value: data?.durationMs ?? 0,
    },
  ];

  if (isError) return <div>Failed to load query performance.</div>;

  return (
    <QueryPerformanceChart
      title="Snowflake Query Performance"
      description="Execution time (ms) for a sample query (COUNT(*)) on the fact_weather_forecast table."
      performanceData={performanceData}
      chartConfig={chartConfig}
      isLoading={isLoading}
      onRetest={() => refetch()}
    />
  );
}
