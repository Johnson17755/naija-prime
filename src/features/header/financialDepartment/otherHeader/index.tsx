"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import EnvilopeIcon from "../../../../../public/assets/envilope-icon.svg";
import NotificationIcon from "../../../../../public/assets/notification-icon.svg";
import ProfileAvartaIcon from "../../../../../public/assets/profile-avarta.png";

export const FDOtherHeader = () => {
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
    <header className="w-full py-3 px-5">
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 self-end pr-[10rem] mb-4">
          <span className="text-[#fff] font-semibold">Clock</span>
          <div className="bg-[#c0c1c1] py-[0.1rem] px-[2rem] text-[0.8rem]">
            {currentTime}
          </div>
        </div>
        <div className="flex justify-end items-center">
          
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
                src={ProfileAvartaIcon}
                width={32}
                height={32}
                alt="Profile Icon"
                className="rounded-full object-cover"
              />
              <div className="flex flex-col items-start">
                <span className="text-[#fff] font-semibold">Accepted</span>
                <span className="text-[#fff] font-light text-[0.538rem]">
                  Accountant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
