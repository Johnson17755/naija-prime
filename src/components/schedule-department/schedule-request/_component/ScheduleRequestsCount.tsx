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
      <div className="flex justify-between my-2">
        <h2 className="text-[22px] font-semibold text-white">
          SCHEDULE REQUESTS
        </h2>
        <div className="flex items-center gap-4">
          <h5 className="text-[18px] font-semibold text-white">Total</h5>
          <div className="bg-[#0BF931] py-1 px-5">
            <p className="text-xs font-bold">
              {requestScheduleCount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleRequestsCount;
