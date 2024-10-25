import Image from "next/image";
import profileIcon from "../../../public/ContentProfile-icon.svg";
import { AiOutlineMail } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Clock from "./clock";

const SubmissionHeader = () => {
  return (
    <div>
      <div className="pt-3 pb-3 px-8">
        <Clock />
        <div className="flex justify-between items-center">
          <div>
            <form className="flex items-center relative">
              <input
                type="text"
                placeholder="Search Here"
                className="font-manrope w-[30rem] pl-5 pr-12 bg-[#FEFEFE] rounded-lg border-none focus:outline-none focus:border-none"
              />
              <CiSearch
                size={20}
                className="absolute right-0 mr-4 cursor-pointer"
              />
            </form>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-white p-0.5">
              <AiOutlineMail size={28} />
            </div>
            <div className="bg-white p-0.5">
              <RiNotification2Line size={28} style={{ color: "#0ca424" }} />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-[50%] bg-white">
                <Image src={profileIcon} alt="" className="w-8" />
              </div>
              <div className="flex flex-col font-manrope">
                <h3 className="font-semibold text-white">Accepted</h3>
                <p className="text-[10px] text-white font-light">
                  Content Supervisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionHeader;
