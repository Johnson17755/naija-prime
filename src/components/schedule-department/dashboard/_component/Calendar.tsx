"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const MyCalendar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMovieSchedule = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/schedule/get-scheduled-movies`
        );

        const formattedEvents = response.data.content.map((movie: any) => ({
          title: movie.title,
          extendedProps: {
            status: movie.contentScheduleStatus,
            stationOfRelease: movie.stationOfRelease,
            dayOfRelease: movie.dayOfRelease,
          },
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching movie schedule:", error);
      }
    };

    fetchMovieSchedule();
  }, []);

  const handleDateClick = (arg: any) => {
    const clickedDate = new Date(arg.dateStr).toISOString().split("T")[0];

    const eventsForDate = events.filter((event: any) => {
      const eventDate = event.extendedProps.dayOfRelease;
      return eventDate === clickedDate;
    });

    if (eventsForDate.length > 0) {
      setSelectedEvents(eventsForDate);
      setIsModalOpen(true);
    } else {
      alert(`No events scheduled for ${clickedDate}.`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-white shadow-lg">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth",
        }}
        events={events}
        dateClick={handleDateClick}
      />

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="scheduleModal"
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-end items-center">
                <button onClick={closeModal}>
                  <MdOutlineCancel size={23} />
                </button>
              </div>
              <h2 className="text-2xl font-bold">
                Events on {selectedEvents[0].extendedProps.dayOfRelease}
              </h2>
              <div className="announcement-scrollbar ">
                <div className="grid grid-cols-3 my-2">
                  {selectedEvents.map((event: any, index: number) => (
                    <div key={index} className="my-2 text-left">
                      <p className="text-md">
                        <strong>Title:</strong> {event.title}
                      </p>
                      <p className="text-md">
                        <strong>Status:</strong>{" "}
                        {event.extendedProps.status.split("_").join(" ")}
                      </p>
                      <p className="text-md">
                        <strong>Station:</strong>{" "}
                        {event.extendedProps.stationOfRelease}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyCalendar;
