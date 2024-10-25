import Image from "next/image";
import React from "react";
import facebookIcon from "../../../../../public/Facebook-icon.png";
import instagramIcon from "../../../../../public/Instagram-icon.svg";
import twitterIcon from "../../../../../public/Twitter-icon.png";
import emailIcon from "../../../../../public/Gmail-icon.svg";

const Leads = () => {
  return (
    <div className="flex flex-col gap-1 px-3 py-2 bg-[#EDEDED]">
      <h4 className="text-[16px] text-[#999999] font-semibold">Leads</h4>
      <div className="flex justify-between items-center bg-[#73737347] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={instagramIcon} alt="" className="w-5" />
          </div>
          <div>
            <h5 className="font-semibold text-sm">Instagram</h5>
            <p className="text-[8px] text-white leading-[4px]">Community 1</p>
          </div>
        </div>
        <div className="bg-[#E81A1A7A] p-1">
          <p className="font-semibold text-xs">17.9k</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#73737347] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={facebookIcon} alt="" className="w-5" />
          </div>
          <div>
            <h5 className="font-semibold text-sm">Facebook</h5>
            <p className="text-[8px] text-white leading-[4px]">Community 1</p>
          </div>
        </div>
        <div className="bg-[#6386A6C2] p-1">
          <p className="font-semibold text-xs">17.9k</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#73737347] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={twitterIcon} alt="" className="w-5" />
          </div>
          <div>
            <h5 className="font-semibold text-sm">X (formally) Twitter</h5>
            <p className="text-[8px] text-white leading-[4px]">Community 1</p>
          </div>
        </div>
        <div className="bg-[#7373737D] p-1">
          <p className="font-semibold text-xs">17.9k</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#73737347] py-1 px-3">
        <div className="flex items-center gap-3">
          <div>
            <Image src={emailIcon} alt="" className="w-5" />
          </div>
          <div>
            <h5 className="font-semibold text-sm">Email</h5>
            <p className="text-[8px] text-white leading-[4px]">Community 1</p>
          </div>
        </div>
        <div className="bg-[#EDEDED94] p-1">
          <p className="font-semibold text-xs">17.9k</p>
        </div>
      </div>
    </div>
  );
};

export default Leads;
