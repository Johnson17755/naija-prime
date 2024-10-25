import Image from "next/image";
import React from "react";
import arrow from "../../../../../public/Arrow 1.svg";
import StaffPieChart from "./StaffPieChart";

const StaffAttendance = () => {
  return (
    <div className="flex flex-col gap-1 px-3 py-2 bg-[#EDEDED]">
      <div className="flex justify-between">
        <h4 className="text-[16px] text-[#999999] font-semibold">
          Staff Attendance
        </h4>
        <select
          className="text-xs selectDay"
          id="date-select"
          name="date-select"
        >
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="yesterday">Yesterday</option>
        </select>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1 py-1 px-2 rounded-full bg-[#11EE4254]">
          <Image src={arrow} alt="" />
          <p className="text-xs text-[#0E4D2B59] font-semibold">34.99%</p>
        </div>
        <p className="text-xs">vs. 3 weeks, 2024 Attendance increased</p>
      </div>
      <div>
        <StaffPieChart />
      </div>
    </div>
  );
};

export default StaffAttendance;
