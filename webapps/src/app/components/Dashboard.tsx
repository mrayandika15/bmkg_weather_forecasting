"use client";
import SnowflakeCard from "@/app/components/snowflake/SnowflakeCard";
import StarflakeCard from "@/app/components/starflake/StarflakeCard";

function Navbar() {
  return (
    <nav className="w-full flex items-center gap-3 px-6 py-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm mb-8">
      {/* Dummy logo: SVG or emoji */}
      <span className="text-2xl">🌦️</span>
      <span className="font-bold text-lg tracking-tight">
        Weather Forecast Schema Dashboard
      </span>
    </nav>
  );
}

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-10 flex flex-col gap-1">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SnowflakeCard />
        <StarflakeCard />
      </div>
    </div>
  );
}
