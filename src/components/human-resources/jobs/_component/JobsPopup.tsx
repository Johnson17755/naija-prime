import React, { ReactNode } from "react";

interface JobsProps {
  trigger: boolean;
  children: ReactNode;
}

export const JobsPopup = ({ trigger, children }: JobsProps) => {
  return trigger ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#d9d8d8] rounded-md shadow-md w-[40%] 2xl:max-w-[35%] h-[75%] p-6 overflow-auto relative top-[10%] 2xl:top-[4%] left-[10%]">
        {children}
      </div>
    </div>
  ) : null;
};
