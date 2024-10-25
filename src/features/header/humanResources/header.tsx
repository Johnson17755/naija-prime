"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "../../../../public/assets/search-icon.svg";
import EnvilopeIcon from "../../../../public/assets/envilope-icon.svg";
import NotificationIcon from "../../../../public/assets/notification-icon.svg";
import ProfileIcon from "../../../../public/assets/profile-img-icon.svg";

export const HRHeader = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full bg-[#888888] py-3 px-5">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 self-end">
          <span className="text-[#fff] font-semibold">Clock</span>
          <div className="bg-[#c0c1c1] py-[0.1rem] px-[1.2rem] text-[0.8rem]">
            {currentTime}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <form className="relative flex items-center">
            <input
              type="text"
              placeholder="Search Here"
              className="w-[34.688rem] p-2 rounded-lg pr-10 pl-8 border-none focus:outline-none"
            />
            <Image
              src={SearchIcon}
              width={22}
              height={22}
              alt="Search Icon"
              className="absolute right-0 mr-4 cursor-pointer"
            />
          </form>
          <div className="flex items-center gap-4">
            <Image
              src={EnvilopeIcon}
              width={35}
              height={35}
              alt="Envilope Icon"
              className=""
            />
            <Image
              src={NotificationIcon}
              width={35}
              height={35}
              alt="Notification Icon"
              className=""
            />
            <div className="flex items-center gap-2">
              <Image
                src={ProfileIcon}
                width={40}
                height={40}
                alt="Profile Icon"
                className=""
              />
              <div className="flex flex-col items-start">
                <span className="text-[#000] font-semibold">Ayo</span>
                <span className="text-[#fff] font-normal text-[0.938rem]">
                  Human Resources
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
