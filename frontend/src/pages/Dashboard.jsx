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
          <h1 className="text-4xl font-bold">
            👋 Welcome to AI Promo Studio
          </h1>

          <p className="mt-3 text-gray-400">
            Start creating amazing AI promotional videos.
          </p>
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