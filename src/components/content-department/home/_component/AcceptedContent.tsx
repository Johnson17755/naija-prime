"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import acceptedIcon from "../../../../../public/Accepted-icon.svg";

const AcceptedContent = () => {
  const [acceptedCount, setAcceptedCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchAcceptedCount = async () => {
      try {
        const response = await axios.get<number>(
          `${baseUrl}/api/v1/contentReview/count/accepted`
        );
        setAcceptedCount(response.data); // Directly using the number from response
      } catch (error) {
        console.error("Error fetching accepted count:", error);
      }
    };

    fetchAcceptedCount();
  }, []);

  return (
    <div>
      <div className="bg-[#11EE426B] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Accepted</p>
        <div className="flex items-center justify-between">
          <Image src={acceptedIcon} alt="Accepted Icon" className="w-14 h-14" />
          <div className="bg-[#FFFFFFC7] border border-black w-[6.5rem] h-7 text-center">
            <h4 className="text-[18px] font-bold">
              {acceptedCount.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedContent;
