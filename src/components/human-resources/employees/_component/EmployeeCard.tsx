"use client";

import React, { useState } from "react";
import { GetEmployees } from "@/types";
import Image from "next/image";
// import { deleteEmployee } from "@/redux/employees/employeesSlice";
import { alertNotification } from "@/redux/auth/actions";
import DotIcon from "../../../../../public/assets/employee-dot-icon.svg";
import EmailIcon from "../../../../../public/assets/employee-email-icon.svg";
import PhoneIcon from "../../../../../public/assets/employee-cell-icon.svg";
import { deleteEmployees } from "@/redux/employees/actions";

interface EmployeeCardProps {
  cardInfo: GetEmployees;
}
export const EmployeeCard = ({ cardInfo }: EmployeeCardProps) => {
  const [showDeleteOption, setShowDeleteOption] = useState(false);

  const handleDotClick = () => {
    setShowDeleteOption((prev) => !prev);
  };

  const handleDeleteClick = async () => {
    try {
      await deleteEmployees(cardInfo.id);
      // alertNotification("Employee deleted successfully", "success");
    } catch (error) {
      alertNotification("Failed to delete employee. Try again later", "error");
    }
  };

  const imageUrl = cardInfo.imageUrl.startsWith("http")
    ? cardInfo.imageUrl
    : cardInfo.imageUrl.startsWith("https")
    ? cardInfo.imageUrl
    : "/";

  return (
    <>
      <article className="bg-[#d8d9d8]">
        <div className="px-4 py-5">
          <div className="flex justify-end items-center cursor-pointer relative">
            <Image
              src={DotIcon}
              width={18}
              height={18}
              alt="Dot Icon"
              className=""
              onClick={handleDotClick}
            />
            {showDeleteOption && (
              <div className="absolute top-4 right-0 bg-white border border-gray-300 px-2 py-1 rounded-md">
                <button
                  className="text-red-500 text-[0.9rem]"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center">
              <Image
                src={imageUrl}
                width={80}
                height={80}
                alt="Ball Icon"
                className="object-cover w-[5rem] h-[5rem] rounded-full"
              />
              <div className="flex flex-col items-center font-manrope text-[#000]">
                <span className="text-[1.25rem] font-bold">
                  {cardInfo?.firstName ?? ""} {cardInfo?.lastName ?? ""}
                </span>
                <span className="text-[0.938rem] font-light">
                  {cardInfo?.departmentPassword}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#b1b1b0] mb-1 pb-2">
          <div className="py-0.5 px-4">
            <div className="flex items-center justify-between text-[#000] opacity-70 font-manrope">
              <span className="text-[1.25rem] font-light">Department</span>
              <span>Hired Date</span>
            </div>
            <div className="flex items-center justify-between text-[#000] font-manrope font-bold mb-1">
              <span className="text-[1.1rem]">
                {cardInfo.departmentPassword}
              </span>
              <span className="text-[1.2rem]">{cardInfo.hiredDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-[#000] max-w-[60%] overflow-hidden">
                <Image
                  src={EmailIcon}
                  width={30}
                  height={30}
                  alt="Email Logo"
                  className=""
                />
                <span className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                  {cardInfo.email}
                </span>
              </div>
              <div className="flex items-center gap-2 font-manrope font-extrabold text-[#000] text-[0.938rem]">
                <span>Passcode</span>
                <span>{cardInfo.uniquePassKey}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 font-manrope font-extrabold text-[#000] text-[0.938rem]">
              <Image
                src={PhoneIcon}
                width={25}
                height={25}
                alt="Phone Icon"
                className=""
              />
              <span>{cardInfo.phoneNumber}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
