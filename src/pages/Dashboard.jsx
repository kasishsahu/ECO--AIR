import Navbar from "../components/Navbar";
import AQICard from "../components/AQICard";
import AQIChart from "../components/AQIChart";
import PollutionMap from "../components/PollutionMap";
import { MdAir } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { useEffect, useState } from "react";
import { getAQIData } from "../services/aqiService";



function Dashboard() {
    const hour = new Date().getHours();

    const [aqiData, setAQIData] = useState([]);

  let greeting = "Good Morning";

  if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  if (hour >= 17) greeting = "Good Evening";

  useEffect(() => {
    const fetchData = async () => {
        const data = await getAQIData();
        setAQIData(data);
    };

    fetchData();
}, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto p-8">

        {/* Welcome Section */}
        <div className="mb-10">
         <h1 className="text-5xl font-bold">
   {greeting}
  <span className="text-green-400"> </span>
</h1>

          <p className="mt-3 text-lg text-gray-400">
            Real-time Urban Air Quality Intelligence Dashboard
          </p>
        </div>

        {/* AQI Cards */}
        <div className="flex flex-wrap gap-6">

          <AQICard
  title="Air Quality Index"
  value={aqiData[0]?.aqi}
  unit="Moderate"
  color="text-yellow-400"
  icon={<MdAir />}
/>

<AQICard
  title="PM2.5"
  value={aqiData[0]?.pm25}
  unit="µg/m³"
  color="text-red-400"
  icon={<FaWind />}
/>

<AQICard
  title="PM10"
  value={aqiData[0]?.pm10}
  unit="µg/m³"
  color="text-orange-400"
  icon={<FaWind />}
/>

<AQICard
  title="Temperature"
  value={aqiData[0]?.temperature}
  unit="Current"
  color="text-cyan-400"
  icon={<FaTemperatureHigh />}
/>

<AQICard
  title="Humidity"
  value={aqiData[0]?.humidity}
  unit="Current"
  color="text-green-400"
  icon={<WiHumidity />}
/>

        </div>

        {/* 👇 ADD THE NEW SECTION HERE 👇 */}

        <div className="grid grid-cols-2 gap-8 mt-10">

          {/* AQI Trend */}
          <div className="bg-slate-800 rounded-2xl p-6 h-96">
            <h2 className="text-2xl font-semibold mb-4">
              📈 AQI Trend
            </h2>
            <p className="text-gray-400 mb-6">
    Last 7 Days Air Quality
</p>
<AQIChart />
          </div>

          {/* AI Insights */}
          <div className="bg-slate-800 rounded-2xl p-6 h-96">
            <h2 className="text-2xl font-semibold mb-4">
              🤖 AI Insights
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>📌 AQI is expected to increase after 5 PM.</p>

              <p>🚗 Traffic emissions are the major contributor.</p>

              <p>😷 Sensitive groups should avoid outdoor activities.</p>

              <p className="text-green-400 font-semibold">
                Recommendation: Wear an N95 mask today.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10 bg-slate-800 rounded-2xl p-6">

  <h2 className="text-2xl font-bold mb-4">
    🗺️ Live Pollution Map
  </h2>

  <PollutionMap />

</div>

      </div>
    </div>
  );
}

export default Dashboard;