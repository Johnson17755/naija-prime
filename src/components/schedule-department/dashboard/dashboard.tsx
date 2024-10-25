import Image from "next/image";
import backgroundImage from "../../../../public/Content-bg-image-icon.svg";
import logoCenter from "../../../../public/Content-dept-logoCenter.svg";
import Header from "../header";
import Calendar from "./_component/ScheduleCalendar";
import ScheduledCount from "./_component/ScheduledCount";
import ScheduleRequestsCount from "./_component/ScheduleRequestsCount";
import AcceptedCount from "./_component/AcceptedCount";

const ScheduleDepartment = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={backgroundImage} alt="" className="w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <Image src={logoCenter} alt="" className="w-[25rem]" />
      </div>
      <Header />
      <div className="font-manrope px-8">
        <h2 className="text-[22px] font-semibold mt-2 mb-2 text-white">
          Scheduler Dashboard
        </h2>
        <div className="grid grid-cols-3 gap-16">
          <div>
            <ScheduleRequestsCount />
          </div>
          <div>
            <AcceptedCount />
          </div>
          <div>
            <ScheduledCount />
          </div>
        </div>
      </div>
      <div className="font-manrope mt-4 px-8">
        <h2 className="text-md font-semibold mt-7 mb-2 text-white">
          Schedule Calender
        </h2>
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default ScheduleDepartment;
