"use client";

import SnowflakeETLChart from "@/app/components/snowflake/SnowflakeETLChart";
import SnowflakeQueryComplexityChart from "@/app/components/snowflake/SnowflakeQueryComplexity";
import SnowflakeStorageChart from "@/app/components/snowflake/SnowflakeStorageUsage";
import SnowflakeTableCountChart from "@/app/components/snowflake/SnowflakeTableCount";
import StarflakeETLChart from "@/app/components/starflake/StarflakeETLChart";
import StarflakeQueryComplexityChart from "@/app/components/starflake/StarflakeQueryComplexityChart";
import StarflakeStorageChart from "@/app/components/starflake/StarflakeStorageUsageChart";
import StarflakeTableCountChart from "@/app/components/starflake/StarflakeTableCountChart";
import SnowflakeQueryPerformance from "@/app/components/snowflake/SnowflakeQueryPerformance";
import StarflakeQueryPerformance from "@/app/components/starflake/StarflakeQueryPerformance";
import SnowflakeJoinDepthChart from "@/app/components/snowflake/SnowflakeJoinDepthChart";
import StarflakeJoinDepthChart from "@/app/components/starflake/StarflakeJoinDepthChart";
import SnowflakeSimulationChart from "@/app/components/snowflake/SnowflakeSimulationChart";
import StarflakeSimulationChart from "@/app/components/starflake/StarflakeSimulationChart";

export default function Home() {
  return (
    <>
      {/* Snowflake Section */}
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2 w-full px-8 py-4">
          <div id="table-count">
            <SnowflakeTableCountChart />
          </div>
          <div id="data-track">
            <SnowflakeETLChart />
          </div>
          <div id="storage-usage">
            <SnowflakeStorageChart />
          </div>
          <div id="query-complexity">
            <SnowflakeQueryComplexityChart />
          </div>
          <div id="join-depth">
            <SnowflakeJoinDepthChart />
          </div>
          <div id="query-performance">
            <SnowflakeQueryPerformance />
          </div>
          <div id="simulation">
            <SnowflakeSimulationChart />
          </div>
        </div>
      </div>

      {/* Starflake Section */}
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2 w-full px-8 py-4">
          <div id="starflake-table-count">
            <StarflakeTableCountChart />
          </div>
          <div id="starflake-data-track">
            <StarflakeETLChart />
          </div>
          <div id="starflake-storage-usage">
            <StarflakeStorageChart />
          </div>
          <div id="starflake-query-complexity">
            <StarflakeQueryComplexityChart />
          </div>
          <div id="starflake-join-depth">
            <StarflakeJoinDepthChart />
          </div>
          <div id="starflake-query-performance">
            <StarflakeQueryPerformance />
          </div>
          <div id="starflake-simulation">
            <StarflakeSimulationChart />
          </div>
        </div>
      </div>
    </>
  );
}
