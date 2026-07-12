import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account Created Successfully 🎉");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-6">

      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden flex-col justify-center bg-gradient-to-br from-purple-700 to-pink-600 p-12 md:flex">

          <h1 className="text-5xl font-extrabold text-white">
            🚀 AI Promo Studio
          </h1>

          <p className="mt-6 text-lg text-white/90">
            Join thousands of creators building stunning AI promotional videos.
          </p>

          <div className="mt-12 rounded-2xl bg-white/10 p-6">

            <h3 className="text-2xl font-bold text-white">
              Why Join?
            </h3>

            <ul className="mt-5 space-y-4 text-white/90">
              <li>🎬 AI Video Generation</li>
              <li>🤖 Gemini AI Integration</li>
              <li>📁 Save Unlimited Projects</li>
              <li>⚡ Fast & Modern Dashboard</li>
            </ul>

          </div>

        </div>

        {/* Right Side */}
        <div className="p-10">

          <h2 className="text-4xl font-bold text-white">
            Create Account 🚀
          </h2>

          <p className="mt-2 text-gray-300">
            Join AI Promo Studio and start your AI journey.
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-bold text-white transition duration-300 hover:scale-105"
            >
              🚀 Create Account
            </button>

          </form>

          <p className="mt-8 text-center text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-violet-400 hover:text-white"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;