"use client";

import { contentDepartmentNavItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import exitIcon from "../../../public/assets/exit-icon.svg";
import naijaPrimeLogo from "../../../public/assets/NaijaPrimeLogo.svg";

interface NavBarProps {
  children: ReactNode;
}

const NavBar = ({ children }: NavBarProps) => {
  const [activeIndex, setActiveIndex] = useState(getInitialActivePanelIndex);

  function getInitialActivePanelIndex() {
    if (typeof localStorage !== "undefined") {
      const storedIndex = localStorage.getItem("activeIndex");
      return storedIndex ? parseInt(storedIndex) : 0;
    } else {
      return 0;
    }
  }
  const setActivePanel = (panelIndex: number) => {
    setActiveIndex(panelIndex);
  };

  useEffect(() => {
    localStorage.setItem("activeIndex", activeIndex.toString());
  }, [activeIndex]);

  const activePanelStyle = (panelIndex: number) =>
    panelIndex === activeIndex
      ? "text-[#ffffff] bg-[#FFFFFF7A]"
      : "text-[#ffffff] bg-transparent";

  return (
    <>
      <div className="fixed w-[20%] h-screen py-3 bg-[#008013cc] px-1 font-manrope">
        <div>
          <div>
            <div className="flex justify-center items-center">
              <Image
                src={naijaPrimeLogo}
                width={40}
                height={40}
                alt="Naija Prime Logo"
              />
            </div>
            <div className="flex flex-col gap-1 pt-20 w-full">
              {contentDepartmentNavItems?.map((panelItem, panelIndex) => (
                <Link
                  href={`/${panelItem.url}`}
                  key={panelIndex}
                  className="w-full"
                >
                  <div
                    className={`flex items-center gap-2 cursor-pointer py-3 px-5 hover:bg-[#FFFFFF7A] ${activePanelStyle(
                      panelIndex
                    )} py-3`}
                    onClick={() => setActivePanel(panelIndex)}
                  >
                    <Image
                      src={panelItem.img}
                      alt="sidebar Icon"
                      className="w-9 h-9"
                    />
                    <span className="text-white ml-7 font-normal">
                      {panelItem.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link href={`/`}>
            <div className="flex items-center mt-60 py-3 px-5 cursor-pointer hover:bg-[#FFFFFF7A]">
              <Image src={exitIcon} alt="" className="w-8 h-8" />
              <p className="text-white ml-7">Logout</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[calc(100% - 20%)] ml-0 sm:ml-[24%] lg:ml-[20%]">
        {children}
      </div>
    </>
  );
};

export default NavBar;
