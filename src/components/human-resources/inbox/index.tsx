"use client";

import React, { useEffect, useState } from "react";
import ComposeMsgIcon from "../../../../public/assets/inbox-pen.svg";
import BigBackwardArrow from "../../../../public/assets/inbox-long-back-arrow.svg";
import PaperIcon from "../../../../public/assets/inbox-paper.svg";
import DeleteIcon from "../../../../public/assets/inbox-delete.svg";
import SmallBackArrow from "../../../../public/assets/inbox-small-back-arrow.svg";
import SmallForwardArrow from "../../../../public/assets/inbox-small-forward-arrow.svg";
import DownloadIcon from "../../../../public/assets/inbox-download-icon.svg";
import ReplyIcon from "../../../../public/assets/inbox-reply-icon.svg";
import ForwardIcon from "../../../../public/assets/inbox-forward-icon.svg";
import SearchIcon from "../../../../public/assets/search-icon.svg";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { fetchMesagesInbox } from "@/redux/message/actions";
import { API } from "@/utils/api";

const tabMessage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const Inbox = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");

  const activeMessageStyle = (boxItem: number) =>
    boxItem === activeMessage ? "bg-[#c6c7c6]" : "bg-[#8b8a8b]";

  const messages = useAppSelector((state) => state.messages.allMessages);

  useEffect(() => {
    fetchMesagesInbox();
  }, []);

  const handleReplyClick = () => {
    setShowReplyForm(true);
  };

  const handleSendClick = async () => {
    try {
      const messageDetails = messages.find(
        (message: any) => message.subject === activeMessage
      );
      await API.post("/api/messaging/send", {
        senderEmail: messageDetails?.senderEmail,
        subject: messageDetails?.subject,
        content: replyMessage,
      });
      setShowReplyForm(false);
      setReplyMessage("");
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  return (
    <>
      <section className="w-full bg-[#929392] h-screen py-[3rem] pl-[2.5rem]">
        <div className="bg-[#6f6f6e] flex w-full h-full">
          <div className="w-[30%] flex flex-col">
            <div className="bg-[#fff] px-3 py-2.5 border-2 border-[#000]">
              <h1 className="text-[2.5rem] font-markaziText font-semibold">
                Inbox
              </h1>
              <div className="flex items-center justify-between gap-7 w-full">
                <form className="relative flex items-center w-[85%]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="p-1 rounded-md pl-10 border border-1 focus:outline-none focus:border-none w-full"
                  />
                  <Image
                    src={SearchIcon}
                    width={20}
                    height={20}
                    alt="Search Icon"
                    className="absolute left-0 ml-3 cursor-pointer"
                  />
                </form>
                <div className="w-[15%]">
                  <div className="w-[2.5rem] h-[2rem] border border-[#000] rounded-md cursor-pointer flex items-center justify-center shadow-sm shadow-gray-700">
                    <Image
                      src={ComposeMsgIcon}
                      width={60}
                      height={60}
                      alt="Compose Message Icon"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 border-r-2 border-[#fff] overflow-y-auto">
              <div className="w-full p-3 flex flex-col gap-2">
                {messages?.map((item: any) => (
                  <div
                    className={`${activeMessageStyle(
                      item.subject
                    )} w-full h-[8.313rem] cursor-pointer`}
                    onClick={() => setActiveMessage(item.subject)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-[70%] flex flex-col h-full">
            <div className="bg-[#bebfbe] flex items-center justify-between pl-[5%] pr-[10%] py-[2.63rem] border-2 border-[#000]">
              <div className="flex items-center justify-center gap-5">
                <Image
                  src={BigBackwardArrow}
                  width={30}
                  height={30}
                  alt="Big Forward Arrow"
                  className="cursor-pointer"
                />
                <Image
                  src={PaperIcon}
                  width={30}
                  height={30}
                  alt="Paper icon"
                  className="cursor-pointer"
                />
                <Image
                  src={DeleteIcon}
                  width={30}
                  height={30}
                  alt="Delete Ico"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="size-6 rounded-full bg-[#d9d9d9] flex items-center justify-center cursor-pointer">
                  <Image
                    src={SmallBackArrow}
                    width={15}
                    height={15}
                    alt="Backward Arrow"
                    className="object-cover"
                  />
                </div>
                <div className="text-[1.25rem] font-semibold font-markaziText text-[#000]">
                  1 of 80
                </div>
                <div className="size-6 rounded-full bg-[#ffffff] flex items-center justify-center cursor-pointer">
                  <Image
                    src={SmallForwardArrow}
                    width={15}
                    height={15}
                    alt="Forward Arrow"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={DownloadIcon}
                  width={35}
                  height={35}
                  alt="Download Icon"
                  className="object-cover cursor-pointer"
                />
              </div>
            </div>
            <div className="px-6 h-full">
              <div className="bg-[#fff] border-2 border-[#000] mt-[6%] h-[20rem] md:h-[83%] lg:h-[68%] xl:h-[70%] 2xl:h-[75%]"></div>

              {showReplyForm && (
                <div className="w-full mt-[1.5rem]">
                  <textarea
                    className="w-full p-2 border rounded-md"
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Type your reply..."
                  />
                  <button
                    type="button"
                    className="bg-[#0bf931] py-0.5 px-4 rounded-md text-[#000] text-[0.75rem] font-semibold mt-2"
                    onClick={handleSendClick}
                  >
                    SEND
                  </button>
                </div>
              )}
            </div>
            {!showReplyForm && (
              <div className="bg-[#505051] py-[1rem] px-[3rem] absolute left-0 bottom-0 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={handleReplyClick}
                    >
                      <Image
                        src={ReplyIcon}
                        width={20}
                        height={20}
                        alt="Reply Arrow"
                        className=""
                      />
                      <span className="text-[#fff] text-[0.938rem] font-manrope font-normal">
                        Reply
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-1 cursor-pointer">
                      <Image
                        src={ForwardIcon}
                        width={20}
                        height={20}
                        alt="Forward Arrow"
                      />
                      <span className="text-[#fff] text-[0.938rem] font-manrope font-normal">
                        Forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

{
  /* <button
  type="button"
  className="bg-[#0bf931] py-0.5 px-4 rounded-md text-[#000] text-[0.75rem] font-semibold"
>
  SEND
</button>; */
}
