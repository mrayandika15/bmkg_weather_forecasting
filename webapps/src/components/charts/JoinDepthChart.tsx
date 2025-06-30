import ChartCard from "@/components/charts/ChartCard";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import ExplanationCard from "@/components/explanation-card";

interface JoinDepthChartProps {
  chartData: { label: string; value: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  title?: string;
  description?: string;
  isLoading?: boolean;
}

export default function JoinDepthChart({
  chartData,
  chartConfig,
  title = "Join Depth",
  description,
  isLoading = false,
}: JoinDepthChartProps) {
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
      <ExplanationCard title="What does join depth mean?">
        Join depth refers to the average number of table joins present in
        analytical queries. In data warehousing, a higher join depth is typical
        of normalized schemas (like Snowflake), where data is split across many
        dimension tables. According to Kimball & Ross (2013), deeper joins can
        improve data consistency and reduce redundancy, but may also increase
        query complexity and impact performance.
        <br />
        <br />
        Monitoring join depth helps data engineers and architects understand the
        trade-offs between normalization and query performance. A high average
        join depth may indicate a well-structured schema, but could also signal
        the need for query optimization or denormalization in some cases.
        <br />
        <br />
        Comparing join depth between Snowflake and Starflake schemas provides
        insight into their respective data modeling strategies and expected
        query performance characteristics.
      </ExplanationCard>
    </ChartCard>
  );
}
