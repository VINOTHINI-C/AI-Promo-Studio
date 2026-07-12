import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function DashboardNavbar() {
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth);

    alert("Logged out successfully 👋");

    navigate("/login");
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

      <Link
        to="/dashboard"
        className="text-3xl font-extrabold text-white"
      >
        🤖 AI Promo Studio
      </Link>

      <div className="flex items-center gap-4">

        <div className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white md:block">
          👋 Welcome, Vinothini
        </div>

        <button
  onClick={handleLogout}
  className="rounded-xl bg-gradient-to-r from-red-500 to-pink-600 px-5 py-2 font-semibold text-white transition duration-300 hover:scale-105"
>
  Logout
</button>

      </div>

    </nav>
  );
}

export default DashboardNavbar;