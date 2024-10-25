"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import totalUsers from "../../../../../public/Total-users-icon.svg";
import revenue from "../../../../../public/Revenue-icon.svg";
import income from "../../../../../public/Income-icon.svg";
import payouts from "../../../../../public/Payouts-icon.svg";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const Summary: React.FC = () => {
  const [totalUsersCount, setTotalUsersCount] = useState<number>(0);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [totalPayouts, setTotalPayouts] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const [balanceResponse, payoutsResponse, totalUsersResponse] =
          await Promise.all([
            axios.get(`${baseUrl}/api/v1/finance/total-balance`),
            axios.get(`${baseUrl}/api/v1/finance/total-payouts`),
            axios.get(`${baseUrl}/api/v1/superAdmin/total-users`),
          ]);

        setTotalBalance(balanceResponse.data);
        setTotalPayouts(payoutsResponse.data);
        setTotalUsersCount(totalUsersResponse.data);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <div className="flex flex-col gap-1 px-3 py-2 bg-[#EDEDED]">
      <h4 className="text-[16px] text-[#999999] font-semibold">Summary</h4>
      <div className="flex justify-between items-center bg-[#0BF93142] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={totalUsers} alt="Active Users" className="w-5" />
          </div>
          <h5 className="font-semibold text-sm">Active users</h5>
        </div>
        <div className="bg-[#0FF04EA3] p-1">
          <p className="font-semibold text-xs">
            {totalUsersCount?.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#A1D40D8A] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={revenue} alt="Total Revenue" className="w-5" />
          </div>
          <h5 className="font-semibold text-sm">Total Revenue</h5>
        </div>
        <div className="bg-[#A1D40DDE] p-1">
          <p className="font-semibold text-xs">
            {totalBalance?.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#E81A1A47] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={income} alt="Total Income" className="w-5" />
          </div>
          <h5 className="font-semibold text-sm">Total Income</h5>
        </div>
        <div className="bg-[#930F0F80] p-1">
          <p className="font-semibold text-xs">
            {totalBalance?.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#6386A64F] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={payouts} alt="Total Payouts" className="w-5" />
          </div>
          <h5 className="font-semibold text-sm">Total Payouts</h5>
        </div>
        <div className="bg-[#6386A6C2] p-1">
          <p className="font-semibold text-xs">
            {totalPayouts?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
