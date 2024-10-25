"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const PendingCount = () => {
  const [pendingCount, setPendingCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchPendingCount = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/contentReview/count/pending`
        );
        setPendingCount(response.data);
      } catch (error) {
        console.error("Error fetching pending count:", error);
      }
    };

    fetchPendingCount();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <h3 className="text-[#0BF931] font-bold">Yesterday</h3>
        <div className="flex items-center gap-4">
          <h5 className="text-[16px] font-semibold text-[#F90D0D]">Pending</h5>
          <div className="bg-[#F90D0D] py-1 px-5">
            <p className="text-xs font-bold text-white">
              {pendingCount.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingCount;
