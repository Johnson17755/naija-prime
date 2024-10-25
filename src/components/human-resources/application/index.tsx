"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "../../../../public/assets/search-icon.svg";
import FilterIcon from "../../../../public/assets/filter-icon.svg";
import ExportIcon from "../../../../public/assets/export-icon.svg";
import { AllTabContent } from "./_component/AllTabContent";
import { InProcessTabContent } from "./_component/InProcessTabContent";
import { PendingTabContent } from "./_component/PendingTabContent";
import { ShortlistedTabContent } from "./_component/ShortlistedTabContent";
import { RejectedTabContent } from "./_component/RejectedTabContent";
import { PopupModal } from "./_component/Popup";
import { ModalBox } from "./_component/ApplicationModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getJobApplication,
  fetchShortlistedApplications,
  fetchRejectedApplications,
} from "@/redux/application/actions";

export const Application = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [popupButton, setPopupButton] = useState(false);

  const dispatch = useAppDispatch();

  const { allApplications, shortlistedApplications, rejectedApplications } =
    useAppSelector((state) => state.applications);

  const pendingApplications = allApplications.filter(
    (app: any) =>
      !shortlistedApplications.includes(app) &&
      !rejectedApplications.includes(app)
  );

  useEffect(() => {
    const fetchApplications = async () => {
      await getJobApplication();
      await fetchShortlistedApplications();
      await fetchRejectedApplications();
    };

    fetchApplications();
    const interval = setInterval(fetchApplications, 10000);
    return () => clearInterval(interval);
  }, []);

  const inProgressApplications = pendingApplications;

  const tabs = [
    { label: "All", count: allApplications.length },
    { label: "Shortlisted", count: shortlistedApplications.length },
    { label: "In process", count: inProgressApplications.length },
    { label: "Pending", count: pendingApplications.length },
    { label: "Rejected", count: rejectedApplications.length },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return <AllTabContent applications={allApplications} />;
      case "Shortlisted":
        return <ShortlistedTabContent applications={shortlistedApplications} />;
      case "In process":
        return <InProcessTabContent />;
      case "Pending":
        return <PendingTabContent />;
      case "Rejected":
        return <RejectedTabContent applications={rejectedApplications} />;
      default:
        return null;
    }
  };

  const closeModal = () => setPopupButton((prev) => !prev);

  return (
    <>
      <section className="w-full flex flex-col bg-[#929392] h-screen pb-[3rem] pt-[1.5rem] pl-[1.5rem] z-40">
        <div className="flex items-center justify-end pr-16">
          <button
            type="button"
            className="bg-[#0E09EF] w-[7.3rem] h-[1.938rem] px-3 gap-6 rounded-md flex items-center cursor-pointer"
            onClick={() => setPopupButton((prev) => !prev)}
          >
            <span className="bg-[#fff] text-[1.8rem] rounded-full size-6 flex justify-center items-center">
              &#x002B;
            </span>
            <span className="text-[#fff] text-[0.938rem] font-manrope font-extrabold">
              New
            </span>
          </button>
        </div>
        <div className="bg-[#d9d8d8] mt-1 flex-1 overflow-hidden">
          <div className="bg-[#cdcdcc] p-3 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {tabs?.map((tab, index) => (
                <span
                  key={index}
                  onClick={() => setActiveTab(tab.label)}
                  className={`relative text-[0.938rem] text-[#000] font-manrope whitespace-nowrap cursor-pointer ${
                    activeTab === tab.label ? "text-[#3a74e5] font-bold" : ""
                  }`}
                >
                  {tab.label}({tab.count})
                  {activeTab === tab.label && (
                    <span
                      className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 h-[2px] bg-[#12a529]"
                      style={{ width: "110%" }}
                    ></span>
                  )}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-end gap-5">
              <form className="relative flex items-center w-[25%]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-[1.5rem] focus:border-none focus:outline-none border-1 rounded-md placeholder:text-[0.8rem] pl-7"
                />
                <Image
                  src={SearchIcon}
                  width={15}
                  height={15}
                  alt="Search Icon"
                  className="absolute left-0 ml-2 cursor-pointer"
                />
              </form>
              <div className="flex items-center gap-1 cursor-pointer">
                <Image
                  src={FilterIcon}
                  width={15}
                  height={15}
                  alt="Filter Icon"
                  className=""
                />
                <span className="text-[0.938rem] text-[#4C4C4C] font-manrope">
                  Filter
                </span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <Image
                  src={ExportIcon}
                  width={20}
                  height={20}
                  alt="Export Icon"
                  className=""
                />
                <span className="text-[0.938rem] text-[#4C4C4C] font-manrope">
                  Export
                </span>
              </div>
            </div>
          </div>
          <div className="pt-3 pb-24 w-full h-full flex flex-col gap-1 border-l-4 border-r-4 overflow-y-auto flex-1">
            {renderContent()}
          </div>
          <div>
            <PopupModal trigger={popupButton}>
              <ModalBox closeModal={closeModal} />
            </PopupModal>
          </div>
        </div>
      </section>
    </>
  );
};
