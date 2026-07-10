function DashboardNavbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-4">

      <h1 className="text-2xl font-bold text-white">
        🤖 AI Promo Studio
      </h1>

      <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white">
        Logout
      </button>

    </nav>
  );
}

export default DashboardNavbar;