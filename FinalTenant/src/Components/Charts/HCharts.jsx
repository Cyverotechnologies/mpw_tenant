import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Initial data for the chart
const initialData = {
  labels: ["Food", "Utility", "Plumbing"], // Y-axis labels for horizontal bars
  datasets: [
    {
      label: "",
      data: [3.2, 2.4, 4.5], // Data points for "In Progress"
      backgroundColor: "#ed7d2d", // Bar color
    },
  ],
};

// Example data for "Resolved" state
const resolvedData = {
  labels: ["Food", "Utility", "Plumbing"], // Y-axis labels for horizontal bars
  datasets: [
    {
      label: "",
      data: [5.5, 1, 5.8], // Data points for "Resolved"
      backgroundColor: "#04b7cf", // Different bar color for "Resolved"
    },
  ],
};

// Options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top", // Legend position
      labels: {
        font: {
          size: 14, // Font size for legend labels
          color: "#333", // Font color for legend labels
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.dataset.label + ": " + context.raw; // Custom tooltip label
        },
      },
    },
  },
  indexAxis: "y", // Set to 'y' to display horizontal bars
  scales: {
    x: {
      grid: {
        color: "transparent", // Hide vertical gridlines
      },
      ticks: {
        stepSize: 1, // Custom tick spacing for X-axis
      },
    },
    y: {
      grid: {
        color: "transparent", // Hide horizontal gridlines
      },
      ticks: {
        stepSize: 1, // Custom tick spacing for Y-axis
      },
    },
  },
};

// BarChart component
export function HCharts() {
  // State to manage the current filter
  const [filter, setFilter] = useState("resolved");

  // Determine the data based on the selected filter
  const chartData = filter === "resolved" ? resolvedData : initialData;

  return (
    <div className="w-full flex flex-row-reverse items-start mt-7">
      <div className="flex flex-col gap-3 lg:mt-10">
        <button
          onClick={() => setFilter("in-progress")}
          className={`font-medium self-start px-3 sm:px-4 py-1 text-nowrap text-sm ${
            filter === "in-progress"
              ? "bg-[#ed7d2d] text-white"
              : "bg-[#e8721e] text-white"
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => setFilter("resolved")}
          className={`font-medium self-start px-3 sm:px-4 py-1 text-nowrap text-sm ${
            filter === "resolved"
              ? "bg-mixblue text-white"
              : "bg-[#0297ab] text-white"
          }`}
        >
          Resolved
        </button>
      </div>

      <div className="w-full min-h-[200px] relative">
        <Bar data={chartData} options={options} />
        <div className="absolute top-[0%] left-0  w-[80%] h-7 bg-white"></div>
      </div>
    </div>
  );
}
