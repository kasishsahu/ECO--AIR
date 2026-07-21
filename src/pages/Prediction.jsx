import Navbar from "../components/Navbar";
import AQIChart from "../components/AQIChart";

function Prediction() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Heading */}
        <h1 className="text-5xl font-bold">
          📈 AQI Prediction
        </h1>

        <p className="text-gray-400 mt-2">
          AI-powered Air Quality Forecast
        </p>

        {/* 👇 ADD THE CHART HERE 👇 */}
        <div className="bg-slate-800 rounded-2xl p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-4">
            Next 7 Days Forecast
          </h2>

          <AQIChart />

        </div>

        {/* Prediction Cards */}
        <div className="grid grid-cols-3 gap-6 mt-8">

          {/* Tomorrow */}
          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-gray-400">Tomorrow</h3>
            <h1 className="text-5xl text-yellow-400 font-bold mt-2">
              195
            </h1>
            <p className="text-gray-300 mt-2">Moderate</p>
          </div>

          {/* Day 2 */}
          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-gray-400">Day 2</h3>
            <h1 className="text-5xl text-orange-400 font-bold mt-2">
              210
            </h1>
            <p className="text-gray-300 mt-2">Poor</p>
          </div>

          {/* Day 3 */}
          <div className="bg-slate-800 rounded-2xl p-6">
            <h3 className="text-gray-400">Day 3</h3>
            <h1 className="text-5xl text-green-400 font-bold mt-2">
              170
            </h1>
            <p className="text-gray-300 mt-2">Moderate</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Prediction;