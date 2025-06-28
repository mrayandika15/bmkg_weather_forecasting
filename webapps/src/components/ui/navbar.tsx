import { Snowflake as SnowflakeIcon, Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex-col flex  bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-3 border-b py-4 border-zinc-200 dark:border-zinc-800">
        {/* Dummy logo: SVG or emoji */}
        <span className="text-2xl">🌦️</span>
        <span className="font-bold text-lg tracking-tight">
          Weather Forecast Schema Dashboard
        </span>
      </div>
      <div className="w-full flex items-center justify-between gap-3 px-6 py-2 ">
        <div className="flex-1 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-700 text-white font-semibold text-sm shadow-sm">
            <SnowflakeIcon className="w-4 h-4 text-white" />
            Snowflake View
          </span>
        </div>
        <div className="w-px h-8 bg-zinc-300 dark:bg-zinc-700 mx-0" />
        <div className="flex-1 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-700 text-white font-semibold text-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
            Starflake View
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
