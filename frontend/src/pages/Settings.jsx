function Settings() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-4xl font-bold">
        ⚙️ Settings
      </h1>

      <p className="mt-3 text-gray-400">
        Customize your AI Promo Studio experience.
      </p>

      <div className="mt-10 max-w-2xl rounded-2xl bg-slate-900 p-8">

        <div className="mb-6">
          <label className="flex items-center gap-3">
            <input type="checkbox" />
            Enable Notifications
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-3">
            <input type="checkbox" />
            Dark Mode
          </label>
        </div>

        <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-4 font-bold">
          💾 Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;