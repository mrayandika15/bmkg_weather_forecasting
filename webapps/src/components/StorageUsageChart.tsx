import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface StorageUsageChartProps {
  storageData: { name: string; value: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  label: string;
}

export default function StorageUsageChart({
  storageData,
  chartConfig,
  label,
}: StorageUsageChartProps) {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-2">Storage Usage</h3>
      <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
        <BarChart data={storageData} width={200} height={100} layout="vertical">
          <XAxis type="number" hide domain={[0, 200]} />
          <YAxis type="category" dataKey="name" hide />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill={chartConfig.value.color} radius={4} />
        </BarChart>
      </ChartContainer>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
