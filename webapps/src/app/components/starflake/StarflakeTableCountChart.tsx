import TableCountChart from "@/components/charts/TableCountChart";

const chartData = [
  { label: "Dimension Tables", value: 2 },
  { label: "Fact Tables", value: 1 },
];

const chartConfig = {
  value: { label: "Tables", color: "hsl(var(--chart-2))" },
};

export default function StarflakeTableCountChart() {
  return (
    <TableCountChart
      title="Starflake Table Count"
      description="A comprehensive view of the Starflake schema's table structure, showing the distribution between dimension and fact tables that form the foundation of this normalized data model."
      chartData={chartData}
      chartConfig={chartConfig}
    />
  );
}
