import Image from "next/image";
import Header from "../header";
import TodoTask from "./_component/TodoTask";
import ActiveOngoingTask from "./_component/ActiveOngoingTask";
import Summary from "./_component/Summary";
import Leads from "./_component/Leads";
import StaffAttendance from "./_component/StaffAttendance";
import TotalUsers from "./_component/TotalUsers";
import TotalContents from "./_component/TotalContents";
import TotalRevenue from "./_component/TotalRevenue";
import TotalIncome from "./_component/TotalIncome";
import TotalPayouts from "./_component/TotalPayouts";

const Dashboard = () => {
  return (
    <div className="bg-[#b7b7b7] h-screen">
      <Header />
      <div className="font-manrope px-8">
        <h2 className="text-[22px] font-semibold mt-4 mb-2">
          Good Morning, CEO
        </h2>
        <div className="grid grid-cols-5 md:grid-cols-5 sm:grid-cols-5 gap-3 rounded">
          <div >
            <TotalUsers />
          </div>
          <div>
            <TotalContents />
          </div>
          <div>
            <TotalRevenue />
          </div>
          <div>
            <TotalIncome />
          </div>
          <div>
            <TotalPayouts />
          </div>
        </div>
      </div>
      <div className="font-manrope mt-5 px-8">
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5">
          <div>
            <Summary />
          </div>
          <div>
            <Leads />
          </div>
          <div>
            <StaffAttendance />
          </div>
        </div>
      </div>
      <div className="font-manrope mt-5 px-8">
        <div className="grid grid-cols-2 gap-5">
          <div className="px-3 py-2 bg-[#EDEDED]">
            <TodoTask />
          </div>
          <div className="px-3 py-2 bg-[#EDEDED]">
            <ActiveOngoingTask />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;