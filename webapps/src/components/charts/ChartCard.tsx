import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";

interface ChartCardProps {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
}

export default function ChartCard({
  title,
  description,
  children,
}: ChartCardProps) {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
