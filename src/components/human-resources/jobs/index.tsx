"use client";

import React, { useState, useEffect } from "react";
import { jobsHeaderData } from "@/constants";
import { JobsModal } from "./_component/JobsModal";
import { JobsPopup } from "./_component/JobsPopup";
import { getAllJobOpenings } from "@/redux/jobOpening/actions";
import { useAppSelector } from "@/redux/hooks";

export const Jobs = () => {
  const [popupButton, setPopupButton] = useState(false);
  const { allJobOpenings, isLoading } = useAppSelector(
    (state) => state.jobOpenings
  );

  const closeModal = () => setPopupButton((prev) => !prev);

  // useEffect(() => {
  //   getAllJobOpenings();
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="text-center text-[1.5rem] font-manrope font-medium">
  //       Fetching data...
  //     </div>
  //   );
  // }

  useEffect(() => {
    const fetchJobOpenings = async () => {
      await getAllJobOpenings(); // Function to fetch and update the list
    };
    fetchJobOpenings(); // Initial fetch
    // Poll every 10 seconds
    const intervalId = setInterval(fetchJobOpenings, 10000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <>
      <section className="w-full bg-[#929392] min-h-screen py-[3rem] px-[2rem]">
        <div className="">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#fff] text-[2.5rem] font-sourceSerif font-bold">
              Now Hiring
            </h3>
            <div
              className="flex items-center gap-1 bg-[#0da425] text-[#000] text-[1.25rem] w-fit py-1 px-4 font-sourceSerif font-bold rounded-md cursor-pointer"
              onClick={() => setPopupButton((prev) => !prev)}
            >
              <span>+</span>
              <span>Add Job</span>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[30rem] 2xl:max-h-[50rem]">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-[#818180] sticky top-0">
                <tr>
                  {jobsHeaderData.map((item, index) => (
                    <th
                      scope="col"
                      key={index}
                      className="p-2 mx-1 whitespace-nowrap text-[#000] text-[1.25rem] font-dmSerifText font-light"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#fff]">
                {allJobOpenings.length === 0 ? (
                  <tr>
                    <td
                      colSpan={jobsHeaderData.length}
                      className="p-2 text-center"
                    >
                      No vacancy at the moment
                    </td>
                  </tr>
                ) : (
                  allJobOpenings.map((row: any, index: number) => (
                    <tr
                      key={index}
                      className="text-clip overflow-x-hidden whitespace-nowrap border-b-4 border-[#f0f0f0] text-center font-manrope font-medium p-2 text-[0.938rem] text-[#000]"
                    >
                      <td className="p-2">{row.jobTitle}</td>
                      <td className="p-2">{row.department}</td>
                      <td className="p-2">{row.candidates}</td>
                      <td className="p-2">{row.qualifications}</td>
                      <td className="p-2">{row.salary}</td>
                      <td className="p-2">{row.expireDate}</td>
                      <td className="p-2">
                        <span className="bg-[#0af930] py-0.5 px-3">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div>
            <JobsPopup trigger={popupButton}>
              <JobsModal closeModal={closeModal} />
            </JobsPopup>
          </div>
        </div>
      </section>
    </>
  );
};
