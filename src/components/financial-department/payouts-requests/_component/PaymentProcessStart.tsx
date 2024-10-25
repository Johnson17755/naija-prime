"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFDFormCurrentStep } from "@/redux/fd-forms/createFDFormsSlice";
import { fetchWithdrawalDetails } from "@/redux/financial-department/payouts-requests/actions";

export const PaymentProcessStart = ({ creatorId }: any) => {
  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    amount: 0,
  });

  const dispatch = useAppDispatch();
  const router = useRouter();

  const fdFormCurrentStep = useAppSelector(
    (state) => state.fdFormSteps.fdFormCurrentStep
  );

  useEffect(() => {
    const fetchDetails = async () => {
      if (creatorId) {
        const details = await fetchWithdrawalDetails(creatorId);
        setFormData({
          accountName: details.accountName,
          accountNumber: details.accountNumber,
          bankName: details.bankName,
          amount: details.amount,
        });
      }
    };
    fetchDetails();
  }, [creatorId]);

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
        <div className="flex flex-col items-start">
          <label
            htmlFor=""
            className="text-[#a0b5cc] text-[1.563rem] font-manrope font-bold"
          >
            Recipient Name
          </label>
          <input
            type="text"
            className="bg-[#6a82a3] border-none w-full"
            value={formData.accountName}
            readOnly
          />
        </div>
        <div className="flex flex-col items-start">
          <label
            htmlFor=""
            className="text-[#a0b5cc] text-[1.563rem] font-manrope font-bold"
          >
            Recipient Account
          </label>
          <input
            type="text"
            className="bg-[#6a82a3] border-none w-full"
            value={formData.accountNumber}
            readOnly
          />
        </div>
        <div className="flex flex-col items-start">
          <label
            htmlFor=""
            className="text-[#a0b5cc] text-[1.563rem] font-manrope font-bold"
          >
            Recipient Bank
          </label>
          <input
            type="text"
            className="bg-[#6a82a3] border-none w-full"
            value={formData.bankName}
            readOnly
          />
        </div>
        <div className="flex flex-col items-start">
          <label
            htmlFor=""
            className="text-[#a0b5cc] text-[1.563rem] font-manrope font-bold"
          >
            Amount
          </label>
          <input
            type="text"
            className="bg-[#6a82a3] border-none w-full"
            value={formData.amount}
            readOnly
          />
        </div>
        <button
          className="bg-[#0bf931] text-[1.563rem] text-[#000] py-1  mt-2 font-manrope font-bold w-full"
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

// const handleNextForm = () => {
//   const nextStep = fdFormCurrentStep + 1;
//   dispatch(setFDFormCurrentStep(nextStep));
//   console.log("Before", fdFormCurrentStep);
//   router.push(`/financial-department/payouts-requests?step=${nextStep}`);
// };
