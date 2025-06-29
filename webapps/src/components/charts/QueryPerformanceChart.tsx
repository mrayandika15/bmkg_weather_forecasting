import ChartCard from "@/components/charts/ChartCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import ExplanationCard from "@/components/explanation-card";

interface QueryPerformanceChartProps {
  performanceData: { label: string; value: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  title?: string;
  description?: string;
  isLoading?: boolean;
  onRetest?: () => void;
}

export default function QueryPerformanceChart({
  performanceData,
  chartConfig,
  title = "Query Performance",
  description,
  isLoading = false,
  onRetest,
}: QueryPerformanceChartProps) {
  const value = performanceData[0]?.value || 0;
  // For gauge/progress, set a max (e.g., 2000ms)
  const max = 60;
  const percent = Math.min(100, Math.round((value / max) * 100));

  // Color logic: green <=33%, yellow <=66%, red >66%
  let barColor = "#22c55e"; // green
  if (percent > 66) barColor = "#ef4444"; // red
  else if (percent > 33) barColor = "#f59e42"; // yellow

  const formattedValue = value.toFixed(2);

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
      <div className="flex flex-col items-center w-full h-full gap-4">
        <div
          className="text-4xl font-bold text-primary mb-2"
          style={{ color: barColor }}
        >
          {formattedValue} ms
        </div>
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-6 relative overflow-hidden">
            <div
              className="h-6 rounded-full transition-all"
              style={{ width: `${percent}%`, backgroundColor: barColor }}
            ></div>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            {percent}% of {max} ms (lower is better)
          </div>
        </div>
        {onRetest && (
          <Button variant="outline" onClick={onRetest}>
            <RefreshCcw className="w-4 h-4 mr-2" />
            Re-Test
          </Button>
        )}
      </div>
      <ExplanationCard title="What does query performance mean?">
        Query performance in database systems refers to the efficiency and speed
        with which a database management system can execute queries,
        particularly complex analytical or reporting queries. In academic and
        industry literature (see e.g., Stonebraker & Hellerstein, 2005; Kimball
        & Ross, 2013), query performance is often measured by execution time,
        resource utilization, and throughput.
        <br />
        <br />
        Lower execution times indicate more efficient query processing, which is
        critical for interactive analytics, reporting, and data-driven decision
        making. Factors affecting query performance include indexing, query
        optimization, schema design, hardware resources, and the complexity of
        joins and aggregations.
        <br />
        <br />
        Regularly benchmarking and monitoring query performance helps database
        administrators and engineers identify bottlenecks, optimize queries, and
        ensure that the system can handle growing data volumes and user demands
        effectively.
      </ExplanationCard>
    </ChartCard>
  );
}
