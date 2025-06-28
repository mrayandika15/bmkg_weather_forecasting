import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

const etlData = [
  { batch: "Batch 1", dataIn: 1200, dataOut: 1100 },
  { batch: "Batch 2", dataIn: 1500, dataOut: 1400 },
  { batch: "Batch 3", dataIn: 1700, dataOut: 1650 },
  { batch: "Batch 4", dataIn: 1300, dataOut: 1250 },
];

const chartConfig = {
  dataIn: { label: "Data In", color: "hsl(var(--chart-1))" },
  dataOut: { label: "Data Out", color: "hsl(var(--chart-2))" },
};

export default function SnowflakeETLChart() {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-2">ETL Data In/Out (Snowflake)</h3>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={etlData} width={300} height={200}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="batch" />
          <YAxis />
          <Legend />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="dataIn"
            fill="hsl(var(--chart-1))"
            radius={4}
            name="Data In"
          />
          <Bar
            dataKey="dataOut"
            fill="hsl(var(--chart-2))"
            radius={4}
            name="Data Out"
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
