"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { API } from "@/utils/api";
import { alertNotification } from "@/redux/auth/actions";
import { setFDFormCurrentStep } from "@/redux/fd-forms/createFDFormsSlice";
import {
  getPaymentData,
  setIsLoading,
} from "@/redux/financial-department/payouts-requests/payoutRequestSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { adminVerify } from "@/redux/financial-department/payouts-requests/actions";
import { Spinner } from "@/components/spinner";
import { AxiosError } from "axios";

export const PaymentVerificationConfirm = ({ creatorId }: any) => {
  const [isVerified, setIsVerified] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [adminId, setAdminId] = useState("");
  const [uniquePassKey, setUniquePassKey] = useState("");
  const [payLoading, setPayLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const fdFormCurrentStep = useAppSelector(
    (state) => state.fdFormSteps.fdFormCurrentStep
  );

  const { adminData } = useAppSelector((state) => state.payoutRequests);

  useEffect(() => {
    const storedPaymentData = localStorage.getItem("paymentData");
    if (storedPaymentData) {
      const parseData = JSON.parse(storedPaymentData);
      if (parseData) {
        dispatch(getPaymentData(parseData));
      }
    }
  }, [dispatch]);

  const handleVerify = async () => {
    if (adminId.trim() === "") {
      setErrorMessage("Admin ID cannot be empty.");
      return;
    }
    setErrorMessage("");
    setVerifyLoading(true);
    await adminVerify(adminId);
    setIsVerified(true);
    setUniquePassKey(adminId);
    setVerifyLoading(false);
    setAdminId("");
  };

  const handlePayment = async () => {
    setPayLoading(true);
    dispatch(setIsLoading(true));
    try {
      const response = await API.get(
        `/api/v1/finance/payment-details?contentCreatorId=${creatorId}&uniquePassKey=${uniquePassKey}`
      );
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        dispatch(getPaymentData(jsonData));
        setTimeout(() => {
          setPayLoading(false);
          handleNextForm();
        }, 3000);
      } else {
        dispatch(setIsLoading(false));
        alertNotification("Payment not succeed. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsLoading(false));
      setPayLoading(false);
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  const handleNextForm = () => {
    const nextStep = fdFormCurrentStep + 1;
    dispatch(setFDFormCurrentStep(nextStep));
    // Delay the push to allow state update
    setTimeout(() => {
      // router.push(`/financial-department/payouts-requests?step=${nextStep}`);
      router.push(
        `/financial-department/payouts-requests?step=${nextStep}&creatorId=${creatorId}`
      );
    }, 1000);
    setIsVerified(false); // I reset verification status for the next step
  };

  return (
    <>
      <div className="max-w-[35%] 2xl:max-w-[25%] mx-auto flex flex-col gap-3">
        <div className="text-[#fff] text-[1.563rem] font-manrope font-bold text-center">
          Admin Confirm Verification
        </div>
        <form>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter Your ID"
              className="py-1 border-2 border-[#000]"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              disabled={isVerified}
            />
            <button
              type="button"
              className="bg-[#0bf931] text-[1.25rem] text-[#000] font-manrope font-bold px-5 py-0.5"
              onClick={handleVerify}
              disabled={verifyLoading || isVerified}
            >
              {verifyLoading ? "Verifying..." : "Verify"}
            </button>
          </div>
          {errorMessage && (
            <div className="text-red-500 text-[1rem] mt-2">{errorMessage}</div>
          )}
          {isVerified && adminData && (
            <div className="w-full mx-auto">
              <div className="flex justify-center my-5">
                <div className="size-20 rounded-full">
                  <Image
                    src={adminData.imgUrl}
                    width={50}
                    height={50}
                    alt="Admin Logo"
                    className="object-cover w-full rounded-full size-20"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[1.5rem] mb-5">
                <label
                  htmlFor=""
                  className="text-[#fff] text-[1.25rem] font-manrope font-bold"
                >
                  Name
                </label>
                <div className="text-[#fff] text-[1.3rem] font-medium">
                  {adminData.name}
                </div>
              </div>
              <div className="flex items-center gap-[1.5rem]">
                <label
                  htmlFor=""
                  className="text-[#fff] text-[1.25rem] font-manrope font-bold"
                >
                  Sector
                </label>
                <div className="text-[#fff] text-[1.3rem] font-medium">
                  {adminData.sector.split("_")[0]}{" "}
                  {adminData.sector.split("_")[1]}
                </div>
              </div>
            </div>
          )}
          <button
            className="bg-[#0bf931] text-[1.563rem] text-[#000] py-1  mt-7 font-manrope font-bold w-full rounded-md"
            onClick={(e) => {
              e.preventDefault();
              // handleNextForm();
              handlePayment();
            }}
            disabled={payLoading || !isVerified}
          >
            {payLoading ? <Spinner /> : "Pay"}
          </button>
        </form>
      </div>
    </>
  );
};

// YM34908452
