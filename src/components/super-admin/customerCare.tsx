import Image from "next/image";
import Header from "./header";
import imgEllipse from "../../../public/Ellipse 46.svg";
import caseIcon from "../../../public/Case-icon.svg";
import phoneIcon from "../../../public/Phone-icon.svg";
import chatIcon from "../../../public/Chat-icon.svg";

const CustomerCare = () => {
  return (
    <div className="bg-[#b7b7b7] h-screen">
      <Header />
      <div className="mt-5 px-8 text-white font-bold text-[20px]">
        <h2>COSTUMER CARE OVERVIEW</h2>
      </div>
      <div className="grid grid-cols-3 gap-2 font-inter mt-5 px-8 text-white">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-2 bg-[#0D08F4] h-11">
            <Image src={phoneIcon} alt="" className="w-10 h-10" />
            <h4 className="text-[20px] font-bold">Phone</h4>
          </div>
          <div className="flex gap-2 h-40">
            <div className="bg-[#0BF931] p-2 rounded-lg flex flex-col justify-between">
              <h6 className="text-[10px] text-black font-bold">Available</h6>
              <div className="flex justify-center items-center h-full">
                <h5 className="text-2xl text-black font-bold">19</h5>
              </div>
            </div>
            <div className="flex flex-col gap-2 h-40 w-full">
              <div className="grid grid-cols-2 gap-2 h-1/2">
                <div className="flex flex-col justify-center items-center gap-1 bg-[#1F10C3B5] py-1 px-3">
                  <h5 className="font-bold text-xs">In queue</h5>
                  <h6 className="font-bold text-[#E81313] text-xl">5</h6>
                </div>
                <div className="flex flex-col justify-center items-center gap-1 bg-[#1F10C3B5] py-1 px-3">
                  <h5 className="font-bold text-xs">In Progress</h5>
                  <h6 className="font-bold text-[#0BF931] text-xl">10</h6>
                </div>
              </div>
              <div className="bg-[#1F10C3B5] h-1/2">
                <div className="flex flex-col gap-1 py-1 px-3">
                  <h5 className="font-bold text-xs">Oldest missed call</h5>
                  <div className="flex justify-center items-center">
                    <h6 className="font-extrabold text-xl">3 days 14:13:45</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-2 bg-[#0D08F4] h-11">
            <Image src={chatIcon} alt="" className="w-10 h-10" />
            <h4 className="text-[20px] font-bold">Chat</h4>
          </div>
          <div className="flex flex-col gap-2 h-40">
            <div className="grid grid-cols-2 gap-2 h-1/2">
              <div className="flex flex-col gap-1 bg-[#1F10C3B5]  py-1 px-3">
                <div>
                  <h5 className="font-bold text-xs">Total</h5>
                  <p className="text-[10px] font-light">Current week</p>
                </div>
                <div className="flex justify-center items-center">
                  <h6 className="font-bold text-xl">100</h6>
                </div>
              </div>
              <div className="flex flex-col gap-1 bg-[#1F10C3B5]  py-1 px-3">
                <div>
                  <h5 className="font-bold text-xs">Average wait time</h5>
                  <p className="text-[10px] font-light">Today</p>
                </div>
                <div className="flex justify-center items-center">
                  <h6 className="font-bold text-xl">00:30</h6>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 h-1/2">
              <div className="flex flex-col gap-1 bg-[#1F10C3B5]  py-1 px-3">
                <div>
                  <h5 className="font-bold text-xs">% good ratings</h5>
                  <p className="text-[10px] font-light">Current month</p>
                </div>
                <div className="flex justify-center items-center">
                  <h6 className="font-bold text-[#0BF931] text-xl">80%</h6>
                </div>
              </div>
              <div className="flex flex-col gap-1 bg-[#1F10C3B5] py-1 px-3">
                <div>
                  <h5 className="font-bold text-xs">Average duration</h5>
                  <p className="text-[10px] font-light">Current week</p>
                </div>
                <div className="flex justify-center items-center">
                  <h6 className="font-bold text-xl">22:50</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-2 bg-[#0D08F4] h-11">
            <Image src={caseIcon} alt="" className="w-10 h-10" />
            <h4 className="text-[20px] font-bold">Cases</h4>
          </div>
          <div className="flex flex-col gap-3 bg-[#1F10C3B5] h-40 py-1 px-3">
            <div>
              <h5 className="font-bold">CSAT Score</h5>
              <p className="text-xs font-light">Current month</p>
            </div>
            <div className="flex justify-center items-center gap-7">
              <div className="flex flex-col items-center gap-1">
                <Image src={imgEllipse} alt="" className="w-16" />
                <h6 className="text-xs font-light">Emeka John</h6>
                <p className="font-bold text-xs">30%</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image src={imgEllipse} alt="" className="w-16" />
                <h6 className="text-xs font-light">Juliet Anna</h6>
                <p className="font-bold text-xs">30%</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image src={imgEllipse} alt="" className="w-16" />
                <h6 className="text-xs font-light">Mike Gabriel</h6>
                <p className="font-bold text-xs">30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 font-inter mt-5 px-8 text-white">
        <div className="px-3 py-2 bg-[#1F10C3B5]">
          <div className="flex flex-col gap-1">
            <div>
              <h4 className="text-[14px] font-semibold">Current Month</h4>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#2214CDAB] py-2 px-3 font-semibold text-xs">
              <h5>Employee</h5>
              <h5>Status</h5>
              <h5 className="text-center">Completed</h5>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">JAMES BONE</h5>
              </div>
              <div className="text-center py-1 bg-[#0BF931] text-black mr-10 border border-black">
                <h5>Active</h5>
              </div>
              <h5 className="text-center">50</h5>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Gabriel Jane</h5>
              </div>
              <div className="text-center py-1 bg-[#F90D0D] mr-10 border border-black">
                <h5>Away</h5>
              </div>
              <h5 className="text-center">50</h5>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Emmanuel Ebuka</h5>
              </div>
              <div className="text-center py-1 bg-[#0BF931] text-black mr-10 border border-black">
                <h5>Active</h5>
              </div>
              <h5 className="text-center">50</h5>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">King Uche</h5>
              </div>
              <div className="text-center py-1 bg-[#0BF931] text-black mr-10 border border-black">
                <h5>Active</h5>
              </div>
              <h5 className="text-center">50</h5>
            </div>
            <div className="grid grid-cols-[2fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Juliet Ife</h5>
              </div>
              <div className="text-center py-1 bg-[#F90D0D] mr-10 border border-black">
                <h5>Away</h5>
              </div>
              <h5 className="text-center">50</h5>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 bg-[#1F10C3B5]">
          <div className="flex flex-col gap-1">
            <div>
              <h4 className="text-[14px] font-semibold">Current Month</h4>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] bg-[#2214CDAB] py-2 px-3 font-semibold text-xs">
              <h5>Employee</h5>
              <h5 className="text-center">Total</h5>
              <h5 className="text-center">Missed</h5>
              <h5 className="text-center">Avg.dur</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">JAMES BONE</h5>
              </div>
              <h5 className="text-center">40</h5>
              <h5 className="text-center">5</h5>
              <h5 className="text-center">20:00</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Gabriel Jane</h5>
              </div>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">5</h5>
              <h5 className="text-center">20:00</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Emmanuel Ebuka</h5>
              </div>
              <h5 className="text-center">40</h5>
              <h5 className="text-center">5</h5>
              <h5 className="text-center">30:00</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">King Uche</h5>
              </div>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">5</h5>
              <h5 className="text-center">30:00</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Juliet Ife</h5>
              </div>
              <h5 className="text-center">40</h5>
              <h5 className="text-center">5</h5>
              <h5 className="text-center">30:00</h5>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 bg-[#1F10C3B5]">
          <div className="flex flex-col gap-1">
            <div>
              <h4 className="text-[14px] font-semibold">Current Month</h4>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] bg-[#2214CDAB] py-2 px-3 font-semibold text-xs">
              <h5>Employee</h5>
              <h5 className="text-center">Open</h5>
              <h5 className="text-center">Closed</h5>
              <h5 className="text-center">Avg res</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">JAMES BONE</h5>
              </div>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">6 cases</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Gabriel Jane</h5>
              </div>
              <h5 className="text-center">35</h5>
              <h5 className="text-center">20</h5>
              <h5 className="text-center">10 cases</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Emmanuel Ebuka</h5>
              </div>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">10 cases</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">King Uche</h5>
              </div>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">30</h5>
              <h5 className="text-center">6 cases</h5>
            </div>
            <div className="grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-2 px-3 text-xs font-semibold">
              <div className="flex items-center">
                <Image src={imgEllipse} alt="" className="h-6" />
                <h5 className="font-semibold text-xs">Juliet Ife</h5>
              </div>
              <h5 className="text-center">35</h5>
              <h5 className="text-center">20</h5>
              <h5 className="text-center">6 cases</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
