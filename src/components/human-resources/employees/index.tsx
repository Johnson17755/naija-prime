"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FilterIcon from "../../../../public/assets/filter-employee-icon.svg";
import { EmployeeCard } from "./_component/EmployeeCard";
import { EmployeePopup } from "./_component/EmployeePopup";
import { EmployeeModal } from "./_component/EmployeeModal";
import { useAppSelector } from "@/redux/hooks";
import { getAllEmployees } from "@/redux/employees/actions";

export const Employees = () => {
  const [popupButton, setPopupButton] = useState(false);

  const employees = useAppSelector((state) => state.employees.list);

  const closeModal = () => setPopupButton((prev) => !prev);

  useEffect(() => {
    const fetchEmployees = async () => {
      await getAllEmployees();
    };
    fetchEmployees();
    const interval = setInterval(fetchEmployees, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full flex flex-col bg-[#929392] h-screen pb-[3rem] pt-[1.5rem] px-[1.5rem] z-40">
        <div>
          <div className="bg-[#b3b3b3] flex items-center justify-between px-5 py-2">
            <div className="flex items-center gap-1 font-manrope font-bold text-[1.875rem]">
              <span className="text-[#0af831]">{employees.length}</span>
              <span className="text-[#000]">Employee</span>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-1 bg-[#d8d9d8] w-fit py-0.5 px-3 rounded-md cursor-pointer">
                <Image
                  src={FilterIcon}
                  width={15}
                  height={15}
                  alt="Filter Icon"
                  className=""
                />
                <span className="text-[1.2rem] text-[#000] font-manrope font-normal">
                  Filter
                </span>
              </div>
              <div
                className="flex items-center gap-1 bg-[#0da425] text-[#fff] text-[0.938rem] w-fit py-1 px-4 font-manrope font-normal rounded-md cursor-pointer"
                onClick={() => setPopupButton((prev) => !prev)}
              >
                <span>+</span>
                <span>Add Candidate</span>
              </div>
            </div>
          </div>
          <div
            className="mt-10 pl-10 overflow-auto"
            style={{ maxHeight: "calc(100vh - 150px)" }}
          >
            <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-10">
              {employees?.map((item: any) => (
                <EmployeeCard key={item.id} cardInfo={item} />
              ))}
            </div>
          </div>
          <div>
            <EmployeePopup trigger={popupButton}>
              <EmployeeModal closeModal={closeModal} />
            </EmployeePopup>
          </div>
        </div>
      </section>
    </>
  );
};
