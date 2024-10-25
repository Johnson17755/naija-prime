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
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

// Define TypeScript interfaces for API response
interface ViewersByMonthResponse {
  months: string[];
  viewers: number[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const ViewersBarChart: React.FC = () => {
  const [chartData, setChartData] = useState<ViewersByMonthResponse | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/contentReview/viewers-by-month`
        );
        setChartData(response.data);
      } catch (error) {
        console.error("Error fetching data for chart:", error);
      }
    };

    fetchData();
  }, []);

  // Destructure chartData safely
  const months = chartData?.months || [];
  const viewers = chartData?.viewers || [];

  const data = {
    labels: months,
    datasets: [
      {
        label: "2024",
        data: viewers,
        backgroundColor: "#2214CDAB",
        borderColor: "blue",
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          box1: {
            type: "box" as const,
            xMin: "Jan",
            xMax: "Jan",
            yMin: 0,
            yMax: 200000,
            backgroundColor: "#F90D0DA3",
            borderColor: "#F90D0DA3",
            borderWidth: 2,
          },
          box2: {
            type: "box" as const,
            xMin: "Jun",
            xMax: "Jun",
            yMin: 0,
            yMax: 700000,
            backgroundColor: "#0BF931A6",
            borderColor: "#0BF931A6",
            borderWidth: 2,
          },
          label1: {
            type: "label" as const,
            xValue: "Jan",
            yValue: 240000,
            backgroundColor: "#F90D0DA3",
            content: ["200000"],
            color: "white" as const,
            font: {
              size: 6,
            },
          },
          label2: {
            type: "label" as const,
            xValue: 5.5,
            yValue: 400000,
            content: ["2nd Year Term"],
            color: "white" as const,
            font: {
              size: 14,
            },
            rotation: -90,
            textAlign: "center" as const,
            borderRadius: 0,
            padding: 10,
          },
          label3: {
            type: "label" as const,
            xValue: "Jun",
            yValue: 740000,
            backgroundColor: "rgba(0, 255, 0, 0.8)",
            content: ["700000"],
            color: "white" as const,
            font: {
              size: 6,
            },
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#0BF931",
        },
        barThickness: 30,
        maxBarThickness: 40,
      },
      y: {
        grid: {
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Bar data={data} options={options} />
      <div className="flex items-center justify-center gap-[7rem] bg-[#0BF93170] font-manrope text-center py-4 text-white">
        <span className="text-sm font-semibold">
          <span className="inline-block w-[12px] h-[12px] bg-[#F90D0D] rounded-[50%] mr-[5px]"></span>
          2024
        </span>
        <span className="text-sm font-semibold">
          <span className="inline-block w-[12px] h-[12px] bg-[#0BF931A6] rounded-[50%] mr-[5px]"></span>
          2024
        </span>
      </div>
    </div>
  );
};

export default ViewersBarChart;
