import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">

      <Link
        to="/"
        className="text-2xl font-bold text-white"
      >
        🎬 AI Promo Studio
      </Link>

      <ul className="flex gap-8 text-gray-300">
        <li>
          <a href="#home" className="hover:text-purple-400">
            Home
          </a>
        </li>

        <li>
          <a href="#features" className="hover:text-purple-400">
            Features
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-purple-400">
            About
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-purple-400">
            Contact
          </a>
        </li>
      </ul>

      <Link
        to="/login"
        className="rounded-lg bg-purple-600 px-5 py-2 font-semibold text-white transition hover:bg-purple-700"
      >
        Get Started
      </Link>

    </nav>
  );
}

export default Navbar;