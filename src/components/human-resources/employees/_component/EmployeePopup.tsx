import React, { ReactNode } from "react";

interface EmployeePopupProps {
  trigger: boolean;
  children: ReactNode;
}

export const EmployeePopup = ({ trigger, children }: EmployeePopupProps) => {
  return trigger ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#d9d8d8] rounded-md shadow-md max-w-[70%] 2xl:max-w-[50%] h-[75%] p-6 overflow-auto relative top-[8%] 2xl:top-[4%] left-[10%]">
        {children}
      </div>
    </div>
  ) : null;
};
