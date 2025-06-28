import TableCountChart from "@/components/TableCountChart";

const chartData = [
  { label: "Dimension Tables", value: 2 },
  { label: "Fact Tables", value: 1 },
];

const chartConfig = {
  value: { label: "Tables", color: "hsl(var(--chart-2))" },
};

export default function StarflakeTableCountChart() {
  return <TableCountChart chartData={chartData} chartConfig={chartConfig} />;
}
