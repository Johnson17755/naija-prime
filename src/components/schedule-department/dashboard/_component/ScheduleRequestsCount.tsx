"use client";

import Image from "next/image";
import scheduleRequestIcon from "../../../../../public/Schedule-request-icon2.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const ScheduleRequestsCount = () => {
  const [requestScheduleCount, setRequestScheduleCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchRequestScheduleCount = async () => {
      try {
        const response = await axios.get<number>(
          `${baseUrl}/api/v1/schedule/count-requesting-schedule`
        );
        setRequestScheduleCount(response.data);
      } catch (error) {
        console.error("Error fetching accepted count:", error);
      }
    };

    fetchRequestScheduleCount();
  }, []);

  return (
    <div>
      <div className="bg-[#01FF2A54] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">
          Schedule Requests
        </p>
        <div className="flex items-center justify-between">
          <Image src={scheduleRequestIcon} alt="" className="w-14 h-14" />
          <div className="bg-[#FFFFFFC7] border border-black w-[6.5rem] text-center">
            <h4 className="text-[18px] font-bold">
              {requestScheduleCount.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleRequestsCount;
