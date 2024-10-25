"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import { Application } from "@/types";
import { store } from "@/redux/store";
import {
  removeApplication,
  setIsRejected,
  setIsShortlisted,
} from "@/redux/application/applicationSlice";
import { alertNotification } from "@/redux/auth/actions";
import { API } from "@/utils/api";
import { AxiosError } from "axios";

interface AllTabContentProps {
  applications: Application[];
}

export const AllTabContent = ({ applications }: AllTabContentProps) => {
  const [currentDate, setCurrentDate] = useState("");
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const dispatch = store.dispatch;

  const activeRowStyle = (rowItem: number) =>
    rowItem === activeRow ? "bg-[#01FF2A42]" : "bg-[#fff]";

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      setCurrentDate(`${day}.${month}.${year}`);
    };

    updateDate();
  }, []);

  // const formatCreatedOn = (createdOn: any): any => {
  //   const now = moment();
  //   const duration = moment.duration(now.diff(createdOn.toDate()));
  //   if (duration.asSeconds() < 10) {
  //     return "just now";
  //   } else {
  //     return moment(createdOn.toDate()).fromNow();
  //   }
  // };

  const handleShortlist = async (application: Application) => {
    dispatch(setIsShortlisted(true));
    try {
      const response = await API.post(
        `/job-applications/shortlists?applicationId=${application.id}`
      );
      const jsonData = response.data;
      if (jsonData) {
        dispatch(setIsShortlisted(false));
        dispatch(removeApplication(application.id));
        await API.delete(`/job-applications/${application.id}`);
        alertNotification("Job shortlisted successfully.", "success");
      } else {
        dispatch(setIsShortlisted(false));
        alertNotification(
          "Job failed to shortlist. Please try again.",
          "error"
        );
      }
    } catch (error) {
      dispatch(setIsShortlisted(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  const handleReject = async (application: Application) => {
    dispatch(setIsRejected(true));
    try {
      const response = await API.post(
        `/job-applications/rejects?applicationId=${application.id}`
      );
      const jsonData = response.data;
      if (jsonData) {
        dispatch(setIsRejected(false));
        dispatch(removeApplication(application.id));
        await API.delete(`/job-applications/${application.id}`);
        alertNotification("Job rejected successfully.", "success");
      } else {
        dispatch(setIsRejected(false));
        alertNotification("Job failed to reject. Please try again.", "error");
      }
    } catch (error) {
      dispatch(setIsRejected(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    }
  };

  return (
    <>
      {applications?.map((content: any, index: number) => {
        const imageUrl = content.governmentIdUrl?.startsWith("http")
          ? content.governmentIdUrl
          : content.governmentIdUrl?.startsWith("https")
          ? content.governmentIdUrl
          : "/";

        return (
          <div
            key={index}
            className={`${activeRowStyle(
              index
            )} w-full px-5 flex items-center justify-between py-1 cursor-pointer`}
            onClick={() => setActiveRow(index)}
          >
            <div className="flex items-center gap-3">
              <Image
                src={imageUrl}
                width={50}
                height={50}
                alt="Government ID"
                className="object-cover w-[4rem] h-[4rem] rounded-full"
              />
              <div className="flex flex-col font-manrope">
                <span className="text-[0.938rem] text-[#000] font-bold whitespace-nowrap">
                  {content.lastName} {content.firstName}
                </span>
                <span className="text-[0.938rem] text-[#000] font-normal whitespace-nowrap">
                  <span>
                    {" "}
                    {moment(new Date(content.createdOn)).fromNow()} /{" "}
                  </span>
                  <span>Position: {content.positionAppliedFor}</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-10 2xl:gap-32">
              <span className="bg-[#bdc6e8] text-[#0E09EF] text-[0.938rem] font-manrope font-semibold w-[6rem] 2xl:w-[7rem] h-[1.5rem] inline-block text-center">
                Pending
              </span>
              <div className="flex items-center gap-5">
                <span
                  className="bg-[#f90d0d] text-[#000] text-[0.938rem] font-manrope font-semibold w-[6rem] 2xl:w-[7rem] h-[1.5rem] inline-block text-center"
                  onClick={() => handleReject(content)}
                >
                  Rejected
                </span>
                <span
                  className="bg-[#53fe6d] text-[#000] text-[0.938rem] font-manrope font-semibold w-[6rem] 2xl:w-[7rem] h-[1.5rem] inline-block text-center"
                  onClick={() => handleShortlist(content)}
                >
                  Shortlisted
                </span>
              </div>
              <div className="flex-1 text-end">{currentDate}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
