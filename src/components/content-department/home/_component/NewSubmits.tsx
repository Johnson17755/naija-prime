"use client";

import Image from "next/image";
import newSubmitIcon from "../../../../../public/NewSubmits-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const NewSubmits = () => {
  const [newSubmitsCount, setNewSubmitsCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchNewSubmitCount = async () => {
      try {
        const response = await axios.get<number>(
          `${baseUrl}/api/v1/contentReview/count-new-submit`
        );
        setNewSubmitsCount(response.data); // Directly using the number from response
        console.log(response)
      } catch (error) {
        console.error("Error fetching new submits count:", error);
      }
    };

    fetchNewSubmitCount();
  }, []);

  return (
    <div>
      <div className="bg-[#01FF2A54] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">New Submits</p>
        <div className="flex items-center justify-between">
          <Image src={newSubmitIcon} alt="" className="w-14 h-14" />
          <div className="bg-[#FFFFFFC7] border border-black w-[6.5rem] text-center">
            <h4 className="text-[18px] font-bold">
              {newSubmitsCount.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSubmits;
