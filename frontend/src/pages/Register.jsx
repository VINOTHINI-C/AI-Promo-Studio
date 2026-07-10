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
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Create Account 🚀
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Join AI Promo Studio and start creating amazing AI videos.
        </p>

        <form className="space-y-5" onSubmit={handleRegister}>


          <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white outline-none focus:border-fuchsia-500"
/>

         <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white outline-none focus:border-fuchsia-500"
/>

         <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-xl border border-gray-700 bg-transparent px-4 py-3 text-white outline-none focus:border-fuchsia-500"
/>

          <input
  type="password"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
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