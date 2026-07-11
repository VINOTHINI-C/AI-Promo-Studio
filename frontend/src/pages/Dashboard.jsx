import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
<div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
        <DashboardNavbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8 text-white">
         <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

  <h1 className="text-5xl font-extrabold leading-tight">
    👋 Welcome Back,
    <span className="block bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
      Vinothini
    </span>
  </h1>

  <p className="mt-4 max-w-2xl text-lg text-gray-300">
    Create professional AI promotional videos in minutes using
    the power of Artificial Intelligence.
  </p>

  <div className="mt-8 flex flex-wrap gap-4">

    <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold transition hover:scale-105">
      🚀 Create Video
    </button>

    <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10">
      📁 View Projects
    </button>

  </div>

</div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <DashboardCard
  to="/create-video"
  icon="🎬"
  title="Create AI Video"
  description="Start creating a new AI promotional video."
/>

  <DashboardCard
  to="/projects"
  icon="📁"
  title="My Projects"
  description="View all your saved AI video projects."
/>

  <DashboardCard
  to="/profile"
  icon="👤"
  title="Profile"
  description="Manage your account information."
/>
  <DashboardCard
  to="/settings"
  icon="⚙️"
  title="Settings"
  description="Customize your application settings."
/>

</div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;