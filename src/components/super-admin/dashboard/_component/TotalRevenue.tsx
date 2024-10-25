"use client";

import Image from "next/image";
import revenue from "../../../../../public/Revenue-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const TotalRevenue = () => {
  const [totalBalance, setTotalBalance] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchTotalBalance = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/finance/total-balance`
        );
        setTotalBalance(response.data);
      } catch (error: unknown) {
        console.error("Error fetching total income:", error);
      }
    };

    fetchTotalBalance();
  }, []);

  return (
    <div>
      <div className="bg-[#A1D40DDE] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Revenue</p>
        <div className="flex items-center justify-between">
          <Image src={revenue} alt="" className="w-13" />
          <h4 className="text-[25px] font-bold">
            {totalBalance?.toLocaleString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
