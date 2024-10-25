"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const StatusPieChart: React.FC = () => {
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Student", "Full Time", "Part Time"],
    datasets: [
      {
        data: [5, 80, 15],
        backgroundColor: ["#0CA424", "#F40808", "#3214EC"],
        hoverBackgroundColor: ["#0CA424", "#F40808", "#3214EC"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw as number;
            const total = context.dataset.data.reduce(
              (acc, curr) => acc + (curr as number),
              0
            );
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
      datalabels: {
        display: true,
        color: "black",
        formatter: (value: number) => `${value}%`,
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default StatusPieChart;
