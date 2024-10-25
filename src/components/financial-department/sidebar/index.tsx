"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { fDPanelItems } from "@/constants";
import ExitIcon from "../../../../public/assets/exit-icon.svg";
import NaijaPrimeLogo from "../../../../public/assets/NaijaPrimeLogo.svg";
import SidebarBgImg from "../../../../public/assets/sidebarBg.svg";
import FDBGImg from "../../../../public/assets/fd-bg.svg";

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  let pathname = usePathname().split("?")[0]; // Ignore query parameters

  pathname = pathname.replace(/\/\d+$/, ""); // Remove trailing numerical values from the path
  const router = useRouter();

  useEffect(() => {
    const activePanelIndex = fDPanelItems.findIndex(
      (panelItem) => `/${panelItem.url}` === pathname
    );
    setActiveIndex(activePanelIndex >= 0 ? activePanelIndex : 0);
  }, [pathname]);

  const activePanelStyle = (panelIndex: number) =>
    panelIndex === activeIndex
      ? "text-[#fff] bg-[#2cb063]"
      : "text-[#fff] bg-transparent";

  const styles = {
    backgroundImage: `url(${SidebarBgImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const homePageBg = {
    backgroundImage: `url(${FDBGImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        className="fixed min-h-screen h-full sm:w-[24%] lg:w-[20%] bg-[#6386A6C2]"
        style={styles}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-center items-center bg-[#6386A6C2]">
            <Image
              src={NaijaPrimeLogo}
              width={60}
              height={60}
              alt="Naija Prime Logo"
            />
          </div>
          <div className="flex flex-col gap-3 pt-[6rem] w-full">
            {fDPanelItems?.map((panelItem, panelIndex) => (
              <Link
                href={`/${panelItem.url}`}
                key={panelIndex}
                className="w-full"
              >
                <div
                  className={`flex items-center gap-2 cursor-pointer ${activePanelStyle(
                    panelIndex
                  )} pl-6 py-3 mr-5`}
                  onClick={() => setActiveIndex(panelIndex)}
                >
                  <Image
                    src={panelItem.img}
                    width={25}
                    height={25}
                    alt="sidebar Icon"
                    className=""
                  />
                  <span className="text-[1.25rem] font-dmSerifText font-normal whitespace-nowrap">
                    {panelItem.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="absolute left-0 bottom-20 flex-shrink-0 py-6 px-10">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                src={ExitIcon}
                width={25}
                height={25}
                alt="Exit Icon"
                className=""
              />
              <span className="text-[#fff] text-[1.875rem] font-manrope font-semibold">
                Exit
              </span>
            </div>
          </div>
        </div>
      </div>
      <main
        className="w-[calc(100% - 20%)] ml-0 sm:ml-[24%] lg:ml-[20%]"
        style={homePageBg}
      >
        {children}
      </main>
    </>
  );
};

// sm:w-[24%] xl:w-[20%] 2xl:w-[16%]
