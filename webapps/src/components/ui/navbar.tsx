const Navbar = () => {
  return (
    <nav className="w-full flex items-center gap-3 px-6 py-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm mb-8">
      {/* Dummy logo: SVG or emoji */}
      <span className="text-2xl">🌦️</span>
      <span className="font-bold text-lg tracking-tight">
        Weather Forecast Schema Dashboard
      </span>
    </nav>
  );
};

export default Navbar;
