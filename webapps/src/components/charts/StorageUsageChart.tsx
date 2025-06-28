import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import ChartCard from "@/components/charts/ChartCard";

interface StorageUsageChartProps {
  storageData: { name: string; value: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  label: string;
  max?: number;
  title?: string;
  description?: string;
}

export default function StorageUsageChart({
  storageData,
  chartConfig,
  label,
  max = 200,
  title = "Storage Usage",
  description,
}: StorageUsageChartProps) {
  const value = storageData[0]?.value || 0;
  const percent = Math.round((value / max) * 100);
  const color = chartConfig.value.color;

  return (
    <ChartCard title={title} description={description}>
      <div className="flex flex-col items-center w-full h-full">
        <ChartContainer
          config={chartConfig}
          className="w-full h-56 flex justify-center items-center relative"
        >
          <ResponsiveContainer width="100%" height="100%" aspect={1}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="90%"
              barSize={18}
              data={[{ name: label, value: percent }]}
              startAngle={225}
              endAngle={-45}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                dataKey="value"
                cornerRadius={10}
                fill={color}
              />
              {/* Center label */}
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-2xl font-bold fill-foreground"
              >
                {value} MB
              </text>
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-muted-foreground"
              >
                {percent}% of {max} MB
              </text>
            </RadialBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </ChartCard>
  );
}
