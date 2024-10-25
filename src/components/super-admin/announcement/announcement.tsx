"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "../header";
import downloadIcon from "../../../../public/Download-icon.svg";
import { CiSearch } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Modal from "./_component/Modal";
import ModalButton from "./_component/Button";

const Announcement: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [announcements, setAnnouncements] = useState<any[]>([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/superAdmin/get-all-announcement`
        );
        setAnnouncements(response.data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, [baseUrl]);

  const formatVisibility = (visibility: string) => {
    return visibility
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="bg-[#b7b7b7] h-screen">
      <Header />
      <div className="font-manrope mt-5 px-8">
        <h2 className="text-[22px] font-semibold mt-4 mb-2 text-white">
          ANNOUNCEMENTS
        </h2>
        <div>
          <div className="px-3 py-2 bg-[#D9D9D9]">
            <div className="flex flex-col gap-1 py-2">
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center gap-2">
                  <div className="text-xs">
                    <select className="text-xs">
                      <option value="today">Delete all</option>
                      <option value="tomorrow">Mute all</option>
                    </select>
                  </div>
                  <div>
                    <ModalButton setShowModal={setShowModal} />
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div>
                    <form className="flex items-center relative">
                      <CiSearch
                        size={17}
                        className="absolute left-0 ml-4 cursor-pointer"
                      />
                      <input
                        type="text"
                        placeholder="Search"
                        className="font-manrope pl-12 w-[20rem] rounded-md border border-black focus:outline-none bg-[#FAEFEF] py-1 text-sm"
                      />
                    </form>
                  </div>
                  <button className="flex items-center gap-1 border border-black p-1 bg-[#F3F0F0] cursor-pointer">
                    <Image src={downloadIcon} alt="download" />
                    <p className="text-xs">Download</p>
                  </button>
                  <div>
                    <LuRefreshCw style={{ color: "#008001", strokeWidth: 3 }} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 bg-[#FDF7F7] py-2 px-3 font-semibold">
                <h5>Title</h5>
                <h5>Email Deliveries</h5>
                <h5>Email Delivery</h5>
                <h5>Push Notification</h5>
                <h5>Visibility</h5>
                <h5>Display Date</h5>
                <h5>Display Time</h5>
              </div>
              <div className="flex flex-col gap-1 announcement-scrollbar">
                {announcements.length > 0 ? (
                  announcements.map((announcement) => {
                    const displayDate = new Date(
                      announcement.displayDate
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    });

                    const displayTime = new Date(
                      announcement.displayTime
                    ).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    });

                    return (
                      <div
                        key={announcement.id}
                        className="grid grid-cols-7 items-center bg-[#9999997D] py-1 px-3 text-sm font-semibold"
                      >
                        <div>
                          <h5 className="font-semibold text-md">
                            {announcement.title}
                          </h5>
                        </div>
                        <h5 className="text-[20px] mx-10">
                          {announcement.emailDeliveries}
                        </h5>
                        <div className="flex items-center justify-center text-center h-10 w-16 bg-[#11EE4254] text-[#00000057] font-bold rounded-[50%] mx-5">
                          <h5>{announcement.emailDelivery ? "YES" : "NO"}</h5>
                        </div>
                        <div className="flex items-center justify-center text-center h-10 w-16 bg-[#01FF2A91] text-white font-bold rounded-[50%] mx-8">
                          <h5>
                            {announcement.pushNotification ? "YES" : "NO"}
                          </h5>
                        </div>
                        <h5 className="ml-2">
                          {formatVisibility(announcement.visibility)}
                        </h5>
                        <h5 className="ml-2">{displayDate}</h5>
                        <h5 className="ml-2">{displayTime}</h5>
                      </div>
                    );
                  })
                ) : (
                  <div>No announcements found</div>
                )}
              </div>
              <div className="bg-[#FDF7F7] p-2 flex items-center">
                <h6 className="text-black font-bold flex-grow text-center">
                  Rows per page 12
                </h6>
                <div className="flex items-center gap-10">
                  <h5 className="text-black font-bold">1-5 of 5</h5>
                  <FaChevronLeft className="cursor-pointer" />
                  <FaChevronRight className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
