"use client";

import React, { useEffect } from "react";
import { DepartmentCard } from "./_component/DepartmentCard";
import { departmentsCardData } from "@/constants";
import { fetchDepartment } from "@/redux/department/actions";
import { useAppSelector } from "@/redux/hooks";

export const Departments = () => {
  const departmentInfo = useAppSelector((state) => state.department.list);

  useEffect(() => {
    fetchDepartment();
  }, []);

  return (
    <>
      <section className="w-full bg-[#929392] min-h-screen py-[3rem] px-[2rem]">
        <h1 className="text-[#fff] font-semibold font-markaziText text-[2.5rem] mb-3">
          Welcome to Human Resource Department
        </h1>
        <div className="w-[85%] ml-[2%] border border-gray-950 py-1.5 px-8 text-[1.875rem] text-[#fff] bg-[#6c6c6d] font-bold font-sourceSerif">
          Departments
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-[70%] ml-[8%] mt-8">
          {departmentInfo.map((item: any) => (
            <DepartmentCard key={item.id} cardInfo={item} />
          ))}
        </div>
      </section>
    </>
  );
};
