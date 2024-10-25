"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { FDdoughnutChartFakeData } from "@/constants";

ChartJS.register(Tooltip, Legend, ArcElement, ChartDataLabels);

export const DoughnutChart = ({ companyRation, creatorRation }: any) => {
  const data = {
    labels: ["COMPANY", "CREATOR"],
    datasets: [
      {
        label: "Doughnut Dataset",
        data: [companyRation, creatorRation],
        backgroundColor: ["#008013", "#0f08ef"],
        hoverOffset: 0,
      },
    ],
  };

  // const total = data.datasets[0].data.reduce((acc, value) => acc + value, 0);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "55%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          boxWidth: 10,
          boxHeight: 10,
          color: "#9d9c9d",
          font: {
            family: "Arial",
            weight: "bold" as const,
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.raw as number;
            const total = context.dataset.data.reduce(
              (acc: number, curr: number) => acc + (curr as number),
              0
            );
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
      datalabels: {
        display: true,
        color: "#fff",
        formatter: (value: number) => `${value}%`,
        font: {
          weight: "bold" as const,
          size: 16,
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div className="w-[16rem] h-[17rem]">
      <Doughnut options={options} data={data} />
    </div>
  );
};
