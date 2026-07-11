import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-6">

      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:grid-cols-2">

        <div className="hidden flex-col justify-center bg-gradient-to-br from-violet-700 to-fuchsia-700 p-12 md:flex">

          <h1 className="text-5xl font-extrabold text-white">
            🤖 AI Promo Studio
          </h1>

          <p className="mt-6 text-lg text-white/90">
            Create stunning AI promotional videos in minutes.
          </p>

          <div className="mt-12 rounded-2xl bg-white/10 p-6">
            <h3 className="text-xl font-bold text-white">
              ✨ Features
            </h3>

            <ul className="mt-4 space-y-3 text-white/90">
              <li>🎬 AI Video Script Generation</li>
              <li>📝 Marketing Content</li>
              <li>📱 Social Media Captions</li>
              <li>🚀 Fast AI Workflow</li>
            </ul>
          </div>

        </div>

        <div className="p-10">

          <h2 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-gray-300">
            Login to continue your AI journey.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-bold text-white transition hover:scale-105"
            >
              {loading ? "Logging in..." : "🚀 Login"}
            </button>

          </form>

          <div className="mt-6 flex justify-between text-sm">

            <Link
              to="/forgot-password"
              className="text-violet-300 hover:text-white"
            >
              Forgot Password?
            </Link>

            <Link
              to="/register"
              className="text-violet-300 hover:text-white"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;