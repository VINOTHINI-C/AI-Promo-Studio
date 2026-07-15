import { useState } from "react";
import { generateScript } from "../services/gemini";
function CreateVideo() {
  const [prompt, setPrompt] = useState("");
const [response, setResponse] = useState("");
const [loading, setLoading] = useState(false);
const [companyName, setCompanyName] = useState("");
const [businessCategory, setBusinessCategory] = useState("");
const [logo, setLogo] = useState(null);
const [photos, setPhotos] = useState([]);

const handleGenerate = async () => {
  if (!prompt.trim()) {
    alert("Please enter a prompt.");
    return;
  }

  setLoading(true);
  setResponse("");

  try {
    const result = await generateScript(prompt);
    setResponse(result);
  } catch (error) {
    console.error(error);
    setResponse("Something went wrong.");
  }

  setLoading(false);
};
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-4xl font-bold">
        🎬 Create AI Video
      </h1>

      <p className="mt-3 text-gray-400">
        Describe the video you want to generate.
      </p>
      <div className="mt-10 max-w-3xl rounded-2xl bg-slate-900 p-8">
        <div className="mb-6">
  <label className="mb-2 block text-lg font-semibold">
    Company Name
  </label>
  

  <input
    type="text"
    value={companyName}
    onChange={(e) => setCompanyName(e.target.value)}
    placeholder="Enter Company Name"
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
  />
</div>
<div className="mb-6">
  <label className="mb-2 block text-lg font-semibold">
    Business Category
  </label>

  <select
    value={businessCategory}
    onChange={(e) => setBusinessCategory(e.target.value)}
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
  >
    <option value="">Select Category</option>
    <option>Restaurant</option>
    <option>Cafe</option>
    <option>Bakery</option>
    <option>Clothing Store</option>
    <option>Jewellery</option>
    <option>Electronics</option>
    <option>Super Market</option>
    <option>Hospital</option>
    <option>School</option>
    <option>College</option>
    <option>Hotel</option>
    <option>Gym</option>
    <option>Beauty Salon</option>
    <option>Real Estate</option>
    <option>Other</option>
  </select>
</div>
<div className="mb-6">
  <label className="mb-2 block text-lg font-semibold">
    Company Logo
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setLogo(e.target.files[0])}
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-purple-600 file:px-4 file:py-2 file:text-white hover:file:bg-purple-700"
  />

  {logo && (
    <div className="mt-4">
      <p className="mb-2 text-green-400">
        ✅ {logo.name}
      </p>

      <img
        src={URL.createObjectURL(logo)}
        alt="Company Logo"
        className="h-32 w-32 rounded-xl border border-slate-700 object-cover"
      />
    </div>
  )}
</div>
<div className="mb-6">
  <label className="mb-2 block text-lg font-semibold">
    Product Photos (Max 15)
  </label>

  <input
    type="file"
    accept="image/*"
    multiple
    onChange={(e) => {
      const files = Array.from(e.target.files).slice(0, 15);
      setPhotos(files);
    }}
    className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-700"
  />
</div>
{photos.length > 0 && (
  <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    {photos.map((photo, index) => (
      <div
        key={index}
        className="rounded-xl border border-slate-700 bg-slate-800 p-2"
      >
        <img
          src={URL.createObjectURL(photo)}
          alt={`Product ${index + 1}`}
          className="h-32 w-full rounded-lg object-cover"
        />

        <p className="mt-2 truncate text-center text-sm text-gray-300">
          {photo.name}
        </p>
      </div>
    ))}
  </div>
)}

  <label className="mb-2 block text-lg font-semibold">
    Video Prompt
  </label>

  <textarea
    rows="5"
    value={prompt}
onChange={(e) => setPrompt(e.target.value)}
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
  onClick={handleGenerate}
disabled={loading}
    className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 text-lg font-bold text-white transition duration-300 hover:scale-[1.02]"
  >
    {loading ? "Generating..." : "🚀 Generate AI Video"}
    
  </button>

</div>
{response && (
  <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
    <h2 className="mb-4 text-2xl font-bold text-green-400">
      🤖 AI Generated Script
    </h2>

    <pre className="whitespace-pre-wrap text-gray-200">
      {response}
    </pre>
  </div>
)}


</div>

    </div>
  );
}

export default CreateVideo;