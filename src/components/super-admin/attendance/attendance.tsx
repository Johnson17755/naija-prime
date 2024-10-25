import Image from "next/image";
import Header from "../header";
import { LuRefreshCw } from "react-icons/lu";
import ActiveReviews from "./_component/ActiveReviews";

const Attendance = () => {
  return (
    <div className="bg-[#b7b7b7] h-screen">
      <Header />
      <div className="font-manrope mt-5 px-8">
        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col gap-1 bg-[#EDEDED]">
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center bg-[#73737324] py-1 px-2">
              <h4 className="text-[20px] font-semibold">PERFORMANCE</h4>
              <h4 className="text-[20px] font-semibold">DATE</h4>
              <div className="flex justify-between items-center">
                <h4 className="text-[20px] font-semibold">STATUS</h4>
                <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                  <LuRefreshCw style={{ color: "#008001" }} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center py-1 text-sm font-semibold px-2">
              <h5 className="font-semibold text-base">NEXT REVIEW</h5>
              <h5 className="font-semibold text-base">20 May 2024</h5>
              <div className="text-center py-1 bg-[#0E09EF7D] border text-white">
                <h5>Not Yet Started</h5>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center py-1 text-sm font-semibold px-2">
              <h5 className="font-semibold text-base">LAST REVIEW</h5>
              <h5 className="font-semibold text-base">12 May 2024</h5>
              <div className="text-center py-1 bg-[#0BF931] border">
                <h5>Completed</h5>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center py-1 text-sm font-semibold px-2">
              <h5 className="font-semibold text-base">CURRENT GOALS</h5>
              <h5 className="font-semibold text-base"></h5>
              <div className="text-center py-1 bg-[#73737366] border border-black">
                <h5>17</h5>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center py-1 text-sm font-semibold px-2">
              <h5 className="font-semibold text-base">ACTIVE PLANS</h5>
              <h5 className="font-semibold text-base"></h5>
              <div className="text-center py-1 bg-[#73737366] border border-black">
                <h5>89</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#EDEDED]">
            <div className="flex justify-between items-center px-2 py-1 bg-[#73737324]">
              <h4 className="text-[20px] font-semibold">GOAL</h4>
              <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                <LuRefreshCw style={{ color: "#008001" }} />
              </div>
            </div>
            <div className="flex flex-col gap-1 px-2 py-4">
              <div className="grid grid-cols-[1fr_1fr] bg-[#69696978] py-2 font-semibold px-2">
                <h5>GOAL NAME</h5>
                <h5>PROGRESS</h5>
              </div>
              <div className="grid grid-cols-[1fr_1fr] items-center text-sm font-semibold px-2 py-2">
                <h5 className="font-semibold text-base">
                  USER TEMPLATE UPDATE
                </h5>
                <div className="relative bg-[#0CA424] w-64 h-6 border border-black">
                  <div className="absolute top-0 left-2/3 w-1/3 h-full bg-[#D9D9D9]"></div>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_1fr] items-center text-sm font-semibold px-2 py-2">
                <h5 className="font-semibold text-base">
                  UPDATE PAYMENT SYSTEM
                </h5>
                <div className="relative bg-[#0CA424] w-64 h-6 border border-black">
                  <div className="absolute top-0 left-2/3 w-1/3 h-full bg-[#D9D9D9]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-manrope mt-5 px-8">
        <ActiveReviews />
      </div>
    </div>
  );
};

export default Attendance;
