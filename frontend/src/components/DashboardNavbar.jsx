import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
function DashboardNavbar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
  try {
    await signOut(auth);

    alert("Logout Successful 👋");

    navigate("/login");
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-4">

      <h1 className="text-2xl font-bold text-white">
        🤖 AI Promo Studio
      </h1>

      <button
  onClick={handleLogout}
  className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
>
  Logout
</button>
    </nav>
  );
}

export default DashboardNavbar;