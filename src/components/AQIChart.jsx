import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  datasets: [
    {
      label: "AQI",
      data: [140, 165, 180, 170, 195, 210, 185],

      borderColor: "#22c55e",

      backgroundColor: "#22c55e",

      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },

  scales: {
    x: {
      ticks: {
        color: "white",
      },
    },

    y: {
      ticks: {
        color: "white",
      },
    },
  },
};

function AQIChart() {
  return (
    <div className="h-64 mt-4">
      <Line data={data} options={options} />
    </div>
  );
}



export default AQIChart;