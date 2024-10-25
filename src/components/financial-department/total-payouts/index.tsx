"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { FDOtherHeader } from "@/features/header/financialDepartment/otherHeader";
import { fdMonthPayoutRecord } from "@/constants";
import { payoutRecordHeaders } from "@/constants";
import SearchIcon from "../../../../public/assets/fd-search-icon.svg";
import DownloadIcon from "../../../../public/assets/fd-download-icon.svg";
import { useAppSelector } from "@/redux/hooks";
import { store } from "@/redux/store";
import { getPaymentData } from "@/redux/financial-department/payouts-requests/payoutRequestSlice";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 101 }, (_, i) => currentYear - 50 + i);

export const TotalPayouts = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [days, setDays] = useState<number[]>([]);

  const dispatch = store.dispatch;

  const { paymentData } = useAppSelector((state) => state.payoutRequests);

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedMonth(e.target.value);
  const handleDayChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedDay(e.target.value);
  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedYear(e.target.value);

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const daysInMonth = new Date(
        Number(selectedYear),
        fdMonthPayoutRecord.indexOf(selectedMonth) + 1,
        0
      ).getDate();
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    } else {
      setDays([]);
    }
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    if (typeof window !== "undefined" && !paymentData) {
      const storedPaymentData = localStorage.getItem("paymentData");
      if (storedPaymentData) {
        const parsedData = JSON.parse(storedPaymentData);
        if (Array.isArray(parsedData)) {
          dispatch(getPaymentData(parsedData));
        }
      }
    }
  }, [dispatch, paymentData]);

  return (
    <>
      <div className="relative w-full h-full min-h-screen pb-10">
        <FDOtherHeader />
        <div className="px-10">
          <h1 className="text-[2.5rem] text-[#fff] font-manrope font-bold text-center">
            TOTAL PAYOUT RECORDS
          </h1>
          <div className="bg-[#999999]">
            <div className="flex items-center justify-between gap-3 px-8 pt-5 pb-4">
              <form className="relative flex items-center w-[23%]">
                <input
                  type="text"
                  placeholder="Search Creators"
                  className="pl-12 w-full placeholder:text-[1rem] placeholder:text-[#6d6c6d] focus:outline-none focus:border-none focus:ring-0 border-none rounded-md"
                />
                <Image
                  src={SearchIcon}
                  width={25}
                  height={25}
                  alt="Search Icon"
                  className="absolute left-0 ml-3 cursor-pointer"
                />
              </form>
              <div className="flex items-center gap-5 w-[37rem]">
                <select
                  id="month"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  className="bg-[#fff] text-[#4C4C4C] border-none focus:outline-none focus:border-none py-2 px-2 2xl:px-3 w-full rounded-md text-[1rem]"
                >
                  <option value="" className="bg-[#fff] text-[#4C4C4C]">
                    Select Month
                  </option>
                  {fdMonthPayoutRecord.map((month) => (
                    <option
                      key={month}
                      value={month}
                      className="bg-[#fff] text-[#4C4C4C] py-3"
                    >
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  id="day"
                  value={selectedDay}
                  onChange={handleDayChange}
                  className="bg-[#fff] text-[#4C4C4C] border-none focus:outline-none focus:border-none py-2 px-2 2xl:px-3 w-full rounded-md"
                >
                  <option value="" className="bg-[#fff] text-[#4C4C4C]">
                    Select Day
                  </option>
                  {days.map((day) => (
                    <option
                      key={day}
                      value={day}
                      className="bg-[#fff] text-[#4C4C4C] py-3"
                    >
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={handleYearChange}
                  className="bg-[#fff] text-[#4C4C4C] border-none focus:outline-none focus:border-none py-2 px-2 2xl:px-3 w-full rounded-md"
                >
                  <option value="" className="bg-[#fff] text-[#4C4C4C]">
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option
                      key={year}
                      value={year}
                      className="bg-[#fff] text-[#4C4C4C] py-3"
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end gap-5">
                <span className="text-[#fff] text-[0.75rem] font-manrope font-bold whitespace-nowrap">
                  Download Records
                </span>
                <Image
                  src={DownloadIcon}
                  width={40}
                  height={40}
                  alt="Download Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="">
              <div className="overflow-hidden max-h-[30rem] 2xl:max-h-[50rem]">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="sticky top-0 border-b-8 border-[#afbbca]">
                    <tr>
                      {payoutRecordHeaders.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="p-2 mx-1 whitespace-nowrap text-[#fff] text-[1.3rem] font-manrope font-normal"
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                </table>
                <div className="overflow-y-auto max-h-[30rem] 2xl:max-h-[50rem] pb-16">
                  <table className="min-w-full table-auto border-collapse">
                    <tbody className="bg-[#afbbca]">
                      {Array.isArray(paymentData) && paymentData.length > 0 ? (
                        paymentData.map((row: any, index: number) => (
                          <tr
                            key={index}
                            className="text-clip overflow-x-hidden whitespace-nowrap text-center font-manrope font-normal p-2 text-[1rem] text-[#000] bg-[#d9d9d9] border-b-8 border-[#afbbca]"
                          >
                            <td className="p-2 ml-4 flex items-center gap-2">
                              <Image
                                src={row.contentCreatorImgUrl}
                                width={50}
                                height={50}
                                alt="Account Create"
                              />
                              <div className="flex flex-col items-start leading-tight">
                                <span>{row.accountHolder ?? ""}</span>
                                <span>{row.accountNumber ?? ""}</span>
                                <span>{row.bankName ?? ""}</span>
                              </div>
                            </td>
                            <td className="text-left font-bold">
                              NGN {row.requestedAmount}
                            </td>
                            <td className="p-2 flex items-center justify-center gap-2">
                              <Image
                                src={row.adminImgUrl}
                                width={50}
                                height={50}
                                alt="Account Create"
                              />
                              <div className="flex flex-col items-start leading-tight">
                                <span>{row.adminName ?? ""}</span>
                                <span>{row.adminDepartment ?? ""}</span>
                              </div>
                            </td>
                            <td
                              className={`${
                                row.requestStatus === "approved"
                                  ? "text-[#008000]"
                                  : row.requestStatus === "rejected"
                                  ? "text-[#ff0000]"
                                  : "text-[#ff7f00]"
                              } text-left font-bold`}
                            >
                              {row.requestStatus}
                            </td>
                            <td>{row.requestedDate}</td>
                            <td>{row.approvedDate}</td>
                            <td className="text-left font-bold">
                              NGN {row.paymentAmount}
                            </td>
                            <td className="text-left font-bold">
                              NGN {row.remainingBalance}
                            </td>
                            <td>{row.paymentDate}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={9} className="text-center p-4">
                            No payment data available.
                          </td>
                        </tr>
                      )}
                    </tbody>
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
