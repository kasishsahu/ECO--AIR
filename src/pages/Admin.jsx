import Navbar from "../components/Navbar";

function Admin() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-5xl font-bold">
          ⚙️ Admin Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Manage air quality stations and monitor system status.
        </p>

        <div className="grid grid-cols-4 gap-6 mt-10">

  <div className="bg-slate-800 rounded-2xl p-6">
    <p className="text-gray-400">Monitoring Stations</p>
    <h1 className="text-5xl font-bold text-green-400 mt-3">24</h1>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <p className="text-gray-400">Sensors Online</p>
    <h1 className="text-5xl font-bold text-cyan-400 mt-3">98%</h1>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <p className="text-gray-400">Alerts Today</p>
    <h1 className="text-5xl font-bold text-red-400 mt-3">12</h1>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <p className="text-gray-400">Prediction Accuracy</p>
    <h1 className="text-5xl font-bold text-yellow-400 mt-3">95%</h1>
  </div>

</div>

<div className="bg-slate-800 rounded-2xl p-6 mt-8">

<h2 className="text-2xl font-bold mb-6">
🚨 Recent Alerts
</h2>

<table className="w-full">

<thead className="text-gray-400">
<tr>
<th className="pb-3">Location</th>
<th>AQI</th>
<th>Status</th>
<th>Time</th>
</tr>
</thead>

<tbody>

<tr className="border-t border-slate-700">
<td className="py-4">Delhi</td>
<td>210</td>
<td className="text-red-400">Very Poor</td>
<td>09:30 AM</td>
</tr>

<tr className="border-t border-slate-700">
<td className="py-4">Mumbai</td>
<td>170</td>
<td className="text-yellow-400">Moderate</td>
<td>08:10 AM</td>
</tr>

<tr className="border-t border-slate-700">
<td className="py-4">Bangalore</td>
<td>95</td>
<td className="text-green-400">Good</td>
<td>07:45 AM</td>
</tr>

</tbody>

</table>

</div>

<div className="grid grid-cols-2 gap-8 mt-8">

<div className="bg-slate-800 rounded-2xl p-6">

<h2 className="text-2xl font-bold mb-5">
🛰 System Status
</h2>

<p className="text-green-400 text-lg">
✅ All monitoring stations are online.
</p>

<p className="mt-3 text-gray-300">
Last sync: 5 minutes ago
</p>

</div>

<div className="bg-slate-800 rounded-2xl p-6">

<h2 className="text-2xl font-bold mb-5">
🤖 AI Model
</h2>

<p className="text-green-400">
Model Accuracy: 95%
</p>

<p className="mt-3 text-gray-300">
Last trained: Yesterday
</p>

</div>

</div>

      </div>
    </div>
  );
}

export default Admin;