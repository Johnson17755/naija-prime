"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";
import { CCMessageHeader } from "@/features/header/customerCare/message";
import { ccLiveChatHeaderData } from "@/constants";
import NaijaLogo from "../../../../public/assets/fd-naija-logo.svg";
import RepBgImage from "../../../../public/assets/cc-chat-bg.svg";
import OnlineRep from "../../../../public/assets/cc-online-rep.svg";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../../../../firebase";

type Message = {
  id: string;
  sender: string;
  message: string;
  timestamp: any;
};

export const Message = () => {
  const [receiveMessages, setReceiveMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
  };

  const handleSendMessage = async () => {
    if (responseMessage.trim() && selectedMessage) {
      await addDoc(collection(db, "chats"), {
        sender: "admin",
        message: responseMessage,
        timestamp: serverTimestamp(),
        inResponseTo: selectedMessage.id,
      });
      setResponseMessage("");
    }
  };

  const handleFetchMessages = () => {
    const q = query(
      collection(db, "chats"),
      where("sender", "!=", "admin"),
      orderBy("timestamp")
    );
    onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        const data = doc.data();
        let timestampFormatted = "No timestamp";
        if (data.timestamp && typeof data.timestamp.toDate === "function") {
          timestampFormatted = data.timestamp.toDate();
        }
        return {
          id: doc.id,
          sender: data.sender || "Unknown",
          message: data.message || "No message",
          timestamp: moment(timestampFormatted).fromNow(),
        };
      });
      setReceiveMessages(messages);
    });
  };

  useEffect(() => {
    handleFetchMessages();
  }, []);

  return (
    <>
      <div className="relative w-full h-full min-h-screen pb-10">
        <CCMessageHeader />
        <div className="absolute inset-0 flex items-center justify-center pt-20 z-30">
          <Image
            src={NaijaLogo}
            width={400}
            height={400}
            alt="Naija Prime Logo"
            className="opacity-30"
          />
        </div>
        <div className="mx-8 pt-5 pb-7 px-8 z-[999] bg-[#17457a] mt-5">
          <h1 className="text-[1.875rem] text-[#fff] font-manrope font-bold mb-3">
            Live Chat
          </h1>
          <div className="flex items-start justify-between z-[999]">
            <div className="overflow-hidden max-h-[30rem] 2xl:max-h-[46rem] w-[75%] z-[999]">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-[#a0a0a1] sticky top-0 border-b-8 border-[#f0f0f0]">
                  <tr>
                    {ccLiveChatHeaderData.map((item, index) => (
                      <th
                        scope="col"
                        key={index}
                        className="p-2 mx-1 whitespace-nowrap text-[#fff] text-[1.563rem] font-manrope font-bold"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
              <div className="overflow-y-auto max-h-[30rem] 2xl:max-h-[50rem] pb-16">
                <table className="min-w-full table-auto border-collapse">
                  <tbody className="bg-[#d8d8d9]">
                    {receiveMessages.map((row, index) => (
                      <tr
                        key={index}
                        className={`text-clip overflow-x-hidden whitespace-nowrap cursor-pointer border-b-4 border-l-8 border-[#d8d8d9] text-center font-manrope font-bold p-2 text-[1.563rem] text-[#000] ${
                          index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#bbbabb]"
                        }`}
                        onClick={() => handleSelectMessage(row)}
                      >
                        <td className="p-2 text-[1.25rem] text-[#000] font-manrope font-bold">
                          {row.sender}
                        </td>
                        <td className="p-2 flex items-center justify-end">
                          <span
                            className={`text-[0.625rem] text-[#000] font-manrope font-bold px-4 py-1.5 ${
                              index % 2 === 0 ? "bg-[#d8d8d9]" : "bg-[#ffffff]"
                            }`}
                          >
                            {row.message}
                          </span>
                        </td>
                        <td className="p-2 text-[1.25rem]  text-[#000] font-manrope font-bold text-end">
                          {row.timestamp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="relative bg-[#d8d8d9] w-full h-[30rem] 2xl:h-[46rem] z-[555] border-l border-[#000]">
              <Image
                src={RepBgImage}
                width={500}
                height={500}
                alt="Rep Background Logo"
                className="object-cover absolute top-0 right-0 pl-4 z-30 w-[35rem] 2xl:w-[50rem]"
              />
              <button
                type="button"
                className="text-[#000] text-[1.25rem] font-manrope font-bold bg-[#b67273] px-5 py-1.5 border border-[#000] z-[777] absolute top-2 right-2 2xl:top-4 2xl:right-4"
              >
                End Chat
              </button>
              <div className="z-[777] absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center py-4 2xl:py-7">
                <Image
                  src={OnlineRep}
                  width={80}
                  height={80}
                  alt="Online Rep"
                  className="object-cover w-[4.5rem] 2xl:w-[8rem]"
                />
                <h3 className="text-[#fff] text-[1.25rem] font-manrope font-bold">
                  Favour
                </h3>
                <span className="text-[#fff] text-[1.25rem] font-manrope font-light">
                  Customer care
                </span>
              </div>
              {selectedMessage && (
                <div className="absolute w-full left-1/2 transform -translate-x-1/2 bottom-[12rem] min-h-[5rem] max-h-[20rem] overflow-y-auto p-4 bg-[#fff]">
                  <div className="flex flex-col">
                    <p>
                      <strong>From:</strong> {selectedMessage.sender}
                    </p>
                    <p>
                      <strong>Message:</strong> {selectedMessage.message}
                    </p>
                  </div>
                </div>
              )}
              {selectedMessage && (
                <form
                  className="w-full absolute left-0 bottom-0 right-0 bg-[#fff]"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <div className="w-full flex items-center gap-3 border-t-4 border-[#000]">
                    <textarea
                      name=""
                      id=""
                      placeholder="Reply"
                      className="h-[2.7rem] w-[78%] 2xl:w-[85%] border-none focus:outline-none focus:ring-0 focus:border-none"
                      value={responseMessage}
                      onChange={(e) => setResponseMessage(e.target.value)}
                    ></textarea>
                    <button
                      type="submit"
                      className="text-[0.938rem] text-[#000] font-manrope font-bold bg-[#0af831] px-6 py-0.5 outline outline-1 rounded-2xl"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
