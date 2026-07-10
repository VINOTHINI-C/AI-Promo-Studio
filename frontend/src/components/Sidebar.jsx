import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-slate-900 p-6">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="rounded-lg px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/create-video"
          className="rounded-lg px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          🎬 Create AI Video
        </Link>

        <Link
          to="/projects"
          className="rounded-lg px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          📁 My Projects
        </Link>

        <Link
          to="/profile"
          className="rounded-lg px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          👤 Profile
        </Link>

        <Link
          to="/settings"
          className="rounded-lg px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white"
        >
          ⚙️ Settings
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;