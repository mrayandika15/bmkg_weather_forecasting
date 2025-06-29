import { useQuery } from "@tanstack/react-query";
import ETLChart from "@/components/charts/ETLChart";
import * as React from "react";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function SnowflakeETLChart() {
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({ from: undefined, to: undefined });

  const {
    data: etlData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["snowflake-etl", dateRange],
    queryFn: async () => {
      let url = "/api/snowflake-etl";
      if (dateRange.from && dateRange.to) {
        const startDate = dateRange.from.toISOString().slice(0, 10);
        const endDate = dateRange.to.toISOString().slice(0, 10);
        url += `?startDate=${startDate}&endDate=${endDate}`;
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch ETL data");
      return res.json();
    },
  });

  // Normalize and format the data for the chart
  const normalizedData = etlData.map((row: any) => ({
    batch: formatDate(
      typeof row.batch === "string" ? row.batch : String(row.batch)
    ),
    dataIn: Number(row.datain ?? row.dataIn),
  }));

  const chartConfig = {
    dataIn: { label: "Data In", color: "hsl(var(--chart-1))" },
    // dataOut: { label: "Data Out", color: "hsl(var(--chart-2))" }, // for future use
  };

  if (isError) return <div>Failed to load ETL data.</div>;

  return (
    <ETLChart
      title="Snowflake Data Intake"
      description="A daily summary of data intake into the fact_weather_forecast table."
      etlData={normalizedData}
      chartConfig={chartConfig}
      isLoading={isLoading}
      dateRange={dateRange}
      onDateRangeChange={setDateRange}
    />
  );
}
