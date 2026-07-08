import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Create Account 🚀
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Join AI Promo Studio and start creating amazing AI videos.
        </p>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white outline-none focus:border-fuchsia-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white outline-none focus:border-fuchsia-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white outline-none focus:border-fuchsia-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white outline-none focus:border-fuchsia-500"
          />

          <button
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-bold text-white transition hover:scale-105"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-fuchsia-400 hover:text-fuchsia-300"
          >
            Sign In
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;