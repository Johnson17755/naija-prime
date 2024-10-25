"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Application } from "@/types";
import { useAppSelector } from "@/redux/hooks";

// interface PendingContentProps {
//   applications: Application[];
// }

export const PendingTabContent = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const router = useRouter();

  const { allApplications, shortlistedApplications, rejectedApplications } =
    useAppSelector((state) => state.applications);

  const pendingApplications = allApplications.filter(
    (app: any) =>
      !shortlistedApplications.includes(app) &&
      !rejectedApplications.includes(app)
  );

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

  return (
    <>
      {pendingApplications?.map((content: any , index: number) => (
        <div
          key={index}
          className={`${activeRowStyle(
            index
          )} w-full px-5 flex items-center justify-between py-1 cursor-pointer`}
          onClick={() => setActiveRow(index)}
        >
          <div className="flex flex-1 items-center gap-3">
            <Image
              src={content.img}
              width={50}
              height={50}
              alt="User Application Icon"
              className="object-cover"
            />
            <div className="flex flex-col font-manrope">
              <span className="text-[0.938rem] text-[#000] font-bold whitespace-nowrap">
                {content.name}
              </span>
              <span className="text-[0.938rem] text-[#000] font-normal whitespace-nowrap">
                {content.time_pos}
              </span>
            </div>
          </div>
          <div className="flex-1 text-end">
            <span className="bg-[#bdc6e8] text-[#0E09EF] text-[0.938rem] font-manrope font-semibold w-[7rem] h-[1.5rem] inline-block text-center">
              {content.pending_status}
            </span>
          </div>
          <div className="flex-1 text-end">{currentDate}</div>
        </div>
      ))}
    </>
  );
};
