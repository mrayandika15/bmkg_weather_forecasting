import ChartCard from "@/components/charts/ChartCard";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

interface TableCountChartProps {
  chartData: { label: string; value: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  title?: string;
  description?: string;
  isLoading?: boolean;
}

export default function TableCountChart({
  chartData,
  chartConfig,
  title = "Table Count",
  description,
  isLoading = false,
}: TableCountChartProps) {
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
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full mb-8"
      >
        <BarChart data={chartData} width={300} height={200}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="label" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill={chartConfig.value.color} radius={4} />
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
}
