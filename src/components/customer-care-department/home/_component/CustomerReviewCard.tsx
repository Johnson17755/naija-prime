import { CCReviewCardProps } from "@/types";
import Image from "next/image";
import React from "react";

interface CardProps {
  cardInfo: CCReviewCardProps;
}

export const CustomerReviewCard = ({ cardInfo }: CardProps) => {
  return (
    <>
      <div
        className={`${
          cardInfo.title === "Messages"
            ? "bg-[#486c94] border-[#0d0de3]"
            : cardInfo.title === "Response"
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
              {cardInfo.amount}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
