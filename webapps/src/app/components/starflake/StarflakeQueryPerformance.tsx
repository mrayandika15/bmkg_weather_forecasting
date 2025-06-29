import { useQuery } from "@tanstack/react-query";
import QueryPerformanceChart from "@/components/charts/QueryPerformanceChart";

export default function StarflakeQueryPerformance() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["starflake-query-performance"],
    queryFn: async () => {
      const res = await fetch("/api/starflake-query-performance");
      if (!res.ok) throw new Error("Failed to fetch query performance");
      return res.json();
    },
  });

  const chartConfig = {
    value: { label: "Execution Time (ms)", color: "hsl(var(--chart-2))" },
  };

  const performanceData = [
    {
      label: "Complex Join Query",
      value: data?.durationMs ?? 0,
    },
  ];

  if (isError) return <div>Failed to load query performance.</div>;

  return (
    <QueryPerformanceChart
      title="Starflake Query Performance"
      description="Execution time (ms) for a complex join query on the forecasting schema."
      performanceData={performanceData}
      chartConfig={chartConfig}
      isLoading={isLoading}
      onRetest={() => refetch()}
    />
  );
}
