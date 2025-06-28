import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

const etlData = [
  { batch: "Batch 1", dataIn: 1000, dataOut: 950 },
  { batch: "Batch 2", dataIn: 1100, dataOut: 1050 },
  { batch: "Batch 3", dataIn: 1200, dataOut: 1180 },
  { batch: "Batch 4", dataIn: 900, dataOut: 880 },
];

const chartConfig = {
  dataIn: { label: "Data In", color: "hsl(var(--chart-2))" },
  dataOut: { label: "Data Out", color: "hsl(var(--chart-3))" },
};

export default function StarflakeETLChart() {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-2">ETL Data In/Out (Starflake)</h3>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={etlData} width={300} height={200}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="batch" />
          <YAxis />
          <Legend />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="dataIn"
            fill="hsl(var(--chart-2))"
            radius={4}
            name="Data In"
          />
          <Bar
            dataKey="dataOut"
            fill="hsl(var(--chart-3))"
            radius={4}
            name="Data Out"
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
