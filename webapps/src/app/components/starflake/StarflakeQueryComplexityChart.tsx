import QueryComplexityChart from "@/components/charts/QueryComplexityChart";

export default function StarflakeQueryComplexityChart() {
  return (
    <QueryComplexityChart
      title="Starflake Query Complexity"
      description="A comprehensive view of the Starflake schema's query complexity, showing the distribution of query complexity across the Starflake schema."
      value={30}
      label="Low"
      color="#22c55e" // green-500
    />
  );
}
