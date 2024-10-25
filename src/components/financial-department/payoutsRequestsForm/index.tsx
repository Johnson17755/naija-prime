"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { PaymentProcessStart } from "@/components/financial-department/payouts-requests/_component/PaymentProcessStart";
import { PaymentConfirmAmount } from "@/components/financial-department/payouts-requests/_component/PaymentConfirmAmount";
import { PaymentVerificationConfirm } from "@/components/financial-department/payouts-requests/_component/PaymentVerificationConfirm";
import { PaymentConfirmFinal } from "@/components/financial-department/payouts-requests/_component/PaymentConfirmFinal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FDOtherHeader } from "@/features/header/financialDepartment/otherHeader";
import { Steps } from "@/components/financial-department/fdFormSteops/Steps";
import { setFDFormCurrentStep } from "@/redux/fd-forms/createFDFormsSlice";
import BackArrow from "../../../../public/assets/movie-back-arrow.svg";
import {
  fetchTotalBalance,
  fetchTotalPayouts,
  fetchTotalRequests,
} from "@/redux/financial-department/payouts-requests/actions";

export const PayoutsRequestForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const fdFormCurrentStep = useAppSelector(
    (state) => state.fdFormSteps.fdFormCurrentStep
  );

  useEffect(() => {
    const step = parseInt(searchParams.get("step") || "1", 10);
    if (step !== fdFormCurrentStep) {
      dispatch(setFDFormCurrentStep(step));
    }
  }, [searchParams, fdFormCurrentStep, dispatch]);

  const totalRequests = useAppSelector(
    (state) => state.payoutRequests.totalRequests
  );

  const totalPayouts = useAppSelector(
    (state) => state.payoutRequests.totalPayouts
  );

  const totalBalance = useAppSelector(
    (state) => state.payoutRequests.totalBalance
  );

  useEffect(() => {
    const fetchRequest = async () => {
      await fetchTotalRequests();
      await fetchTotalPayouts();
      await fetchTotalBalance();
    };

    fetchRequest();
    const interval = setInterval(fetchRequest, 10000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   router.replace(
  //     `/financial-department/payouts-requests?step=${fdFormCurrentStep}`
  //   );
  // }, [fdFormCurrentStep, router]);

  useEffect(() => {
    const creatorId = searchParams.get("creatorId");
    const step = searchParams.get("step") || fdFormCurrentStep;
    router.replace(
      `/financial-department/payouts-requests?step=${step}${
        creatorId ? `&creatorId=${creatorId}` : ""
      }`
    );
  }, [fdFormCurrentStep, router, searchParams]);

  // const handleBack = () => {
  //   if (fdFormCurrentStep > 1) {
  //     const previousStep = fdFormCurrentStep - 1;
  //     dispatch(setFDFormCurrentStep(previousStep));
  //     setTimeout(() => {
  //       router.push(
  //         `/financial-department/payouts-requests?step=${previousStep}`
  //       );
  //     }, 100);
  //   } else {
  //     router.push("/financial-department/payouts-requests");
  //   }
  // };

  const handleBack = () => {
    if (fdFormCurrentStep > 1) {
      const previousStep = fdFormCurrentStep - 1;
      dispatch(setFDFormCurrentStep(previousStep));
      const creatorId = searchParams.get("creatorId");
      setTimeout(() => {
        router.push(
          `/financial-department/payouts-requests?step=${previousStep}${
            creatorId ? `&creatorId=${creatorId}` : ""
          }`
        );
      }, 100);
    } else {
      router.push("/financial-department/payouts-requests");
    }
  };

  const renderForm = (step?: number) => {
    const creatorId = searchParams.get("creatorId");
    switch (step) {
      case 1:
        return <PaymentProcessStart creatorId={creatorId} />;
      case 2:
        return <PaymentConfirmAmount creatorId={creatorId} />;
      case 3:
        return <PaymentVerificationConfirm creatorId={creatorId} />;
      case 4:
        return <PaymentConfirmFinal />;
      default:
        return null;
    }
  };

  const steps = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];

  return (
    <>
      <div className="relative w-full h-full min-h-screen pb-10">
        <FDOtherHeader />
        <div className="px-7 pt-5 pb-10">
          <div className="px-5 pb-7">
            <button
              type="button"
              className="flex items-center gap-2"
              onClick={handleBack}
            >
              <Image
                src={BackArrow}
                width={30}
                height={30}
                alt="Back Arrow Icon"
                className=""
              />
              <span className="text-[#fff] text-[0.938rem] font-manrope font-bold">
                BACK
              </span>
            </button>
          </div>
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
        <div className="max-w-[100%] mx-auto">
          <form className="">
            <div className="flex flex-col items-center gap-3 mb-6">
              <h3 className="text-[1.563rem] text-[#fff] font-manrope font-bold">
                PROCESS PAYMENT
              </h3>
              <Steps steps={steps} />
            </div>
            <div>{renderForm(fdFormCurrentStep)}</div>
          </form>
        </div>
      </div>
    </>
  );
};
