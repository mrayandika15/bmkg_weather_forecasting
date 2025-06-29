import { useQuery } from "@tanstack/react-query";
import StorageUsageChart from "@/components/charts/StorageUsageChart";

const storageChartConfig = {
  value: { label: "Storage Used", color: "hsl(var(--chart-2))" },
};

const MAX_STORAGE_MB = 200;

export default function StarflakeStorageChart() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["starflake-storage-usage"],
    queryFn: async () => {
      const res = await fetch("/api/starflake-storage-usage");
      if (!res.ok) throw new Error("Failed to fetch storage usage");
      return res.json();
    },
  });

  if (isError) return <div>Failed to load storage usage.</div>;

  // Normalize to 3-digit number (rounded to nearest integer)
  const value = Math.round(Number(data?.sizeMB ?? 0));
  const displayValue = value.toLocaleString();
  const storageData = [{ name: "Storage Used", value }];

  return (
    <StorageUsageChart
      title="Starflake Storage Usage"
      description="A comprehensive view of the Starflake schema's storage usage, showing the distribution of data in the forecasting schema."
      storageData={storageData}
      chartConfig={storageChartConfig}
      label={`${displayValue} MB`}
      max={MAX_STORAGE_MB}
      isLoading={isLoading}
    />
  );
}
