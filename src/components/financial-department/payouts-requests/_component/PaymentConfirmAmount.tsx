"use client";

import { setFDFormCurrentStep } from "@/redux/fd-forms/createFDFormsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DownArrow from "../../../../../public/assets/fd-down-arrow.svg";

export const PaymentConfirmAmount = ({ creatorId }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const fdFormCurrentStep = useAppSelector(
    (state) => state.fdFormSteps.fdFormCurrentStep
  );

  const payoutInfo = useAppSelector((state) => state.payoutRequests.payoutInfo);
  const { withdrawalDetails } = useAppSelector((state) => state.payoutRequests);

  

  const handleNextForm = () => {
    const nextStep = fdFormCurrentStep + 1;
    dispatch(setFDFormCurrentStep(nextStep));
    // Delay the push to allow state update
    setTimeout(() => {
      // router.push(`/financial-department/payouts-requests?step=${nextStep}`);
      router.push(
        `/financial-department/payouts-requests?step=${nextStep}&creatorId=${creatorId}`
      );
    }, 100);
  };

  return (
    <>
      <div className="max-w-[35%] 2xl:max-w-[25%] mx-auto flex flex-col gap-3">
        <div className="text-[#fff] text-[1.563rem] font-manrope font-bold text-center">
          Confirm Amount
        </div>
        <div className="bg-[#323f6f]">
          <form className="flex items-center justify-center border-b-2 pt-2">
            <label
              htmlFor="ngn"
              className="text-[#fff] tex-t[1.563rem] font-manrope font-bold flex justify-end w-[50%]"
            >
              NGN
            </label>
            <input
              type="text"
              className="bg-transparent flex justify-start w-[50%] border-none focus:outline-none focus:ring-0 focus:border-none text-[#fff] placeholder-white"
              placeholder="0.00"
              value={withdrawalDetails.amount}
              readOnly
            />
          </form>
          <div className="flex flex-col items-center">
            <div className="text-[0.938rem] text-[#a8afc1] font-manrope font-bold">
              Reference
            </div>
            <h3 className="text-[1.25rem] text-[#fff] font-manrope font-bold">
              {withdrawalDetails.accountName}
            </h3>
          </div>
        </div>
        <div className="bg-[#323f6f] flex flex-col items-start gap-2 w-full pl-5 pb-2 pt-4 rounded-lg">
          <div className="w-full flex items-center gap-3">
            <div className="bg-[#fff] w-[2rem] h-[1.3rem] rounded-sm"></div>
            <h3 className="text-[1.25rem] text-[#fff] font-manrope font-bold">
              Naija Prime Ltd
            </h3>
          </div>
          <div className="w-full flex items-center gap-4">
            <Image
              src={DownArrow}
              width={20}
              height={20}
              alt="Down Arrow"
              className="ml-1"
            />

            <div className="w-full h-[0.12rem] bg-[#fff]"></div>
          </div>
          <div className="w-full flex items-center gap-3">
            <div className="bg-[#fff] w-[2rem] h-[1.3rem] rounded-sm"></div>
            <h3 className="text-[1.25rem] text-[#fff] font-manrope font-bold">
              {withdrawalDetails.accountName}
            </h3>
          </div>
        </div>
        <button
          className="bg-[#0bf931] text-[1.563rem] text-[#000] py-1  mt-2 font-manrope font-bold w-full rounded-md"
          onClick={(e) => {
            e.preventDefault();
            handleNextForm();
          }}
        >
          PROCESS
        </button>
      </div>
    </>
  );
};
