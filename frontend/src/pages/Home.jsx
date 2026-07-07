import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import VideoPreview from "../components/VideoPreview";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <VideoPreview />
       </div>
  );
}

export default Home;