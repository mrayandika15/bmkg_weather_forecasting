"use client";

import ChartCard from "@/components/charts/ChartCard";
import ExplanationCard from "@/components/explanation-card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle } from "lucide-react";
import React from "react";

interface QueryComplexityChartProps {
  value: number; // 0-100
  label: string;
  description: string;
  color: string;
  title?: string;
  isLoading?: boolean;
  rawValue?: number;
}

export default function QueryComplexityChart({
  value,
  label,
  description,
  color,
  title = "Query Complexity",
  isLoading = false,
  rawValue,
}: QueryComplexityChartProps) {
  if (isLoading) {
    return (
      <ChartCard title={title} description={description}>
        <div className="flex flex-col gap-4 w-full min-h-[40px] justify-center items-center">
          <Skeleton className="w-full h-5 rounded mb-2" />
        </div>
      </ChartCard>
    );
  }
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
      {typeof rawValue === "number" && (
        <div className="mt-2 text-xs text-center text-muted-foreground">
          Value: {rawValue.toLocaleString("id-ID")}
        </div>
      )}
      <ExplanationCard title="How is this value calculated?">
        Query complexity in data warehousing and OLAP systems is a measure of
        how intensively a database schema is accessed and queried, reflecting
        both the frequency and diversity of queries executed.
        <br />
        <br />
        In academic literature (see e.g., Kimball & Ross, 2013; Inmon, 2005),
        query complexity is often associated with the number of read operations
        (such as sequential and index scans) performed on tables, which can
        indicate the workload and optimization needs of a schema.
        <br />
        <br />
        A higher query complexity value suggests more frequent or more complex
        analytical queries, which may require advanced indexing, partitioning,
        or query optimization strategies to maintain performance.
        <br />
        <br />
        This metric is useful for understanding usage patterns and for guiding
        schema design and tuning in large-scale analytical databases.
      </ExplanationCard>
    </ChartCard>
  );
}
