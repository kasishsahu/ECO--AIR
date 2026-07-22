import { useState } from "react";
import Navbar from "../components/Navbar";
import { predictAQI } from "../services/PredictionServices";
import AQIChart from "../components/AQIChart";

function Prediction() {
    const [formData, setFormData] = useState({
  PM2_5: "",
  PM10: "",
  NO: "",
  NO2: "",
  NOx: "",
  NH3: "",
  CO: "",
  SO2: "",
  O3: ""
});

const [result, setResult] = useState(null);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: Number(e.target.value),
  });
};

const handlePredict = async () => {
  try {
    const data = await predictAQI(formData);
    setResult(data);
  } catch (err) {
  console.error(err);

  if (err.response) {
    console.log(err.response.data);
    alert(JSON.stringify(err.response.data, null, 2));
  } else {
    alert(err.message);
  }
}
};

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

        
        <div className="bg-slate-800 rounded-2xl p-6 mt-8">

  <h2 className="text-2xl font-bold mb-6">
    Enter Air Quality Parameters
  </h2>

  <div className="grid grid-cols-3 gap-4">

    {Object.keys(formData).map((key) => (

      <input
        key={key}
        type="number"
        name={key}
        placeholder={key}
        onChange={handleChange}
        className="bg-slate-700 p-3 rounded-lg outline-none"
      />

    ))}

  </div>

  <button
    onClick={handlePredict}
    className="mt-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
  >
    Predict AQI
  </button>

</div>

{result && (

<div className="bg-slate-800 rounded-2xl p-6 mt-8">

    <h2 className="text-3xl font-bold text-green-400">
        Predicted AQI
    </h2>

    <h1 className="text-6xl font-bold mt-4">
        {result.predicted_aqi}
    </h1>

    <div className="mt-6">

        <h3 className="text-2xl text-yellow-400">
            {result.health_advice.category}
        </h3>

        <p className="text-gray-300 mt-2">
            {result.health_advice.advice}
        </p>

    </div>

</div>

)}

      </div>
    </div>
  );
}

export default Prediction;