"use client";

import React from "react";
import Image from "next/image";
import NaijaLogo from "../../../../public/assets/fd-naija-logo.svg";
import { FDHomeHeader } from "@/features/header/financialDepartment/homeHeader";
import { financialReviewData } from "@/constants";
import ReviewCard from "./_component/ReviewCard";
import { BarChart } from "./_component/BarChart";

export const Home = () => {
  return (
    <>
      <div className="relative w-full h-full min-h-screen">
        <FDHomeHeader />
        <div className="absolute inset-0 flex items-center justify-center pt-40">
          <Image
            src={NaijaLogo}
            width={400}
            height={400}
            alt="Naija Prime Logo"
            className="opacity-55"
          />
        </div>
        <div className="px-5 py-5">
          <h2 className="text-[1.275rem] text-[#fff] font-manrope font-bold mb-6">
            Financial Review Dashboard
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {financialReviewData?.map((item) => (
              <ReviewCard key={item.id} cardInfo={item} />
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-[#fff] text-[1.25rem] font-manrope font-bold px-5">
              Revenue Analysis
            </h3>
            <div className="mt-10">
              <div className="relative">
                <BarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
