import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ETLChartProps {
  etlData: { batch: string; dataIn: number; dataOut: number }[];
  chartConfig: Record<string, { label: string; color: string }>;
  title: string;
}

export default function ETLChart({
  etlData,
  chartConfig,
  title,
}: ETLChartProps) {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={etlData} width={300} height={200}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="batch" />
          <YAxis />
          <Legend />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="dataIn"
            fill={chartConfig.dataIn.color}
            radius={4}
            name={chartConfig.dataIn.label}
          />
          <Bar
            dataKey="dataOut"
            fill={chartConfig.dataOut.color}
            radius={4}
            name={chartConfig.dataOut.label}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
