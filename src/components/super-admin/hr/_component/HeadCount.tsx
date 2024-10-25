"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const HeadCountPieChart: React.FC = () => {
  const data = {
    labels: ["M", "F"],
    datasets: [
      {
        data: [28, 100], // Assuming 28 males and 100 females
        backgroundColor: ["#0BF931", "#F20D0D"],
        hoverBackgroundColor: ["#00CC00", "#CC0000"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{ position: "relative", width: "230px", height: "230px" }}
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        <div className="text-sm">Headcount</div>
        <div className="text-xl font-bold" style={{ fontWeight: "bold" }}>
          128
        </div>
        <div className="text-sm text-[#0CA424]">+ 55.0%</div>
        <div className="text-[10px] text-black">vs previous month</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#00FF00",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          <div className="text-sm">M</div>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#FF0000",
              borderRadius: "50%",
              marginLeft: "10px",
              marginRight: "5px",
            }}
          ></div>
          <div className="text-sm">F</div>
        </div>
      </div>
    </div>
  );
};

export default HeadCountPieChart;
