import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="min-h-screen w-64 border-r border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="rounded-xl px-4 py-3 text-gray-300 transition duration-300 hover:bg-purple-600/20 hover:text-white"
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/create-video"
          className="rounded-xl px-4 py-3 text-gray-300 transition duration-300 hover:bg-purple-600/20 hover:text-white"        >
          🎬 Create AI Video
        </Link>

        <Link
          to="/projects"
          className="rounded-xl px-4 py-3 text-gray-300 transition duration-300 hover:bg-purple-600/20 hover:text-white"        >
          📁 My Projects
        </Link>

        <Link
          to="/profile"
          className="rounded-xl px-4 py-3 text-gray-300 transition duration-300 hover:bg-purple-600/20 hover:text-white"
        >
          👤 Profile
        </Link>

        <Link
          to="/settings"
          className="rounded-xl px-4 py-3 text-gray-300 transition duration-300 hover:bg-purple-600/20 hover:text-white"
        >
          ⚙️ Settings
        </Link>

      </nav>

    </aside>
  );
}

export default Sidebar;