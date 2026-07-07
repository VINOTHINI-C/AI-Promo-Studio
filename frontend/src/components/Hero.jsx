function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center">

      <p className="mb-4 rounded-full border border-purple-500 px-4 py-2 text-sm text-purple-300">
        🚀 AI Powered Promotional Video Platform
      </p>

      <h1 className="max-w-4xl text-6xl font-extrabold leading-tight">
        Create Stunning <span className="text-purple-400">AI Promotional Videos</span> in Minutes
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        Generate, Edit, Add AI Voice, AI Music, AI Subtitles and Export Professional Videos for Businesses, Shops and Brands.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-xl bg-purple-600 px-7 py-3 font-semibold hover:bg-purple-700">
          🎬 Generate Video
        </button>

        <button className="rounded-xl border border-cyan-400 px-7 py-3 font-semibold hover:bg-cyan-500 hover:text-black">
          ▶ Watch Demo
        </button>
      </div>

    </section>
  );
}

export default Hero;