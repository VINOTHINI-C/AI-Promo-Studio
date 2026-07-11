import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-white/5 px-10 py-5 backdrop-blur-xl">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold text-white"
      >
        🤖 AI Promo Studio
      </Link>

      {/* Navigation */}
      <ul className="hidden gap-8 text-gray-300 md:flex">
        <li>
          <a href="#home" className="transition hover:text-violet-400">
            Home
          </a>
        </li>

        <li>
          <a href="#features" className="transition hover:text-violet-400">
            Features
          </a>
        </li>

        <li>
          <a href="#about" className="transition hover:text-violet-400">
            About
          </a>
        </li>

        <li>
          <a href="#contact" className="transition hover:text-violet-400">
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-3">

        <Link
          to="/login"
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 font-medium text-white transition hover:bg-white/10"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 font-semibold text-white transition hover:scale-105"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;