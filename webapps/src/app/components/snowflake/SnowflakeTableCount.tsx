import TableCountChart from "@/components/charts/TableCountChart";

const chartData = [
  { label: "Dimension Tables", value: 4 },
  { label: "Fact Tables", value: 1 },
];

const chartConfig = {
  value: { label: "Tables", color: "hsl(var(--chart-1))" },
};

export default function SnowflakeTableCountChart() {
  return (
    <TableCountChart
      title="Snowflake Table Count"
      description="A comprehensive view of the Snowflake schema's table structure, showing the distribution between dimension and fact tables that form the foundation of this normalized data model."
      chartData={chartData}
      chartConfig={chartConfig}
    />
  );
}
