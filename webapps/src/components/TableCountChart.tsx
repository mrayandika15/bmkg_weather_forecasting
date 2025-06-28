import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface TableCountChartProps {
  chartData: { label: string; value: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
}

export default function TableCountChart({
  chartData,
  chartConfig,
}: TableCountChartProps) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full mb-8">
      <BarChart data={chartData} width={300} height={200}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="label" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill={chartConfig.value.color} radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
