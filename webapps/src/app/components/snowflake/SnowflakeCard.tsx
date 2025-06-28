import SnowflakeETLChart from "@/app/components/snowflake/SnowflakeETLChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const summary = {
  tables: 5,
  description: "Highly normalized, more tables, more joins.",
};

const chartData = [
  { label: "Dimension Tables", value: 4 },
  { label: "Fact Tables", value: 1 },
];

const chartConfig = {
  value: { label: "Tables", color: "hsl(var(--chart-1))" },
};

export default function SnowflakeCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Snowflake Schema</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">{summary.tables} Tables</div>
        <div className="text-muted-foreground mb-4">{summary.description}</div>
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] w-full mb-8"
        >
          <BarChart data={chartData} width={300} height={200}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={4} />
          </BarChart>
        </ChartContainer>
        <SnowflakeETLChart />
      </CardContent>
    </Card>
  );
}
