"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import leftArrow from "../../../../../public/Arrow 2.svg";
import rightArrow from "../../../../../public/Arrow 5.svg";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

interface Payment {
  contentCreatorName: string;
  productionName: string;
  amountWithdrawn: number;
  adminName: string;
  adminImageUrl: string;
  paymentStatus: string;
  timestamp: string;
}

const AllTabContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchPaymentRecords = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/superAdmin/successful-reviews`,
          { params: { page: currentPage } }
        );
        setPayments(response.data);
        // Assuming the API response contains total pages
        // setTotalPages(response.data.totalPages || 10);
      } catch (error) {
        console.error("Error fetching payments records:", error);
      }
    };

    fetchPaymentRecords();
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date
      .toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(",", "");
  };

  return (
    <div className="flex flex-col gap-1 py-2">
      <div className="grid grid-cols-5 bg-[#FDF7F7] py-2 px-3 font-semibold">
        <h5>Creator’s Info</h5>
        <h5>Amount</h5>
        <h5>Payout Admin</h5>
        <h5>Status</h5>
        <h5>Date</h5>
      </div>
      {payments.map((payment, index) => (
        <div
          key={index}
          className="grid grid-cols-5 items-center bg-[#9999997D] py-1 px-3 text-sm font-semibold"
        >
          <div>
            <h5 className="font-semibold text-md">
              {payment.contentCreatorName}
            </h5>
            <p className="leading-[10px] font-normal text-[11px]">
              {payment.productionName}
            </p>
          </div>
          <h5>{payment.amountWithdrawn.toFixed(2)}</h5>
          <div className="flex items-center gap-3">
            <Image
              src={payment.adminImageUrl}
              alt=""
              className="h-8 rounded-[50%]"
              width={32}
              height={32}
            />
            <div>
              <h5 className="font-semibold text-md">{payment.adminName}</h5>
            </div>
          </div>
          <div
            className={`text-center py-1 mr-28 border border-black ${
              payment.paymentStatus === "successful"
                ? "bg-[#01FF2A91]"
                : payment.paymentStatus === "failed"
                ? "bg-[#F90D0D] text-white"
                : "bg-[#1B3CAF4A] text-[#0E09EF]"
            }`}
          >
            <h5>{payment.paymentStatus}</h5>
          </div>
          <h5>{formatDate(payment.timestamp)}</h5>
        </div>
      ))}
      <div className="flex justify-between pt-2">
        <button
          onClick={handlePrevious}
          className={`flex items-center gap-1 border border-black py-1 px-3 rounded-md font-semibold bg-[#F7F2F2] ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          <Image src={leftArrow} alt="previous" className="w-4" />
          <p className="text-xs">Previous</p>
        </button>
        <div className="flex items-center">
          <div className="flex items-center justify-center p-1 w-5 h-5 bg-[#9999994F]">
            {currentPage}
          </div>
          <div className="ml-2 mr-1">of</div>
          <div className="flex items-center justify-center p-1 w-5 h-5">
            {totalPages}
          </div>
        </div>
        <button
          onClick={handleNext}
          className={`flex items-center gap-1 border border-black py-1 px-3 rounded-md font-semibold bg-[#F7F2F2] ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        >
          <p className="text-xs">Next</p>
          <Image src={rightArrow} alt="next" className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default AllTabContent;
