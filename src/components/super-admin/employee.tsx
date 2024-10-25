"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./header";
import { LuRefreshCw } from "react-icons/lu";
import axios, { AxiosError } from "axios";

interface Interview {
  id: number;
  candidateImageURL: string;
  candidateName: string;
  candidatePosition: string;
  interviewStatus: string;
  interviewerImageURL: string;
  interviewerName: string;
  interviewerPosition: string;
  schedule: string;
  decision: string;
}

const Employee = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/interviews`);
        if (response?.data) {
          console.log(response.data);
          setInterviews(response.data);
        } else {
          setError("Failed to fetch interviews.");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.response?.data || error.message);
          setError(
            error.response?.data || "There was an error fetching the data."
          );
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchInterviews();
  }, []);

  console.log("List of interviews:", interviews);

  return (
    <div className="bg-[#b7b7b7] h-screen">
      <Header />
      <div className="font-manrope mt-3 px-8">
        <div className="">
          <div className="px-3 py-2 bg-[#EDEDED]">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <h4 className="text-[20px] font-semibold">Interviews</h4>
                <div className="bg-[#999999] p-1 rounded-full border border-black cursor-pointer">
                  <LuRefreshCw style={{ color: "#008001" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1 interviews-scrollbar">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] bg-[#69696978] text-[#00000070] py-2 px-3 font-semibold">
                  <h5>Candidate</h5>
                  <h5>Interview Status</h5>
                  <h5>Interviewer</h5>
                  <h5>Schedule</h5>
                  <h5>Decision</h5>
                </div>
                {error ? (
                  <div className="text-red-500">{error}</div>
                ) : (
                  interviews.map((interview) => (
                    <div
                      key={interview.id}
                      className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center bg-[#9999997D] py-1 px-3 text-sm font-semibold"
                    >
                      <div className="flex items-center gap-3">
                        <div className="">
                          <Image
                            src={interview.candidateImageURL}
                            alt="Candidate"
                            className="rounded-[50%]"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <h5 className="font-semibold text-md">
                            {interview.candidateName}
                          </h5>
                          <p className="leading-[10px] font-normal text-[11px]">
                            {interview.candidatePosition}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`text-center py-1 mr-28 border border-black ${
                          interview.interviewStatus === "Pending"
                            ? "bg-[#930F0F80]"
                            : "bg-[#11EE4254]"
                        }`}
                      >
                        <h5>{interview.interviewStatus}</h5>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="">
                          <Image
                            src={interview.interviewerImageURL}
                            alt="Interviewer"
                            className="rounded-[50%]"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <h5 className="font-semibold text-md">
                            {interview.interviewerName}
                          </h5>
                          <p className="leading-[10px] font-normal text-[11px]">
                            {interview.interviewerPosition}
                          </p>
                        </div>
                      </div>
                      <h5>{interview.schedule}</h5>
                      <h5>{interview.decision}</h5>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
