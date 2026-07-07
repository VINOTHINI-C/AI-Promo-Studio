function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold text-white">
        🎬 AI Promo Studio
      </h1>

      <ul className="flex gap-8 text-gray-300">
        <li className="cursor-pointer hover:text-purple-400">Home</li>
        <li className="cursor-pointer hover:text-purple-400">Features</li>
        <li className="cursor-pointer hover:text-purple-400">About</li>
        <li className="cursor-pointer hover:text-purple-400">Contact</li>
      </ul>

      <button className="rounded-lg bg-purple-600 px-5 py-2 font-semibold hover:bg-purple-700">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;