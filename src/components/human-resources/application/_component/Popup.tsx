import React, { ReactNode } from "react";

interface PopupProps {
  trigger: boolean;
  children: ReactNode;
}

export const PopupModal = ({ trigger, children }: PopupProps) => {
  return trigger ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#d9d8d8] rounded-md shadow-md max-w-[70%] 2xl:max-w-[50%] h-[75%] p-6 overflow-auto relative top-[8%] 2xl:top-[4%] left-[10%] ">
        {children}
      </div>
    </div>
  ) : null;
};

// export const PopupModal = ({ trigger, children }: PopupProps) => {
//   return trigger ? (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg w-[80%] h-[90%] p-6 overflow-auto">
//         {children}
//       </div>
//     </div>
//   ) : null;
// };
