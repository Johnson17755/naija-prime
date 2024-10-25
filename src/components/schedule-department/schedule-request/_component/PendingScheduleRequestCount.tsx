"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const PendingScheduleRequestCount = () => {
  const [pendingRequestCount, setPendingRequestCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchPendingRequestCount = async () => {
      try {
        const response = await axios.get<number>(
          `${baseUrl}/api/v1/schedule/schedule-pending`
        );
        setPendingRequestCount(response.data);
      } catch (error) {
        console.error("Error fetching accepted count:", error);
      }
    };

    fetchPendingRequestCount();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <h3 className="text-[#0BF931] font-bold">Yesterday</h3>
        <div className="flex items-center gap-4">
          <h5 className="text-[16px] font-semibold text-[#F90D0D]">Pending</h5>
          <div className="bg-[#F90D0D] py-1 px-5">
            <p className="text-xs font-bold text-white">
              {pendingRequestCount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingScheduleRequestCount;
