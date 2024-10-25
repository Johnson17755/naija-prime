"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MarkConfirmLogo from "../../../../../public/assets/fd-confirm-payment-icon.svg";
import Image from "next/image";

export const PaymentConfirmFinal = () => {
  const router = useRouter();

  return (
    <>
      <div className="max-w-[35%] 2xl:max-w-[25%] mx-auto flex flex-col gap-3">
        <div className="relative flex flex-col justify-center items-center gap-2 h-fit w-[43%] mx-auto rounded-md p-7 rounded-tl-[90%] rounded-tr-[90%] rounded-bl-[90%] rounded-br-[90%] bg-[#0BF931BF] my-7">
          <Image
            src={MarkConfirmLogo}
            width={80}
            height={80}
            alt="Payment Confirm Icon mark"
            className=""
          />
        </div>
        <h3 className="text-[#fff] text-[1.563rem] font-manrope font-bold text-center">
          Payment Confirmed
        </h3>
      </div>
      <div
        className="bg-[#0BF931BF] w-fit px-6 py-1 text-[1.25rem] text-[#000] font-manrope font-bold cursor-pointer ml-10 mt-16"
        onClick={() => router.push("/financial-department/payouts-requests")}
      >
        BACK TO REQUESTS
      </div>
    </>
  );
};
