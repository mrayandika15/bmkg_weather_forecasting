import ETLChart from "@/components/ETLChart";

const etlData = [
  { batch: "Batch 1", dataIn: 1000, dataOut: 950 },
  { batch: "Batch 2", dataIn: 1100, dataOut: 1050 },
  { batch: "Batch 3", dataIn: 1200, dataOut: 1180 },
  { batch: "Batch 4", dataIn: 900, dataOut: 880 },
];

const chartConfig = {
  dataIn: { label: "Data In", color: "hsl(var(--chart-2))" },
  dataOut: { label: "Data Out", color: "hsl(var(--chart-3))" },
};

export default function StarflakeETLChart() {
  return (
    <ETLChart
      etlData={etlData}
      chartConfig={chartConfig}
      title="ETL Data In/Out (Starflake)"
    />
  );
}
