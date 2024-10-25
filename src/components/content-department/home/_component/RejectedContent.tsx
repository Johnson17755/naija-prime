"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import rejectedIcon from "../../../../../public/Rejected-icon.svg";

const RejectedContent = () => {
  const [rejectedCount, setRejectedCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchRejectedCount = async () => {
      try {
        const response = await axios.get<number>(
          `${baseUrl}/api/v1/contentReview/count/rejected`
        );
        setRejectedCount(response.data); // Directly using the number from response
      } catch (error) {
        console.error("Error fetching rejected count:", error);
      }
    };

    fetchRejectedCount();
  }, []);

  return (
    <div>
      <div className="bg-[#F20D0D7D] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Rejected</p>
        <div className="flex items-center justify-between">
          <Image src={rejectedIcon} alt="Rejected Icon" className="w-14 h-14" />
          <div className="bg-[#FFFFFFC7] border border-black w-[6.5rem] text-center">
            <h4 className="text-[18px] font-bold">
              {rejectedCount.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedContent;
