"use client";

interface QueryComplexityChartProps {
  value: number; // 0-100
  label: string;
  description: string;
  color: string;
}

export default function QueryComplexityChart({
  value,
  label,
  description,
  color,
}: QueryComplexityChartProps) {
  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-2">Query Complexity</h3>
      <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded h-5 relative">
        <div
          className="h-5 rounded transition-all"
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white">
          {label}
        </span>
      </div>
      <div className="text-sm text-muted-foreground mt-1">{description}</div>
    </div>
  );
}
