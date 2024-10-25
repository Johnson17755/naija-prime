"use client";

import Image from "next/image";
import income from "../../../../../public/Income-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const TotalIncome = () => {
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
      <div className="bg-[#F3191975] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Income</p>
        <div className="flex items-center justify-between">
          <Image src={income} alt="" className="w-12" />
          <h4 className="text-[25px] font-bold">
            {totalBalance?.toLocaleString()}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TotalIncome;
