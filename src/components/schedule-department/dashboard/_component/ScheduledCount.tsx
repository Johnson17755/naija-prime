"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import scheduleCalendarIcon from "../../../../../public/Schedule-calendar-icon.svg";

const ScheduledCount = () => {
  const [scheduledCount, setScheduledCount] = useState(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchScheduledCount = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/schedule/countScheduledMovies`
        );
        console.log(response.data);
        setScheduledCount(response.data);
      } catch (error) {
        console.error("Error fetching the scheduled movies count:", error);
      }
    };

    fetchScheduledCount();
  }, []);

  return (
    <div>
      <div className="bg-[#3777B1] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Scheduled</p>
        <div className="flex items-center justify-between">
          <Image
            src={scheduleCalendarIcon}
            alt="Schedule Calendar Icon"
            className="w-14 h-14"
          />
          <div className="bg-[#FFFFFFC7] border border-black w-[6.5rem] h-7 text-center">
            <h4 className="text-[18px] font-bold">
              {scheduledCount.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduledCount;
