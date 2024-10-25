import React from "react";
import { DepartmentsProps } from "@/types";
import Image from "next/image";
import DepartmentCardImg from "../../../../../public/assets/currencyImage.svg";
import UploadArrow from "../../../../../public/assets/uploadArrow.svg";

interface CardInfoProps {
  cardInfo: DepartmentsProps;
}

export const DepartmentCard = ({ cardInfo }: CardInfoProps) => {
  const firstLetterUpperCase = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const departmentNameArray = cardInfo.departmentName.split("_");

  return (
    <>
      <section className="bg-[#6e6f6f] p-5 flex flex-col rounded-lg">
        <h3 className="text-[#fff] font-bold font-sourceSerif text-[1.875rem]">
          {firstLetterUpperCase(departmentNameArray[0])}{" "}
          {firstLetterUpperCase(departmentNameArray[1])}{" "}
        </h3>
        <div className="flex items-center gap-1 ml-[1rem]">
          <span className="text-[#fff] font-extrabold text-[3.75rem] font-sourceSerif">
            {cardInfo.totalPersons}
          </span>
          <Image
            src={DepartmentCardImg}
            width={30}
            height={30}
            alt="Currency Icon"
            className="mt-5"
          />
        </div>
        <div className="flex items-center gap-2 font-sourceSerif ml-[2rem]">
          <div
            className={`flex justify-center items-center size-[1.125rem] rounded-full ${
              cardInfo.departmentName.split("_")[0] === "CONTENT"
                ? "bg-[#F90D0D]"
                : "bg-[#0BF931]"
            } `}
          >
            <Image
              src={UploadArrow}
              width={10}
              height={10}
              alt="Download Upload Icon"
              className=""
            />
          </div>
          <span
            className={`text-[0.625rem] ${
              cardInfo.departmentName.split("_")[0] === "CONTENT"
                ? "text-[#F90D0D]"
                : "text-[#0BF931]"
            }`}
          >
            34.4%
          </span>
          <span className="text-[0.625rem] text-[#fff]">vs last month</span>
        </div>
      </section>
    </>
  );
};
