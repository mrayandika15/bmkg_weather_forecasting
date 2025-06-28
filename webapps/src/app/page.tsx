"use client";

import SnowflakeETLChart from "@/app/components/snowflake/SnowflakeETLChart";
import SnowflakeQueryComplexityChart from "@/app/components/snowflake/SnowflakeQueryComplexity";
import SnowflakeStorageChart from "@/app/components/snowflake/SnowflakeStorageUsage";
import SnowflakeTableCountChart from "@/app/components/snowflake/SnowflakeTableCount";
import StarflakeQueryComplexityChart from "@/app/components/starflake/StarflakeQueryComplexityChart";
import StarflakeETLChart from "@/app/components/starflake/StarflakeETLChart";
import StarflakeStorageChart from "@/app/components/starflake/StarflakeStorageUsageChart";
import StarflakeTableCountChart from "@/app/components/starflake/StarflakeTableCountChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const summarySnowflake = {
  tables: 5,
  description: "Highly normalized, more tables, more joins.",
};

const summaryStarflake = {
  tables: 10,
  description: "Denormalized, fewer tables, fewer joins.",
};

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Snowflake Schema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">
            {summarySnowflake.tables} Tables
          </div>
          <div className="text-muted-foreground mb-4">
            {summarySnowflake.description}
          </div>
          <SnowflakeTableCountChart />
          <SnowflakeETLChart />
          <SnowflakeStorageChart />
          <SnowflakeQueryComplexityChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Starflake Schema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-2">
            {summaryStarflake.tables} Tables
          </div>
          <div className="text-muted-foreground mb-4">
            {summaryStarflake.description}
          </div>
          <StarflakeTableCountChart />
          <StarflakeETLChart />
          <StarflakeStorageChart />
          <StarflakeQueryComplexityChart />
        </CardContent>
      </Card>
    </>
  );
}
