import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import VideoPreview from "../components/VideoPreview";
import Background from "../components/Background";

function Home() {
  return (
    <>
      <Background />

      <div className="min-h-screen bg-transparent text-white">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <VideoPreview />
      </div>
    </>
  );
}

export default Home;