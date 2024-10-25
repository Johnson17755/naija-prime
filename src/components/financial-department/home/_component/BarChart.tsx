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
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

export const BarChart = () => {
  const data = {
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
        label: "2024",
        data: [
          200000, 400000, 460000, 350000, 600000, 700000, 650000, 550000,
          740000, 800000, 800000, 800000,
        ],
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true as boolean,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 16 as number,
            family: "Manrope, sans-serif" as const,
            weight: "bold" as const,
          },
          usePointStyle: true,
          pointStyle: "circle",
          color: "#FFFFFF",
          boxWidth: 20,
          boxHeight: 20,
          boxPadding: 30,
          generateLabels: (chart: any) => {
            const data = chart.data;
            if (data.datasets.length) {
              return data.datasets.map((dataset: any, i: any) => ({
                text: dataset.label,
                fillStyle: "#0af831", // Color of the box
                hidden: !chart.isDatasetVisible(i),
                lineCap: dataset.borderCapStyle,
                lineDash: dataset.borderDash,
                lineDashOffset: dataset.borderDashOffset,
                lineJoin: dataset.borderJoinStyle,
                lineWidth: dataset.borderWidth,
                strokeStyle: dataset.borderColor,
                pointStyle: dataset.pointStyle,
                rotation: 0,
                fontColor: "rgb(255, 255, 255)",
              }));
            }
            return [];
          },
        },
      },
      title: {
        display: false as boolean,
      },
      annotation: {
        annotations: {
          box1: {
            type: "box" as const,
            xMin: "Jan" as const,
            xMax: "Jan" as const,
            yMin: 0 as number,
            yMax: 200000 as number,
            backgroundColor: "rgba(255, 99, 132, 0.25)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
          },
          box2: {
            type: "box" as const,
            xMin: "Jun" as const,
            xMax: "Jun" as const,
            yMin: 0 as number,
            yMax: 700000 as number,
            backgroundColor: "rgba(0, 255, 0, 0.25)",
            borderColor: "rgba(0, 255, 0, 1)",
            borderWidth: 2 as number,
          },
          label1: {
            type: "label" as const,
            xValue: "Jan" as const,
            yValue: 240000 as number,
            backgroundColor: "rgba(255, 99, 132, 1)",
            content: ["200000"],
            color: "white" as const,
            font: {
              size: 8 as number,
            },
          },
          label2: {
            type: "label" as const,
            // xValue: "Jun" as const,
            xValue: 5.5,
            yValue: 400000 as number,
            // backgroundColor: "rgba(0, 0, 0, 0.8)",
            content: ["2nd Year Term"],
            color: "white" as const,
            font: {
              size: 16 as number,
            },
            rotation: -90,
            textAlign: "center" as const,
            borderRadius: 0,
            padding: 10,
          },
          label3: {
            type: "label" as const,
            xValue: "Jun" as const,
            yValue: 740000 as number,
            backgroundColor: "rgba(0, 255, 0, 0.8)",
            content: ["700000"],
            color: "black" as const,
            font: {
              size: 8 as number,
            },
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false as boolean,
        },
        ticks: {
          color: "#0af831" as const,
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "#FFFFFF" as const,
          stepSize: 100000 as number,
          beginAtZero: true as boolean,
        },
      },
    },
  };

  return (
    <>
      <div className="bg-[#068044] max-w-[80%] mx-auto h-[20rem]">
        <Bar data={data} options={options} className="p-3" />
      </div>
    </>
  );
};
