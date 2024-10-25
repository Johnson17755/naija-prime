"use client";

import { fetchConfigurationRequest } from "@/redux/financial-department/payouts-requests/actions";
import { useAppSelector } from "@/redux/hooks";
import { ReviewCardProps } from "@/types";
import Image from "next/image";
import React, { useEffect } from "react";

interface CardProps {
  cardInfo: ReviewCardProps;
}

const ReviewCard = ({ cardInfo }: CardProps) => {
  const totalRequests = useAppSelector(
    (state) => state.payoutRequests.totalRequests
  );

  const totalPayouts = useAppSelector(
    (state) => state.payoutRequests.totalPayouts
  );

  const totalBalance = useAppSelector(
    (state) => state.payoutRequests.totalBalance
  );

  const totalConfigRequests = useAppSelector(
    (state) => state.payoutRequests.totalConfigRequests
  );

  useEffect(() => {
    const fetchRequest = async () => {
      await fetchConfigurationRequest();
    };

    fetchRequest();
    const interval = setInterval(fetchRequest, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`${
          cardInfo.title === "Configuration requests"
            ? "bg-[#486c94] border-[#0d0de3]"
            : cardInfo.title === "Total Revenue"
            ? "bg-[#414b57] border-[#00070e]"
            : cardInfo.title === "Total Payouts"
            ? "bg-[#5e8266] border-[#e0df0f]"
            : "bg-[#066f5c] border-[#010509]"
        } h-[7rem] border-b-4`}
      >
        <div className="p-3 h-full">
          <span
            className={`whitespace-nowrap ${
              cardInfo.title === "Configuration requests"
                ? "text-[0.938rem]"
                : "text-[1.15rem]"
            }  text-[#fff] font-manrope font-bold flex items-center justify-end`}
          >
            {cardInfo.title}
          </span>
          <div className="flex justify-between items-center">
            <div className="">
              <Image
                src={cardInfo.img}
                width={60}
                height={60}
                alt="Review Card Icon"
                className=""
              />
            </div>
            <div className="w-28 border-1 border-black flex items-center justify-center bg-[#fff] text-[#000] text-[1.25rem] font-manrope font-bold whitespace-nowrap">
              {cardInfo.title === "Configuration requests"
                ? totalConfigRequests
                : cardInfo.title === "Total Revenue"
                ? totalBalance
                : cardInfo.title === "Total Payouts"
                ? totalPayouts
                : totalRequests}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
