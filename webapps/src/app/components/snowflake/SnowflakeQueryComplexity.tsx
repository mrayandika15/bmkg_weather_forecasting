import QueryComplexityChart from "@/components/charts/QueryComplexityChart";

export default function SnowflakeQueryComplexityChart() {
  return (
    <QueryComplexityChart
      title="Snowflake Query Complexity"
      description="A comprehensive view of the Snowflake schema's query complexity, showing the distribution of query complexity across the Snowflake schema."
      value={80}
      label="High"
      color="#f59e42" // orange-500
    />
  );
}
