import StorageUsageChart from "@/components/charts/StorageUsageChart";

const storageData = [
  { name: "Storage Used", value: 120 }, // Example: 120MB
];

const storageChartConfig = {
  value: { label: "Storage Used", color: "hsl(var(--chart-1))" },
};

export default function SnowflakeStorageChart() {
  return (
    <StorageUsageChart
      title="Snowflake Storage Usage"
      description="A comprehensive view of the Snowflake schema's storage usage, showing the distribution of data in and out of the Snowflake schema."
      storageData={storageData}
      chartConfig={storageChartConfig}
      label="120 MB"
    />
  );
}
