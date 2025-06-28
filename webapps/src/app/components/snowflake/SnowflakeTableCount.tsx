import TableCountChart from "@/components/TableCountChart";

const chartData = [
  { label: "Dimension Tables", value: 4 },
  { label: "Fact Tables", value: 1 },
];

const chartConfig = {
  value: { label: "Tables", color: "hsl(var(--chart-1))" },
};

export default function SnowflakeTableCountChart() {
  return <TableCountChart chartData={chartData} chartConfig={chartConfig} />;
}
