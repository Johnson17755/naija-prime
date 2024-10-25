"use client";

import React, { useEffect } from "react";
import { OverviewJobsCard } from "./_component/OverviewJobsCard";
import { PieChart } from "./_component/PieChart";
import { DoughnutChart } from "./_component/DoughnutChart";
import {
  hiringPipelineHeader,
  overviewJobsCardData,
  tableData,
} from "@/constants";
import { fetchAllOverview } from "@/redux/overview/actions";
import { useAppSelector } from "@/redux/hooks";

export const Overview = () => {
  const overiew = useAppSelector((state) => state.overview.list);

  const { allJobOpenings } = useAppSelector((state) => state.jobOpenings);

  useEffect(() => {
    fetchAllOverview();
  }, []);

  return (
    <>
      <section className="w-full bg-[#929392] min-h-screen py-[3rem] px-[2rem]">
        <h1 className="text-[#fff] font-semibold font-markaziText text-[2.5rem] mb-3">
          Overview
        </h1>
        <div className="grid grid-cols-5 gap-x-5">
          {overviewJobsCardData?.map((item) => (
            <OverviewJobsCard key={item.id} cardInfo={item} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10 max-w-[90%]">
          <div className="flex flex-col">
            <h3 className="text-[2.188rem] text-[#fff] font-markaziText font-semibold -mb-2">
              Offer Acceptance
            </h3>
            <div className="bg-[#d8d8d9] flex items-center justify-center relative h-[15rem]">
              <DoughnutChart />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[2.188rem] text-[#fff] font-markaziText font-semibold -mb-2">
              Hires by Source
            </h3>
            <div className="bg-[#d8d8d9] flex items-center justify-center relative h-[15rem]">
              <PieChart />
            </div>
          </div>
        </div>
        <div className="mt-[2rem]">
          <h3 className="text-[#fff] text-[1.25rem] font-dmSerifText">
            Hiring Pipeline
          </h3>
          <div className="overflow-y-scroll max-h-[18rem]">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-[#d9d9d9] sticky top-0">
                <tr>
                  {hiringPipelineHeader.map((item, index) => (
                    <th
                      scope="col"
                      key={index}
                      className="p-2 mx-1 whitespace-nowrap text-[#000] text-[1.25rem] font-dmSerifText font-light"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#f0f0f0]">
                {allJobOpenings?.map((row: any, index: number) => (
                  <tr
                    key={index}
                    className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-manrope font-medium p-2 text-[0.938rem] text-[#000]"
                  >
                    <td className="p-2">{row.jobTitle}</td>
                    <td className="p-2">{row.department}</td>
                    <td className="p-2">{row.candidates}</td>
                    <td className="p-2">{row.qualifications}</td>
                    <td className="p-2">{row.salary}</td>
                    <td className="p-2">{row.expireDate}</td>
                    <td className="p-2">
                      <span className="bg-[#0af930] py-0.5 px-3">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

{
  /* <div className="relative border border-[#fff] max-h-[20rem]">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="bg-[#d9d9d9]">
                  <tr>
                    {hiringPipelineHeader.map((item, index) => (
                      <th
                        scope="col"
                        key={index}
                        className="p-2 mx-1 whitespace-nowrap text-[#000] text-[1.25rem] font-dmSerifText"
                        style={{
                          width: `${100 / hiringPipelineHeader.length}%`,
                        }}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
            <div className="overflow-y-scroll max-h-[15rem]">
              <table className="min-w-full table-auto">
                <tbody className="bg-[#f0f0f0]">
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b border-[#fff]">
                      <td
                        className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]"
                        style={{ width: "14.28%" }}
                      >
                        {row.role}
                      </td>
                      <td
                        className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]"
                        style={{ width: "14.28%" }}
                      >
                        {row.total}
                      </td>
                      <td
                        className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]"
                        style={{ width: "14.28%" }}
                      >
                        {row.screening}
                      </td>
                      <td
                        className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]"
                        style={{ width: "14.28%" }}
                      >
                        {row.interviews}
                      </td>
                      <td
                        className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]"
                        style={{ width: "14.28%" }}
                      >
                        {row.offers}
                      </td>
                      <td
                        className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]"
                        style={{ width: "14.28%" }}
                      >
                        {row.hired}
                      </td>
                      <td
                        className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]"
                        style={{ width: "14.28%" }}
                      >
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */
}

{
  /* <div className="relative border border-[#fff]">
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto border-collapse">
      <thead className="bg-[#d9d9d9] border-x-0">
        <tr>
          {hiringPipelineHeader.map((item, index) => (
            <th
              scope="col"
              key={index}
              className="p-2 mx-1 whitespace-nowrap text-[#000] text-[1.25rem] font-dmSerifText"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-[#d9d9d9] max-h-[15rem] overflow-y-scroll block">
        {tableData.map((row, index) => (
          <tr key={index} className="border-t-2 border-[#fff] flex">
            <td className="flex-1 text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]">
              {row.role}
            </td>
            <td className="flex-1 text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]">
              {row.total}
            </td>
            <td className="flex-1 text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]">
              {row.screening}
            </td>
            <td className="flex-1 text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]">
              {row.interviews}
            </td>
            <td className="flex-1 text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]">
              {row.offers}
            </td>
            <td className="flex-1 text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]">
              {row.hired}
            </td>
            <td className="flex-1 text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#fff] text-center font-medium p-2 text-[0.938rem] text-[#000]">
              {row.time}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>; */
}
