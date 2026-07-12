import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
  e.preventDefault();

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);

    alert("✅ Password reset link has been sent to your email.");

    setEmail("");
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="mb-6 text-center">

          <div className="mb-4 text-6xl">
            🔐
          </div>

          <h1 className="text-4xl font-bold text-white">
            Forgot Password?
          </h1>

          <p className="mt-3 text-gray-300">
            Don't worry! Enter your email address and we'll send you a password reset link.
          </p>

        </div>

        <form onSubmit={handleReset} className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-violet-500"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-bold text-white transition duration-300 hover:scale-105"
          >
            📩 Send Reset Link
          </button>

        </form>

        <div className="mt-8 text-center">

          <Link
            to="/login"
            className="font-medium text-violet-300 transition hover:text-white"
          >
            ← Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;