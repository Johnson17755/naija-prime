"use client";

import Image from "next/image";
import totalViewIcon from "../../../../../public/TotalViews-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const TotalViews = () => {
  const [totalViewsCount, setTotalViewsCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchTotalViewsCount = async () => {
      try {
        const response = await axios.get<number>(
          `${baseUrl}/api/contentReview/countTotalViewers`
        );
        setTotalViewsCount(response.data); // Directly using the number from response
      } catch (error) {
        console.error("Error fetching total views count:", error);
      }
    };

    fetchTotalViewsCount();
  }, []);

  return (
    <div>
      <div className="bg-[#999999B2] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Total Views</p>
        <div className="flex items-center justify-between">
          <Image src={totalViewIcon} alt="" className="w-14 h-14" />
          <div className="bg-[#FFFFFFC7] border border-black w-[6.5rem] text-center">
            <h4 className="text-[18px] font-bold">
              {totalViewsCount.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalViews;
