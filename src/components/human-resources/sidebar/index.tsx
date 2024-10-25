"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { panelItems } from "@/constants";
import ExitIcon from "../../../../public/assets/exit-icon.svg";
import NaijaPrimeLogo from "../../../../public/assets/NaijaPrimeLogo.svg";

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const activePanelIndex = panelItems.findIndex(
      (panelItem) => `/${panelItem.url}` === pathname
    );
    setActiveIndex(activePanelIndex >= 0 ? activePanelIndex : 0);
  }, [pathname]);

  const activePanelStyle = (panelIndex: number) =>
    panelIndex === activeIndex
      ? "text-[#c1c2c1] bg-[#677f6a]"
      : "text-[#fff] bg-transparent";

  return (
    <>
      <div className="fixed min-h-screen h-full bg-[#829e87] sm:w-[24%] lg:w-[20%]">
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-center items-center bg-[#79977f]">
            <Image
              src={NaijaPrimeLogo}
              width={60}
              height={60}
              alt="Naija Prime Logo"
            />
          </div>
          <div className="flex flex-col justify-between items-center h-full">
            <div className="flex flex-col gap-1 pt-[3.5rem] 2xl:pt-[6rem] w-full">
              {panelItems?.map((panelItem, panelIndex) => (
                <Link
                  href={`/${panelItem.url}`}
                  key={panelIndex}
                  className="w-full"
                >
                  <div
                    className={`flex items-center gap-2 cursor-pointer ${activePanelStyle(
                      panelIndex
                    )} pl-10 py-3 mr-5`}
                    onClick={() => setActiveIndex(panelIndex)}
                  >
                    <Image
                      src={panelItem.img}
                      width={25}
                      height={25}
                      alt="sidebar Icon"
                      className=""
                    />
                    <span className="text-[1.25rem] font-dmSerifText font-normal">
                      {panelItem.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {/* <div className="absolute left-0 bottom-14 flex-shrink-0 py-6 px-10"> */}
            <div className="mb-[1.5rem]">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <Image
                  src={ExitIcon}
                  width={20}
                  height={20}
                  alt="Exit Icon"
                  className=""
                />
                <span className="text-[#fff] text-[1.7rem] font-manrope font-semibold">
                  Exit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="w-[calc(100% - 20%)] ml-0 sm:ml-[24%] lg:ml-[20%]">
        {children}
      </main>
    </>
  );
};
