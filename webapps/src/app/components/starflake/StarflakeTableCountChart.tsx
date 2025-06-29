import { useQuery } from "@tanstack/react-query";
import TableCountChart from "@/components/charts/TableCountChart";

export default function StarflakeTableCountChart() {
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["starflake-table-count"],
    queryFn: async () => {
      const res = await fetch("/api/starflake-table-count");
      if (!res.ok) throw new Error("Failed to fetch table count");
      return res.json();
    },
  });

  const chartConfig = {
    value: { label: "Tables", color: "hsl(var(--chart-2))" },
  };

  if (isError) return <div>Failed to load table count.</div>;

  return (
    <TableCountChart
      title="Starflake Table Count"
      description="A comprehensive view of the Starflake schema's table structure, showing the distribution between dimension and fact tables that form the foundation of this normalized data model."
      chartData={chartData}
      chartConfig={chartConfig}
      isLoading={isLoading}
    />
  );
}
