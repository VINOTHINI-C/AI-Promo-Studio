function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Videos Generated",
    },
    {
      number: "2K+",
      title: "Happy Clients",
    },
    {
      number: "99%",
      title: "Success Rate",
    },
    {
      number: "24/7",
      title: "AI Support",
    },
  ];

  return (
    <section className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg transition duration-300 hover:scale-105 hover:border-fuchsia-500"
        >
          <h2 className="text-4xl font-extrabold text-fuchsia-400">
            {item.number}
          </h2>

          <p className="mt-2 text-gray-300">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;