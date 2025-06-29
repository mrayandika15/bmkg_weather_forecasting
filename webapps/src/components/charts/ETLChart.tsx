import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ChartCard from "@/components/charts/ChartCard";
import { Skeleton } from "@/components/ui/skeleton";

interface ETLChartProps {
  etlData: { batch: string; dataIn: number; dataOut?: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  title?: string;
  description?: string;
  isLoading?: boolean;
}

export default function ETLChart({
  etlData,
  chartConfig,
  title = "ETL Data In/Out",
  description,
  isLoading = false,
}: ETLChartProps) {
  if (isLoading) {
    return (
      <ChartCard title={title} description={description}>
        <div className="flex flex-col gap-4 w-full min-h-[200px] justify-center items-center">
          <Skeleton className="w-[200px] h-[32px] rounded-full mb-4" />
          <Skeleton className="w-full h-[120px] rounded-lg" />
        </div>
      </ChartCard>
    );
  }
  return (
    <ChartCard title={title} description={description}>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={etlData} width={300} height={200}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="batch" />
          <YAxis />
          <Legend />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="dataIn"
            fill={chartConfig.dataIn.color}
            radius={4}
            name={chartConfig.dataIn.label}
          />
          {chartConfig.dataOut && (
            <Bar
              dataKey="dataOut"
              fill={chartConfig.dataOut.color}
              radius={4}
              name={chartConfig.dataOut.label}
            />
          )}
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
