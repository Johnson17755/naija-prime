"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmployeeBarChart: React.FC = () => {
  const data: ChartData<"bar", number[], string> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Male",
        data: [30, 40, 25, 50, 35, 45, 40, 55, 44, 40, 46, 25],
        backgroundColor: "#0BF931",
      },
      {
        label: "Female",
        data: [50, 50, 35, 50, 25, 55, 30, 45, 46, 50, 54, 55],
        backgroundColor: "#F90D0D",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Months",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Employees",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default EmployeeBarChart;
