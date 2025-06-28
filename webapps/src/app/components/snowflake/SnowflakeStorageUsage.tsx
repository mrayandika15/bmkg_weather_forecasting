import StorageUsageChart from "@/components/StorageUsageChart";

const storageData = [
  { name: "Storage Used", value: 120 }, // Example: 120MB
];

const storageChartConfig = {
  value: { label: "Storage Used", color: "hsl(var(--chart-1))" },
};

export default function SnowflakeStorageChart() {
  return (
    <StorageUsageChart
      storageData={storageData}
      chartConfig={storageChartConfig}
      label="120 MB"
    />
  );
}
