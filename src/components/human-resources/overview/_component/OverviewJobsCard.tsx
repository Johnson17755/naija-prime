"use client";

import React from "react";
import { OverviewProps } from "@/types";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

interface CardInfoProps {
  cardInfo: OverviewProps;
}

export const OverviewJobsCard = ({ cardInfo }: CardInfoProps) => {
  const employees = useAppSelector((state) => state.employees.list);
  const { allJobOpenings } = useAppSelector((state) => state.jobOpenings);
  const { allApplications } = useAppSelector((state) => state.applications);

  return (
    <article
      className="bg-[#d8d8d9] p-2 flex flex-col shadow"
      style={{
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex justify-between px-4">
        <span className="pt-[1rem] text-[#000] text-[2.188rem] font-markaziText font-semibold">
          {cardInfo.text === "Active Jobs"
            ? employees.length
            : cardInfo.text === "Jobs Openings"
            ? allJobOpenings.length
            : cardInfo.text === "Position to fill"
            ? allJobOpenings.length
            : cardInfo.text === "Submissions"
            ? allApplications.length
            : cardInfo.value}
        </span>
        <Image
          src={cardInfo.img}
          width={35}
          height={35}
          alt="Job Status Icons"
          className=""
        />
      </div>
      <div className="text-[#000] text-[1.875rem] font-markaziText font-semibold">
        {cardInfo.text}
      </div>
    </article>
  );
};
