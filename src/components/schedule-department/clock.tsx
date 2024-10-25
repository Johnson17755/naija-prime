"use client";

import { useEffect, useState } from "react";

const Clock = () => {
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
    <div>
      <div className="flex items-center gap-2 mb-2 justify-end">
        <span className="text-[#fff] font-semibold">Clock</span>
        <div className="bg-[#D9D9D9B0] py-[0.1rem] px-[1.2rem] text-[0.8rem]">
          {currentTime}
        </div>
      </div>
    </div>
  );
};

export default Clock;
