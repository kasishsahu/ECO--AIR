import Navbar from "../components/Navbar";
import AQICard from "../components/AQICard";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        {/* Heading */}
        <h1 className="text-5xl font-bold">
          🗺 Live Pollution Map
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor real-time air quality across different locations.
        </p>

        {/* Search + Legend */}
        <div className="flex justify-between items-center mt-8">

          <input
            type="text"
            placeholder="Search city..."
            className="bg-slate-800 text-white px-5 py-3 rounded-xl w-80 outline-none"
          />

          <div className="flex gap-3">

            <span className="bg-green-500 px-3 py-2 rounded-lg">
              Good
            </span>

            <span className="bg-yellow-400 text-black px-3 py-2 rounded-lg">
              Moderate
            </span>

            <span className="bg-orange-500 px-3 py-2 rounded-lg">
              Poor
            </span>

            <span className="bg-red-500 px-3 py-2 rounded-lg">
              Severe
            </span>

          </div>

        </div>

        {/* Map */}
        <div className="bg-slate-800 rounded-2xl p-5 mt-8">

          <MapContainer
            center={[28.6139, 77.2090]}
            zoom={11}
            style={{
              height: "500px",
              width: "100%",
              borderRadius: "15px",
            }}
          >

            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[28.6139, 77.2090]}>
              <Popup>

                <b>Delhi</b>

                <br />

                AQI : 185

                <br />

                PM2.5 : 92

              </Popup>
            </Marker>

          </MapContainer>

        </div>

        {/* AQI Cards */}

        <div className="grid grid-cols-5 gap-5 mt-8">

          <AQICard
            title="AQI"
            value="185"
            unit="Moderate"
            color="text-yellow-400"
          />

          <AQICard
            title="PM2.5"
            value="92"
            unit="µg/m³"
            color="text-red-400"
          />

          <AQICard
            title="PM10"
            value="120"
            unit="µg/m³"
            color="text-orange-400"
          />

          <AQICard
            title="Temperature"
            value="32°C"
            unit="Current"
            color="text-cyan-400"
          />

          <AQICard
            title="Humidity"
            value="68%"
            unit="Current"
            color="text-green-400"
          />

        </div>

        {/* Monitoring Stations */}

        <div className="bg-slate-800 rounded-2xl p-6 mt-8">

          <h2 className="text-3xl font-bold mb-6">

            📡 Nearby Monitoring Stations

          </h2>

          <table className="w-full">

            <thead className="text-gray-400">

              <tr>

                <th className="text-left pb-4">Station</th>

                <th className="text-left">City</th>

                <th className="text-left">AQI</th>

                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t border-slate-700">

                <td className="py-4">Station 01</td>

                <td>Delhi</td>

                <td>185</td>

                <td className="text-yellow-400 font-semibold">
                  Moderate
                </td>

              </tr>

              <tr className="border-t border-slate-700">

                <td className="py-4">Station 02</td>

                <td>Noida</td>

                <td>170</td>

                <td className="text-green-400 font-semibold">
                  Good
                </td>

              </tr>

              <tr className="border-t border-slate-700">

                <td className="py-4">Station 03</td>

                <td>Gurgaon</td>

                <td>195</td>

                <td className="text-orange-400 font-semibold">
                  Poor
                </td>

              </tr>

              <tr className="border-t border-slate-700">

                <td className="py-4">Station 04</td>

                <td>Faridabad</td>

                <td>210</td>

                <td className="text-red-400 font-semibold">
                  Very Poor
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Map;