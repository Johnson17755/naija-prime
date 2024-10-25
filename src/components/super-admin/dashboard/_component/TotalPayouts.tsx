"use client";

import Image from "next/image";
import payouts from "../../../../../public/Payouts-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const TotalPayouts = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  const [payout, setPayout] = useState<number>(0);

  useEffect(() => {
    const fetchTotalPayouts = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/finance/total-payouts`
        );
        setPayout(response.data);
      } catch (error: unknown) {
        console.error("Error fetching total payouts:", error);
      }
    };

    fetchTotalPayouts();
  }, []);

  return (
    <div>
      <div className="bg-[#1CD3BDB0] py-2 px-4">
        <p className="text-white mb-1 font-semibold text-right">Payouts</p>
        <div className="flex items-center justify-between">
          <Image src={payouts} alt="" className="w-12" />
          <h4 className="text-[25px] font-bold">{payout.toLocaleString()}</h4>
        </div>
      </div>
    </div>
  );
};

export default TotalPayouts;
