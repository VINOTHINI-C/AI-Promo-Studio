import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950">
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
        </main>
      </div>
    </div>
  );
}

export default Dashboard;