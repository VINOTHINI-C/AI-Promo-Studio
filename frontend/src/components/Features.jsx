const features = [
  {
    title: "AI Script",
    description: "Generate promotional scripts automatically."
  },
  {
    title: "AI Voice",
    description: "Convert script into natural voice."
  },
  {
    title: "AI Video",
    description: "Create promotional videos automatically."
  },
  {
    title: "AI Editor",
    description: "Edit videos with AI-powered tools."
  },
  {
    title: "AI Music",
    description: "Add suitable background music."
  },
  {
    title: "AI Subtitle",
    description: "Generate subtitles automatically."
  }
];

function Features() {
  return (
    <section className="px-8 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Our AI Features
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-purple-700 bg-white/5 p-6 backdrop-blur-md transition hover:scale-105 hover:border-cyan-400"
          >
            <h3 className="mb-3 text-2xl font-semibold text-purple-300">
              {feature.title}
            </h3>

            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;