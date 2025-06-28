import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  children,
}: SectionHeaderProps) {
  return (
    <Card className="bg-black text-white">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        {subtitle && (
          <CardDescription className="text-white/80">
            {subtitle}
          </CardDescription>
        )}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
