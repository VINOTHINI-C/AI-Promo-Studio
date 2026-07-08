function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">

      <div className="mb-6 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-5 py-2 backdrop-blur-md">
        <p className="text-sm font-medium text-fuchsia-300">
          🚀 Next Generation AI Promotional Video Platform
        </p>
      </div>

      <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
        Create
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          {" "}Amazing AI Videos{" "}
        </span>
        in Minutes
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
        Generate promotional videos with AI Scripts, AI Voice, AI Music,
        AI Subtitles and One-Click Export for businesses, creators and brands.
      </p>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row">

        <button className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40">
          🎬 Generate Video
        </button>

        <button className="rounded-2xl border border-cyan-400 px-8 py-4 font-bold transition duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-black">
          ▶ Watch Demo
        </button>

      </div>

    </section>
  );
}

export default Hero;