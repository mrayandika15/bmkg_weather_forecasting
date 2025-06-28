import StorageUsageChart from "@/components/StorageUsageChart";

const storageData = [
  { name: "Storage Used", value: 180 }, // Example: 180MB
];

const storageChartConfig = {
  value: { label: "Storage Used", color: "hsl(var(--chart-2))" },
};

export default function StarflakeStorageChart() {
  return (
    <StorageUsageChart
      storageData={storageData}
      chartConfig={storageChartConfig}
      label="180 MB"
    />
  );
}
