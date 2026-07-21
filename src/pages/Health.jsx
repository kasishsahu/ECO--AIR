import Navbar from "../components/Navbar";

function Health() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Heading */}
        <h1 className="text-5xl font-bold">
          ❤️ Health Advisory
        </h1>

        <p className="text-gray-400 mt-2">
          Personalized recommendations based on current air quality.
        </p>

        {/* Current AQI */}
        <div className="mt-8 bg-slate-800 rounded-2xl p-6">
          <h2 className="text-xl text-gray-400">
            Current AQI
          </h2>

          <div className="flex items-center gap-6 mt-4">
            <h1 className="text-6xl font-bold text-yellow-400">
              185
            </h1>

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
              Moderate
            </span>
          </div>
        </div>

        {/* 👇 ADD THE RECOMMENDATIONS GRID HERE 👇 */}
        <div className="grid grid-cols-2 gap-8 mt-8">

          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              ✅ Recommendations
            </h2>

            <div className="space-y-4 text-lg">
              <p>😷 Wear an N95 mask outdoors.</p>
              <p>🚶 Avoid outdoor exercise.</p>
              <p>🏠 Keep windows closed.</p>
              <p>🌿 Use an indoor air purifier.</p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              ⚠️ Sensitive Groups
            </h2>

            <div className="space-y-4 text-lg">
              <p>👶 Children</p>
              <p>👵 Elderly</p>
              <p>🤧 Asthma Patients</p>
              <p>🤰 Pregnant Women</p>
            </div>
          </div>

        </div>

        {/* Health Risk Card (add this next) */}

      </div>
    </div>
  );
}

export default Health;