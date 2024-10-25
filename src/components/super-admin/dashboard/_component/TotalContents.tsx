"use client";

import Image from "next/image";
import total_Content from "../../../../../public/Total-contents-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const TotalContents = () => {
  const [totalContent, setTotalContent] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchTotalContents = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/superAdmin/total-contents`
        );
        setTotalContent(response.data);
      } catch (error: unknown) {
        console.error("Failed to fetch total number content", error);
      }
    };

    fetchTotalContents();
  }, []);

  return (
    <div>
      <div className="bg-[#1C24E970] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">
          Total Contents
        </p>
        <div className="flex items-center justify-between">
          <Image src={total_Content} alt="" className="w-12" />
          <h4 className="text-[25px] font-bold">
            {totalContent?.toLocaleString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TotalContents;
