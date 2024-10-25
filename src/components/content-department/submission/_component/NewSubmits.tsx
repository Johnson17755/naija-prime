"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const NewSubmits = () => {
  const [newSubmitsCount, setNewSubmitsCount] = useState<number>(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchNewSubmitCount = async () => {
      try {
        const response = await axios.get<number>(
          `${baseUrl}/api/v1/contentReview/count-new-submit`
        );
        setNewSubmitsCount(response.data); // Directly using the number from response
      } catch (error) {
        console.error("Error fetching new submits count:", error);
      }
    };

    fetchNewSubmitCount();
  }, []);

  return (
    <div>
      <div className="font-manrope px-8">
        <div className="flex justify-between my-2">
          <h2 className="text-[22px] font-semibold text-white">
            New Submissions
          </h2>
          <div className="flex items-center gap-4">
            <h5 className="text-[18px] font-semibold text-white">Total</h5>
            <div className="bg-[#0BF931] py-1 px-5">
              <p className="text-xs font-bold">
                {newSubmitsCount.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSubmits;
