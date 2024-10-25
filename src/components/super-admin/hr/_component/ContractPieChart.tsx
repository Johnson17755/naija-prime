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

const ContractPieChart: React.FC = () => {
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Temporary/Contract", "Permanent/Fixed"],
    datasets: [
      {
        data: [10, 90],
        backgroundColor: ["#F40808", "#0CA424"],
        hoverBackgroundColor: ["#F40808", "#0CA424"],
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

export default ContractPieChart;
