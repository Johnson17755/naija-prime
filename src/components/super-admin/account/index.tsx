"use client";

import Image from "next/image";
import Header from "../header";
import downloadIcon from "../../../../public/Download-icon.svg";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import AllTabContent from "./_component/AllTabContent";
import CompletedTabContent from "./_component/CompletedTabContent";
import PendingTabContent from "./_component/PendingTabContent";
import FailedTabContent from "./_component/FailedTabContent";

const tabs = ["All", "Completed", "Pending", "Failed"];

export const Account = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return <AllTabContent />;
      case "Completed":
        return <CompletedTabContent />;
      case "Pending":
        return <PendingTabContent />;
      case "Failed":
        return <FailedTabContent />;
      default:
        return null;
    }
  };

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

  return (
    <div className="bg-[#b7b7b7] h-screen">
      <Header />
      <div className="font-manrope mt-5 px-8">
        <h2 className="text-[22px] font-semibold mt-4 mb-2 text-white">
          PAYMENT RECORDS OVERVIEW
        </h2>
        <div className="">
          <div className="px-3 py-2 bg-[#D9D9D9]">
            <div className="flex flex-col gap-1 py-2">
              <div className="flex justify-between items-center">
                <h4 className="text-[20px] font-semibold">Transactions</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`border border-black py-1 px-3 rounded-md font-semibold bg-[#F7F2F2] ${
                        activeTab === tab ? "active-tab" : ""
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  <div>
                    <form className="flex items-center relative">
                      <CiSearch
                        size={17}
                        className="absolute left-0 ml-4 cursor-pointer"
                      />
                      <input
                        type="text"
                        placeholder="Search"
                        className="font-manrope pl-12 w-[20rem] rounded-md  border border-black border-none focus:outline-none focus:border-none bg-[#FAEFEF] py-1 text-sm"
                      />
                    </form>
                  </div>
                  <button className="flex items-center gap-1 border border-black p-1 bg-[#F3F0F0] cursor-pointer">
                    <Image src={downloadIcon} alt="download" />
                    <p className="text-xs">Download</p>
                  </button>
                </div>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
