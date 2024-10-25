import React from "react";
import Image from "next/image";
import { CCHomeHeader } from "@/features/header/customerCare/homeHeader";
import NaijaLogo from "../../../../public/assets/fd-naija-logo.svg";
import PhoneIcon from "../../../../public/assets/cc-phone-icon.svg";
import { customerReviewData } from "@/constants";
import { CustomerReviewCard } from "./_component/CustomerReviewCard";
import { ccHomeHeaderData, ccHomeTableData } from "@/constants";

export const Home = () => {
  return (
    <>
      <div className="relative w-full h-full min-h-screen">
        <CCHomeHeader />
        <div className="absolute inset-0 flex items-center justify-center pt-20 z-30">
          <Image
            src={NaijaLogo}
            alt="Naija Prime Logo"
            className="opacity-30 w-[600px] h-[600px]"
          />
        </div>
        <div className="py-5 px-12 z-[999]">
          <h2 className="text-[1.875rem] text-[#fff] font-manrope font-bold mb-6">
            Customer Review Dashboard
          </h2>
          <div className="grid grid-cols-4 gap-3 z-[999]">
            {customerReviewData?.map((item) => (
              <CustomerReviewCard key={item.id} cardInfo={item} />
            ))}
          </div>
          <div className="mt-10">
            <div className="flex items-start justify-between gap-3 z-[999]">
              <div className="overflow-hidden max-h-[30rem] 2xl:max-h-[46rem] w-[75%] z-[999]">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-[#a0a0a1] sticky top-0 border-b-8 border-[#f0f0f0]">
                    <tr>
                      {ccHomeHeaderData.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="p-2 mx-1 whitespace-nowrap text-[#fff] text-[1.563rem] font-manrope font-bold"
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                </table>
                <div className="overflow-y-auto max-h-[30rem] 2xl:max-h-[50rem] pb-16">
                  <table className="min-w-full table-auto border-collapse">
                    <tbody className="bg-[#a0a0a1]">
                      {ccHomeTableData.map((row, index) => (
                        <tr
                          key={index}
                          className="text-clip overflow-x-hidden whitespace-nowrap border-b-2 border-[#f0f0f0] text-center font-manrope font-bold p-2 text-[1.563rem] text-[#000]"
                        >
                          <td className="p-2 text-[1.25rem] text-[#000] font-manrope font-bold">
                            {row.name}
                          </td>
                          <td className="p-2 flex items-center justify-end">
                            <span className="text-[0.625rem] text-[#000] font-manrope font-bold bg-[#fff] px-4 py-1.5">
                              {row.message}
                            </span>
                          </td>
                          <td className="p-2 text-[1.25rem]  text-[#000] font-manrope font-bold text-end">
                            {row.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-[#d8d8d9] w-full h-[30rem] 2xl:h-[46rem] pb-4 z-[999]">
                <h3 className="text-[1.25rem] text-[#000] font-manrope font-bold p-4">
                  Incoming calls
                </h3>
                <div className="flex items-center justify-between px-4 py-2 mx-4 text-[1.25rem] text-[#000] font-manrope font-bold bg-[#a0a0a1]">
                  <span>Caller Queue Number</span>
                  <span className="pr-10">Status</span>
                </div>
                <div className="mt-5">
                  <table className="table-auto border-separate border-spacing-x-2 border-spacing-y-4 2xl:border-spacing-8">
                    <tr className="border border-black">
                      <td className="text-[1.25rem] text-[#000] font-manrope font-bold pr-2">
                        1.
                      </td>
                      <td className="w-[16rem] 2xl:w-[27rem] pl-1 pr-4 bg-[#75e986]">
                        <div className="flex items-start justify-between w-full">
                          <Image
                            src={PhoneIcon}
                            alt="Phone Logo"
                            className="w-[70px] h-[70px]"
                          />
                          <div className="flex flex-col gap-2 items-end ">
                            <span className="pt-2 text-[1.25rem] text-[#000] font-manrope font-bold">
                              09044044938
                            </span>
                            <button
                              type="button"
                              className="border border-1 border-[#000] px-3 bg-[#0ca525] text-[#fff] text-[0.625rem] font-manrope font-bold cursor-pointer"
                            >
                              Answer
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="w-[12.5rem] 2xl:w-[18rem] pl-1 pr-4 pb-2 bg-[#75e986] flex items-center justify-between">
                        <div className="flex flex-col items-center gap-3">
                          <span className="pt-2 text-[1.25rem] text-[#000] font-manrope font-bold">
                            Ongoing
                          </span>
                          <button
                            type="button"
                            className="border border-1 border-[#000] px-3 bg-[#0ca525] text-[#fff] text-[0.625rem] font-manrope font-bold cursor-pointer"
                          >
                            Start Record
                          </button>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                          <div className="mt-2 text-[1.25rem] text-[#000] font-manrope font-bold bg-[#fff] px-4">
                            3:56
                          </div>
                          <button
                            type="button"
                            className="border border-1 border-[#000] px-3 bg-[#f00a27] text-[#fff] text-[0.625rem] font-manrope font-bold cursor-pointer"
                          >
                            End
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border border-black">
                      <td className="text-[1.25rem] text-[#000] font-manrope font-bold pr-2">
                        2.
                      </td>
                      <td className="w-[16rem] 2xl:w-[27rem] pl-1 pr-4 bg-[#f80d0c]">
                        <div className="flex items-start justify-between w-full">
                          <Image
                            src={PhoneIcon}
                            alt="Phone Logo"
                            className="w-[70px] h-[70px]"
                          />
                          <div className="flex flex-col gap-2 items-end ">
                            <span className="pt-2 text-[1.25rem] text-[#000] font-manrope font-bold">
                              09044044938
                            </span>
                            <button
                              type="button"
                              className="border border-1 border-[#000] px-3 bg-[#5e0f8f] text-[#fff] text-[0.625rem] font-manrope font-bold cursor-pointer"
                            >
                              Redial
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="w-[12.5rem] 2xl:w-[18rem] h-[4.5rem] pl-1 pr-4 pb-2 bg-[#f80d0c] flex">
                        <span className="pt-2 text-[1.25rem] text-[#000] font-manrope font-bold">
                          Missed
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
