import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful 🎉");

    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Sign in to continue to AI Promo Studio
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>

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

          <button
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-bold text-white transition hover:scale-105"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;