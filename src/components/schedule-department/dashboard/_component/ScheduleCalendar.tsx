"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { LuRefreshCw } from "react-icons/lu";
import InfiniteScroll from "react-infinite-scroll-component";
import DateTimePicker from "./DateTimePicker";
import MyCalendar from "./Calendar";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

interface MovieSchedule {
  title: string;
  dayOfRelease: string;
  timeOfRelease: string;
  contentScheduleStatus: string;
}

const ScheduleCalendar: React.FC = () => {
  const [schedules, setSchedules] = useState<MovieSchedule[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("00:00");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMovieSchedules();
  }, [page]);

  const fetchMovieSchedules = async () => {
    try {
      const response = await axios.get<{ content: MovieSchedule[] }>(
        `${baseUrl}/api/v1/schedule/get-scheduled-movies`,
        {
          params: {
            page: page, // Assuming your API supports pagination with a page parameter
            size: 10, // Adjust size as needed
          },
        }
      );

      const newSchedules = response.data.content;
      setSchedules((prevSchedules) => [...prevSchedules, ...newSchedules]);

      // If the number of fetched schedules is less than the requested size, it means there's no more data to load
      if (newSchedules.length < 10) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching movie schedules:", error);
    }
  };

  const loadMoreSchedules = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = async () => {
    if (!selectedDate || !selectedTime) return;

    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const formattedTime = `${selectedTime}:00`;

    try {
      const response = await axios.get<{ content: MovieSchedule[] }>(
        `${baseUrl}/api/v1/schedule/findByReleaseDateAndTime`,
        {
          params: {
            dayOfRelease: formattedDate,
            timeOfRelease: formattedTime,
            page: 1, // Reset to page 1 for a new search
            size: 10,
          },
        }
      );
      setSchedules(response.data.content);
      setHasMore(response.data.content.length >= 10);
      setPage(1); // Reset pagination
    } catch (error) {
      console.error("Error fetching filtered movie schedules:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-7 bg-[#D9D9D9B0]">
        <div className="col-span-3">
          <div className="px-5 py-2">
            <div className="flex justify-end items-center py-2 cursor-pointer">
              <div className="">
                <LuRefreshCw style={{ color: "#008001", strokeWidth: "3" }} />
              </div>
              <p className="font-bold text-xs ml-1">Restore</p>
            </div>
            <div className="flex flex-col gap-1 bg-[#0BF93142] text-white">
              <div className="grid grid-cols-4 bg-[#00000080] py-2 px-3 font-semibold text-sm">
                <h5>Name</h5>
                <h5>Date</h5>
                <h5 className="mr-3">Time of Release</h5>
                <h5>Status</h5>
              </div>
              <InfiniteScroll
                dataLength={schedules.length}
                next={loadMoreSchedules}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={<p>No more schedules to display</p>}
                // className="scheduleTable-scrollbar"
                height={410}
              >
                {schedules.map((schedule, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 items-center bg-[#4C4C4C66] py-1 px-3 text-sm font-semibold"
                  >
                    <div>
                      <h5 className="font-semibold text-xs">
                        {schedule.title}
                      </h5>
                    </div>
                    <div className="ml-1">
                      <h5 className="font-semibold text-xs">
                        {format(new Date(schedule.dayOfRelease), "MMM d, yyyy")}
                      </h5>
                    </div>
                    <div className="ml-2">
                      <h5>{schedule.timeOfRelease.slice(0, 5)}</h5>
                    </div>
                    <div
                      className={`text-center py-1 border border-black text-xs ml-3 ${
                        schedule.contentScheduleStatus === "NOW_SHOWING"
                          ? "bg-[#0BF931] text-black"
                          : schedule.contentScheduleStatus === "PAST_RECENT"
                          ? "bg-[#F90D0D] text-white"
                          : "bg-[#2214CDAB] text-white"
                      }`}
                    >
                      <h5>
                        {schedule.contentScheduleStatus.split("_").join(" ")}
                      </h5>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div>
                <DateTimePicker
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onDateChange={setSelectedDate}
                  onTimeChange={setSelectedTime}
                />
              </div>
              <div>
                <button
                  onClick={handleSearch}
                  className="font-bold rounded-md bg-[#0BF931] border border-black px-3"
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <MyCalendar />
        </div>
      </div>
    </div>
  );
};

export default ScheduleCalendar;
