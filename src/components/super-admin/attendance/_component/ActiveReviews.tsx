"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import imgEllipse from "../../../../../public/Ellipse 46.svg";

interface Review {
  imageUrl: string;
  employeeName: string;
  departmentOrRole: string;
  timeOfLogin: string;
  status: string;
  action: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const ActiveReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
         `${baseUrl}/api/v1/superAdmin/active-review`
        );
        console.log(response)
        setReviews(response.data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error fetching active reviews:", error);
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchReviews();
  }, []);


  return (
    <div>
      <div className="px-3 py-2 bg-[#EDEDED]">
        <div className="flex flex-col gap-1">
          <div>
            <h4 className="text-[20px] font-semibold">ACTIVE REVIEWS</h4>
          </div>
          <div className="grid grid-cols-5 bg-[#69696978] text-[#00000070] py-2 px-3 font-semibold">
            <h5>EMPLOYEE</h5>
            <h5>POSITIONS</h5>
            <h5>TIME OF LOGIN</h5>
            <h5>STATUS</h5>
            <h5>ACTION</h5>
          </div>
          <div className="activeReviews-scrollbar">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="grid grid-cols-5 items-center py-2 px-3 text-sm font-semibold"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={review.imageUrl}
                    alt=""
                    width={35}
                    height={35}
                    className="rounded-[50%]"
                  />
                  <h5 className="font-semibold">{review.employeeName}</h5>
                </div>
                <h5 className="font-semibold">{review.departmentOrRole}</h5>
                <h5>
                  {new Date(review.timeOfLogin).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h5>
                <div
                  className={`text-center py-1 ${
                    review.status === "Active"
                      ? "bg-[#0BF931]"
                      : "bg-[#F90D0D] text-white"
                  } mr-28 border border-black`}
                >
                  <h5>{review.status}</h5>
                </div>
                <div
                  className={`text-center text-white py-1 bg-[#F90D0D] mr-28 border border-black`}
                >
                  <h5>{review.action}</h5>
                </div>
              </div>
            ))}
            {error && <div className="text-red-500">Error: {error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveReviews;
