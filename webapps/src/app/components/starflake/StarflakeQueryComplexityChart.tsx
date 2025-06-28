import QueryComplexityChart from "@/components/QueryComplexityChart";

export default function StarflakeQueryComplexityChart() {
  return (
    <QueryComplexityChart
      value={30}
      label="Low"
      description="Fewer joins, simpler queries"
      color="#22c55e" // green-500
    />
  );
}
