function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl"></div>

      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

    </div>
  );
}

export default Background;