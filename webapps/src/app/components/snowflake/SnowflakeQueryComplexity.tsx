import QueryComplexityChart from "@/components/QueryComplexityChart";

export default function SnowflakeQueryComplexityChart() {
  return (
    <QueryComplexityChart
      value={80}
      label="High"
      description="More joins, more tables"
      color="#f59e42" // orange-500
    />
  );
}
