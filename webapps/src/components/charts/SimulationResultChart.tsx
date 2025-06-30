import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface SimulationResultChartProps {
  simulatedMs: number;
  complexity: string;
}

function getProgressColor(ms: number) {
  if (ms > 100) return "bg-red-500";
  if (ms > 40) return "bg-yellow-500";
  return "bg-green-500";
}

function getComplexityColor(complexity: string) {
  if (complexity === "High") return "bg-red-500 text-white";
  if (complexity === "Medium") return "bg-yellow-500 text-black";
  return "bg-green-500 text-white";
}

export default function SimulationResultChart({
  simulatedMs,
  complexity,
}: SimulationResultChartProps) {
  const percent = Math.min(Math.round((simulatedMs / 200) * 100), 100);
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Simulation Result</CardTitle>
        <CardDescription>
          Estimated query performance and complexity.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-semibold">{simulatedMs} ms</span>
              <Badge className={getComplexityColor(complexity)}>
                {complexity}
              </Badge>
            </div>
            <div className="w-full">
              <Progress
                value={percent}
                className={getProgressColor(simulatedMs)}
              />
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              (0 ms = fastest, 200 ms = slowest)
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
