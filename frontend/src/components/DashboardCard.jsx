import { Link } from "react-router-dom";

function DashboardCard({ title, description, icon, to }) {
  return (
    <Link
      to={to}
      className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:scale-105 hover:border-purple-500"
    >
      <div className="text-4xl">{icon}</div>

      <h2 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 text-gray-400">
        {description}
      </p>
    </Link>
  );
}

export default DashboardCard;