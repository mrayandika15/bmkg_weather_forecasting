import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import ChartCard from "@/components/charts/ChartCard";
import { Skeleton } from "@/components/ui/skeleton";
import ExplanationCard from "@/components/explanation-card";

interface StorageUsageChartProps {
  storageData: { name: string; value: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  label: string;
  max?: number;
  title?: string;
  description?: string;
  isLoading?: boolean;
}

export default function StorageUsageChart({
  storageData,
  chartConfig,
  label,
  max = 200,
  title = "Storage Usage",
  description,
  isLoading = false,
}: StorageUsageChartProps) {
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
              innerRadius="70%"
              outerRadius="60%"
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
      <ExplanationCard title="What does storage usage mean?">
        Storage usage in data warehousing refers to the total amount of physical
        disk space consumed by database objects, such as tables, indexes, and
        materialized views, within a schema or database. According to academic
        literature (see e.g., Inmon, 2005; Kimball & Ross, 2013), monitoring
        storage usage is essential for capacity planning, performance
        optimization, and cost management in large-scale analytical systems.
        <br />
        <br />
        High storage usage can indicate the presence of large fact tables,
        historical data retention, or suboptimal data modeling (e.g., lack of
        normalization or excessive denormalization). Regularly tracking storage
        consumption helps database administrators and data engineers identify
        growth trends, optimize storage allocation, and implement data lifecycle
        management strategies, such as partitioning, archiving, or purging old
        data.
        <br />
        <br />
        Understanding storage usage is also critical for ensuring that the
        system remains performant and cost-effective as data volumes grow over
        time.
      </ExplanationCard>
    </ChartCard>
  );
}
