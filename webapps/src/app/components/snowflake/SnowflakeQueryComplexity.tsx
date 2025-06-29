import { useQuery } from "@tanstack/react-query";
import QueryComplexityChart from "@/components/charts/QueryComplexityChart";

const colorMap = {
  Low: "#22c55e", // green-500
  Medium: "#f59e42", // orange-500
  High: "#ef4444", // red-500
};

type ComplexityLabel = "Low" | "Medium" | "High";

export default function SnowflakeQueryComplexityChart() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["snowflake-query-complexity"],
    queryFn: async () => {
      const res = await fetch("/api/snowflake-query-complexity");
      if (!res.ok) throw new Error("Failed to fetch query complexity");
      return res.json();
    },
  });

  if (isError) return <div>Failed to load query complexity.</div>;

  const value = Number(data?.value ?? 0);
  const label: ComplexityLabel = ["Low", "Medium", "High"].includes(data?.label)
    ? data.label
    : "Low";
  const color = colorMap[label];
  const rawValue = data?.rawValue ?? data?.totalScans ?? 0;

  return (
    <QueryComplexityChart
      title="Snowflake Query Complexity"
      description="A comprehensive view of the Snowflake schema's query complexity, showing the distribution of query complexity across the Snowflake schema."
      value={value}
      label={label}
      color={color}
      isLoading={isLoading}
      rawValue={rawValue}
    />
  );
}
