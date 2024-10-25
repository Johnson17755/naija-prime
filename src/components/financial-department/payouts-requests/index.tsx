"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FDOtherHeader } from "@/features/header/financialDepartment/otherHeader";
import { payoutsReqHeaderData } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { PayoutsRequestForm } from "../payoutsRequestsForm";
import { useAppSelector } from "@/redux/hooks";
import {
  fetchTotalRequests,
  fetchTotalPayouts,
  fetchTotalBalance,
  fetchPayoutInfo,
  fetchWithdrawalDetails,
} from "@/redux/financial-department/payouts-requests/actions";
import NameEllipseIcon from "../../../../public/assets/name-ellipse-icon.svg";

export const PayoutRequest = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  const totalRequests = useAppSelector(
    (state) => state.payoutRequests.totalRequests
  );

  const totalPayouts = useAppSelector(
    (state) => state.payoutRequests.totalPayouts
  );

  const totalBalance = useAppSelector(
    (state) => state.payoutRequests.totalBalance
  );

  const payoutInfo = useAppSelector((state) => state.payoutRequests.payoutInfo);

  useEffect(() => {
    const fetchRequest = async () => {
      await fetchTotalRequests();
      await fetchTotalPayouts();
      await fetchTotalBalance();
      await fetchPayoutInfo();
    };

    fetchRequest();
    const interval = setInterval(fetchRequest, 10000);
    return () => clearInterval(interval);
  }, []);

  if (step) {
    return <PayoutsRequestForm />;
  }

  // const handleVerifyClick = (step: number) => {
  //   router.push(`/financial-department/payouts-requests?step=${step}`);
  // };

  const handleVerifyClick = async (creatorId: any) => {
    await fetchWithdrawalDetails(creatorId);
    router.push(
      `/financial-department/payouts-requests?step=1&creatorId=${creatorId}`
    );
  };

  return (
    <>
      <div className="relative w-full h-full min-h-screen pb-10">
        <FDOtherHeader />
        <div className="px-7 pt-5 pb-10">
          <div className="bg-[#032869] flex items-center justify-between p-5">
            <div>
              <h3 className="text-[#fff] text-[1.563rem] font-bold font-manrope">
                Total Balance
              </h3>
              <div className="bg-[#3216e1] flex items-center justify-center gap-5 w-[17rem] h-[5.5rem] px-2">
                <div className="text-[#fff] text-[1.563rem] font-bold font-manrope pl-[1rem]">
                  NGN
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="bg-[#fff] w-[8rem] h-[1.4rem] flex items-center justify-center font-semibold text-[1.3rem]">
                    {totalBalance}
                  </div>
                  <div className="text-[#fff] text-[1.563rem] font-bold font-manrope">
                    .00
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#fff] text-[1.563rem] font-bold font-manrope">
                Total Payouts
              </h3>
              <div className="bg-[#3216e1] flex items-center justify-center gap-5 w-[17rem] h-[5.5rem] px-2">
                <div className="text-[#fff] text-[1.563rem] font-bold font-manrope pl-[1rem]">
                  NGN
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="bg-[#fff] w-[8rem] h-[1.4rem] flex items-center justify-center font-semibold text-[1.3rem]">
                    {totalPayouts}
                  </div>
                  <div className="text-[#fff] text-[1.563rem] font-bold font-manrope">
                    .00
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[#fff] text-[1.563rem] font-bold font-manrope">
                Total Request
              </h3>
              <div className="bg-[#3216e1] flex items-center justify-center w-[17rem] h-[5.5rem]">
                <div className="bg-[#fff] w-[12rem] h-[3rem] flex items-center justify-center font-semibold text-[1.5rem]">
                  {totalRequests}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-7">
          <div className="overflow-y-scroll max-h-[30rem] 2xl:max-h-[50rem]">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-[#454468] sticky top-0 border-b-8">
                <tr>
                  {payoutsReqHeaderData.map((item, index) => (
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
              <tbody className="bg-[#acacac]">
                {payoutInfo.map((row: any) => (
                  <tr
                    key={row.id}
                    className="text-clip overflow-x-hidden whitespace-nowrap border-b-4 border-[#f0f0f0] text-center font-manrope font-bold p-2 text-[1.563rem] text-[#000]"
                  >
                    <td className="p-2 flex items-center gap-2">
                      <Image
                        src={NameEllipseIcon}
                        width={50}
                        height={50}
                        alt="Name Icon"
                        className=""
                      />
                      <div className="flex flex-col items-start leading-tight">
                        <span>{row.productionName.split(" ")[0]}</span>
                        <span>{row.productionName.split(" ")[1]}</span>
                      </div>
                    </td>
                    <td className="p-2 text-center">{row.payoutAmount}</td>
                    <td className="p-2 text-center">{row.totalBalance}</td>
                    <td className="p-2 text-[1.25rem]">
                      <span
                        className="bg-[#0af930] px-[1.8rem] py-0.5 cursor-pointer outline outline-1"
                        onClick={() => handleVerifyClick(row.id)}
                      >
                        Verify
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="overflow-y-auto max-h-[30rem] 2xl:max-h-[50rem] pb-16">
  <table className="min-w-full table-auto border-collapse"> */
}
