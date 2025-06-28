"use client";

import ChartCard from "@/components/charts/ChartCard";

interface QueryComplexityChartProps {
  value: number; // 0-100
  label: string;
  description: string;
  color: string;
  title?: string;
}

export default function QueryComplexityChart({
  value,
  label,
  description,
  color,
  title = "Query Complexity",
}: QueryComplexityChartProps) {
  return (
    <ChartCard title={title} description={description}>
      <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded h-5 relative">
        <div
          className="h-5 rounded transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
          {label}
        </span>
      </div>
    </ChartCard>
  );
}
