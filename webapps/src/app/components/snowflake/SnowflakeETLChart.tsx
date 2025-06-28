import ETLChart from "@/components/charts/ETLChart";

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
      title="Snowflake ETL Data In/Out"
      description="A comprehensive view of the Snowflake schema's ETL data in/out, showing the distribution of data in and out of the Snowflake schema."
      etlData={etlData}
      chartConfig={chartConfig}
    />
  );
}
