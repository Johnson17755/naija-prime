import Header from "../header";
import { LuRefreshCw } from "react-icons/lu";
import EmployeeBarChart from "./_component/EmployeeBarChart";
import SalaryBarChart from "./_component/SalaryBarChart";
import ContractPieChart from "./_component/ContractPieChart";
import StatusPieChart from "./_component/StatusPieChart";
import HiredPieChart from "./_component/HiredPieChart";
import HeadCountPieChart from "./_component/HeadCount";

const Hr = () => {
  return (
    <div className="bg-[#b7b7b7] pb-5">
      <Header />
      <div className="hr-scroll-container">
        <div className="px-8 mt-5 font-manrope">
          <div className="flex justify-between items-center h-full">
            <div className="flex-grow flex justify-center items-center">
              <h5 className="text-2xl text-black font-bold">
                Human Resources Overview
              </h5>
            </div>
            <div className="flex items-center">
              <h6 className="font-bold mr-2 text-white">Last Update:</h6>
              <select name="month" id="month" className="text-xs selectMonth">
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 px-8 font-manrope mt-4">
          <div className="">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Total Salary (YTD)</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">5,490,000</h6>
                    <p className="text-[14px] text-[#0CA424]">+ 2.5%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Average Salary</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">60,000</h6>
                    <p className="text-[14px] text-[#F40A0A]">- 2.5%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Average Age</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">35</h6>
                    <p className="text-[14px]">0.0%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Permanent Rate</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">95%</h6>
                    <p className="text-[14px] text-[#0CA424]">+ 2.5%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-3 py-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeadCountPieChart />
          </div>
          <div className="">
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Turnover Rate</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">1.2%</h6>
                    <p className="text-[14px] text-[#F40A0A]">- 0.9%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Absenteeism Rate</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">1.1%</h6>
                    <p className="text-[14px] text-[#0CA424]">+ 55.0%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Hired</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">10</h6>
                    <p className="text-[14px]">0.0%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 bg-[#D9D9D9]">
                  <div className="flex items-center justify-center bg-[#9999994F] py-1 px-3 text-sm">
                    <h5 className="font-bold text-sm">Left</h5>
                  </div>
                  <div className="flex flex-col justify-center items-center px-3 py-2 font-bold">
                    <h6 className="text-xl">20</h6>
                    <p className="text-[14px]">0.0%</p>
                    <p className="text-[10px]">vs previous month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-8 font-manrope mt-4">
          <div className="px-3 py-2 bg-[#D9D9D9]">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold">Employees</h4>
                <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                  <LuRefreshCw style={{ color: "#008001" }} />
                </div>
              </div>
              <div>
                <EmployeeBarChart />
              </div>
            </div>
          </div>
          <div className="px-3 py-2 bg-[#D9D9D9]">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold">Total Salary Overview</h4>
                <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                  <LuRefreshCw style={{ color: "#008001" }} />
                </div>
              </div>
              <div>
                <SalaryBarChart />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 px-8 font-manrope mt-4">
          <div className="px-3 py-2 bg-[#D9D9D9]">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">
                  Type of Employment Contract
                </h4>
                <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                  <LuRefreshCw style={{ color: "#008001" }} />
                </div>
              </div>
              <div>
                <ContractPieChart />
              </div>
            </div>
          </div>
          <div className="px-3 py-2 bg-[#D9D9D9]">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">Employment Status</h4>
                <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                  <LuRefreshCw style={{ color: "#008001" }} />
                </div>
              </div>
              <div>
                <StatusPieChart />
              </div>
            </div>
          </div>
          <div className="px-3 py-2 bg-[#D9D9D9]">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold">Hired vs Left</h4>
                <div className="flex items-center gap-3">
                  <select
                    name="month"
                    id="month"
                    className="text-xs selectMonthTwo"
                  >
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                  <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                    <LuRefreshCw style={{ color: "#008001" }} />
                  </div>
                </div>
              </div>
              <HiredPieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hr;
