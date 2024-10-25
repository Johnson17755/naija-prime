"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StaffPieChart: React.FC = () => {
  const data = {
    labels: ["Attendance", "Absent", "Late"],
    datasets: [
      {
        data: [75, 24, 15],
        backgroundColor: ["#0C0101", "#1327D8", "#0BF931"],
        hoverBackgroundColor: ["#333333", "#3333FF", "#33FF33"],
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
    <div className="relative">
      <div className="flex justify-center gap-8">
        <div className="w-[6.9rem] relative">
          <Doughnut data={data} options={options} />
          <div
            className="absolute top-[50%] left-[50%] text-[#000000]"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="font-bold text-lg">Total</div>
            <div className="font-bold text-md">%56</div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col justify-center">
          <div className="flex items-center mb-[10px]">
            <div className="w-[13px] h-[13px] bg-[#0C0101] rounded-[50%] mr-[10px]"></div>
            <div className="text-sm font-bold">
              Attendance <span className="text-xs font-light ml-1">%75</span>
            </div>
          </div>
          <div className="flex items-center mb-[10px]">
            <div className="w-[13px] h-[13px] bg-[#1327D8] rounded-[50%] mr-[10px]"></div>
            <div className="text-sm font-bold">
              Absent <span className="text-xs font-light ml-1">%24</span>
            </div>
          </div>
          <div className="flex items-center mb-[10px]">
            <div className="w-[13px] h-[13px] bg-[#0BF931] rounded-[50%] mr-[10px]"></div>
            <div className="text-sm font-bold">
              Late <span className="text-xs font-light ml-1">%15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPieChart;
