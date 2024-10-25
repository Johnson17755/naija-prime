"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/navigation";
import { Application } from "@/types";

interface RejectedTabContentProps {
  applications: Application[];
}

export const RejectedTabContent = ({
  applications = [],
}: RejectedTabContentProps) => {
  const [currentDate, setCurrentDate] = useState("");
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const router = useRouter();

  const activeRowStyle = (rowItem: number) =>
    rowItem === activeRow ? "bg-[#01FF2A42]" : "bg-[#fff]";

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      setCurrentDate(`${day}.${month}.${year}`);
    };

    updateDate();
  }, []);

  const formatCreatedOn = (createdOn: any): any => {
    const now = moment();
    const duration = moment.duration(now.diff(createdOn));
    if (duration.asSeconds() < 10) {
      return "just now";
    } else {
      return moment(createdOn).fromNow();
    }
  };

  return (
    <>
      {applications?.map((content, index) => {
        const imageUrl = content.governmentIdUrl?.startsWith("http")
          ? content.governmentIdUrl
          : content.governmentIdUrl?.startsWith("https")
          ? content.governmentIdUrl
          : "/";
        return (
          <div
            key={index}
            className={`${activeRowStyle(
              index
            )} w-full px-5 flex items-center justify-between py-1 cursor-pointer`}
            onClick={() => setActiveRow(index)}
          >
            <div className="flex flex-1 items-center gap-3">
              <Image
                src={imageUrl}
                width={50}
                height={50}
                alt="User Application Icon"
                className="object-cover"
              />
              <div className="flex flex-col font-manrope">
                <span className="text-[0.938rem] text-[#000] font-bold whitespace-nowrap">
                  {content.lastName} {content.firstName}
                </span>
                <span className="text-[0.938rem] text-[#000] font-normal whitespace-nowrap">
                  <span> {formatCreatedOn(content.createdOn)} / </span>
                  <span>Position: {content.positionAppliedFor}</span>
                </span>
              </div>
            </div>
            <div className="flex-1 text-end">
              <span className="bg-[#f90d0d] text-[#000] text-[0.938rem] font-manrope font-semibold w-[7rem] h-[1.5rem] inline-block text-center">
                Reject
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

{
  /* {content.rejected_status && activeRow === index ? (
              <div className="flex flex-1 items-center justify-end gap-5">
                <div
                  className="bg-[#95fba9] flex items-center gap-3 border border-1 border-[#000] pl-1 pr-5 mb-2 cursor-pointer"
                  onClick={() => router.push("/human-resources/inbox")}
                >
                  <Image
                    src={MsgIcon}
                    width={30}
                    height={30}
                    alt="Message Icon"
                    className=""
                  />
                  <span className="text-[0.938rem] text-[#000] font-manrope font-bold">
                    Message
                  </span>
                </div>
                <div className="self-end">{currentDate}</div>
              </div>
            ) : (
              <div className="flex-1 text-end">{currentDate}</div>
            )} */
}
