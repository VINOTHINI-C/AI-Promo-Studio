function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-4xl font-bold">
        👤 My Profile
      </h1>

      <p className="mt-3 text-gray-400">
        Manage your profile information.
      </p>

      <div className="mt-10 max-w-2xl rounded-2xl bg-slate-900 p-8">

        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-lg font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-purple-500"
          />
        </div>

        <button
          className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-bold text-white transition hover:scale-[1.02]"
        >
          💾 Save Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;