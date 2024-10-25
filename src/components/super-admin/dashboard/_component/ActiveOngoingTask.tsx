"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { format } from "date-fns";

interface Movie {
  movieName: string;
  reviewDate: string;
  reviewStatus: string;
  adminUrl: string;
}

const ActiveOngoingTask: React.FC = () => {
  const [tasks, setTasks] = useState<Movie[]>([]);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/superAdmin/active-ongoing-movies`
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [baseUrl]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "REVIEWING":
        return "bg-[#999999]";
      case "ACCEPTED":
        return "bg-[#0CA424]";
      case "REJECTED":
        return "bg-[#F40A0A]";
      default:
        return "bg-[#999999]";
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h4 className="text-[16px] font-semibold">Active/Ongoing</h4>
          <div className="bg-[#7971D9] p-1">
            <p className="font-semibold text-[14px] text-white">
              {tasks.length}
            </p>
          </div>
        </div>
        <div className="activeOngoing-task-scrollbar flex flex-col gap-1">
          <div className="grid grid-cols-4 bg-[#999999] text-white py-1 px-3 font-semibold">
            <h5>Name</h5>
            <h5>Dateline</h5>
            <h5>Status</h5>
            <h5>Operators</h5>
          </div>
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 items-center bg-[#0FF04EA3] py-1 px-3 text-sm font-semibold`}
            >
              <h5>{task.movieName}</h5>
              <h5>{format(new Date(task.reviewDate), "dd MMM yyyy")}</h5>
              <div
                className={`text-center px-1 ${getStatusColor(
                  task.reviewStatus
                )} text-white mr-12`}
              >
                <h5>{task.reviewStatus}</h5>
              </div>
              <div>
                <Image
                  src={
                    task.adminUrl.startsWith("http")
                      ? task.adminUrl
                      : `${baseUrl}/${task.adminUrl}`
                  }
                  alt="admin image"
                  width={10}
                  height={10}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveOngoingTask;
