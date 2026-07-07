function VideoPreview() {
  return (
    <section className="px-8 py-20 text-white">
      <h2 className="mb-4 text-center text-4xl font-bold">
        Video Preview
      </h2>

      <p className="mb-10 text-center text-gray-300">
        Preview your AI-generated promotional video before downloading.
      </p>

      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-3xl border border-purple-500/30 bg-white/5 p-8 backdrop-blur-md">

        <div className="flex h-72 w-full items-center justify-center rounded-2xl border-2 border-dashed border-gray-500 bg-slate-900">
          <span className="text-xl text-gray-400">
            🎥 Video Preview Coming Soon
          </span>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700">
            ▶ Play Demo
          </button>

          <button className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold hover:bg-cyan-500 hover:text-black">
            ⬇ Download
          </button>
        </div>

      </div>
    </section>
  );
}

export default VideoPreview;