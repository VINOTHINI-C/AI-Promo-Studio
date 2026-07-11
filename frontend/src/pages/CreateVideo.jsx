function CreateVideo() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-4xl font-bold">
        🎬 Create AI Video
      </h1>

      <p className="mt-3 text-gray-400">
        Describe the video you want to generate.
      </p>
      <div className="mt-10 max-w-3xl rounded-2xl bg-slate-900 p-8">

  <label className="mb-2 block text-lg font-semibold">
    Video Prompt
  </label>

  <textarea
    rows="5"
    placeholder="Example: Create a promotional video for a coffee shop with cinematic style..."
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
  ></textarea>
  <div className="mt-6">

  <label className="mb-2 block text-lg font-semibold">
    Video Style
  </label>

  <select
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
  >
    <option>Cinematic</option>
    <option>Social Media</option>
    <option>Business</option>
    <option>Product Advertisement</option>
    <option>Modern</option>
    <option>Cartoon</option>
  </select>

</div>
<div className="mt-6">

  <label className="mb-2 block text-lg font-semibold">
    Video Duration
  </label>

  <select
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
  >
    <option>15 Seconds</option>
    <option>30 Seconds</option>
    <option>45 Seconds</option>
    <option>60 Seconds</option>
    <option>3 Minutes</option>
    <option>5 Minutes</option>
  </select>

</div>
<div className="mt-6">

  <label className="mb-2 block text-lg font-semibold">
    AI Voice
  </label>

  <select
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
  >
    <option>Female Professional</option>
    <option>Male Professional</option>
    <option>Friendly</option>
    <option>Energetic</option>
  </select>

</div>
<div className="mt-8">

  <button
    className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.02]"
  >
    🚀 Generate AI Video
  </button>

</div>

</div>

    </div>
  );
}

export default CreateVideo;