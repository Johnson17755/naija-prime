"use client";

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
  TickOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register necessary components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const SalaryBarChart: React.FC = () => {
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
        label: "Total Salary",
        data: [
          4500000, 4680000, 5000000, 4000000, 5500000, 4480000, 4800000,
          4460000, 5498000, 4000000, 4500000, 4300000,
        ],
        backgroundColor: "#0CA424",
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
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.raw !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "decimal",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(context.raw as number);
            }
            return label;
          },
        },
      },
      datalabels: {
        anchor: "end",
        align: "start",
        formatter: function (value) {
          return new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(value);
        },
        color: "#ffffff",
        font: {
          weight: "bold",
        },
        rotation: -90,
        clip: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Salary (USD)",
          font: {
            size: 16,
          },
        },
        ticks: {
          callback: function (value) {
            return new Intl.NumberFormat("en-US", {
              style: "decimal",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(value as number);
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SalaryBarChart;
