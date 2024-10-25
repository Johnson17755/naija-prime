import Image from "next/image";
import backgroundImage from "../../../../public/Content-bg-image-icon.svg";
import logoCenter from "../../../../public/Content-dept-logoCenter.svg";
import ViewersBarChart from "./_component/ViewersBarChart";
import HomeHeader from "../homeHeader";
import { LuRefreshCw } from "react-icons/lu";
import RejectedContent from "./_component/RejectedContent";
import AcceptedContent from "./_component/AcceptedContent";
import TotalViews from "./_component/TotalViews";
import NewSubmits from "./_component/NewSubmits";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={backgroundImage} alt="" className="w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <Image src={logoCenter} alt="" className="w-[25rem]" />
      </div>
      <HomeHeader />
      <div className="font-manrope px-8">
        <h2 className="text-[22px] font-semibold mt-2 mb-2 text-white">
          Content Review Dashboard
        </h2>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <NewSubmits />
          </div>
          <div>
            <RejectedContent />
          </div>
          <div>
            <AcceptedContent />
          </div>
          <div>
            <TotalViews />
          </div>
        </div>
      </div>
      <div className="font-manrope mt-4 px-8">
        <h2 className="text-md font-semibold mt-7 mb-2 text-white">
          Viewers Ananlysis
        </h2>
        <div className="w-[800px] mx-auto bg-[#0BF93170] mt-10">
          <div className="flex justify-end pt-2 pr-2">
            <div className="bg-[#00000075] p-1 rounded-full border border-black cursor-pointer">
              <LuRefreshCw style={{ color: "#008001", strokeWidth: 3 }} />
            </div>
          </div>
          <ViewersBarChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
