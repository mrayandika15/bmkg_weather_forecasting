import ETLChart from "@/components/ETLChart";

const etlData = [
  { batch: "Batch 1", dataIn: 1200, dataOut: 1100 },
  { batch: "Batch 2", dataIn: 1500, dataOut: 1400 },
  { batch: "Batch 3", dataIn: 1700, dataOut: 1650 },
  { batch: "Batch 4", dataIn: 1300, dataOut: 1250 },
];

const chartConfig = {
  dataIn: { label: "Data In", color: "hsl(var(--chart-1))" },
  dataOut: { label: "Data Out", color: "hsl(var(--chart-2))" },
};

export default function SnowflakeETLChart() {
  return (
    <ETLChart
      etlData={etlData}
      chartConfig={chartConfig}
      title="ETL Data In/Out (Snowflake)"
    />
  );
}
