import StorageUsageChart from "@/components/charts/StorageUsageChart";

const storageData = [
  { name: "Storage Used", value: 180 }, // Example: 180MB
];

const storageChartConfig = {
  value: { label: "Storage Used", color: "hsl(var(--chart-2))" },
};

export default function StarflakeStorageChart() {
  return (
    <StorageUsageChart
      title="Starflake Storage Usage"
      description="A comprehensive view of the Starflake schema's storage usage, showing the distribution of data in and out of the Starflake schema."
      storageData={storageData}
      chartConfig={storageChartConfig}
      label="180 MB"
    />
  );
}
