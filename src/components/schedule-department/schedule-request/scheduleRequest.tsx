"use client";

import Image from "next/image";
import backgroundImage from "../../../../public/Content-bg-image-icon.svg";
import logoCenter from "../../../../public/Content-dept-logoCenter.svg";
import Cards from "./_component/Cards";
import Header from "../header";
import ScheduleRequestsCount from "./_component/ScheduleRequestsCount";
import PendingScheduleRequestCount from "./_component/PendingScheduleRequestCount";
import { useEffect, useMemo, useState } from "react";
import { CardData, RequestingScheduleApiResponse } from "@/types";
import axios from "axios";
import { toast } from "react-toastify";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const ScheduleRequest: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await axios.get<RequestingScheduleApiResponse>(
          `${baseUrl}/api/v1/schedule/get-all-requesting-schedule`
        );
        setCardsData(response.data.content);
      } catch (error: any) {
        setError(error.message);
        toast.error(`Error loading data: ${error.message}`);
      }
    };

    fetchCardsData();
  }, [cardsData]);

  // Separating today's and yesterday's movies
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const { todayMovies, yesterdayMovies } = useMemo(() => {
    const todayMovies: CardData[] = [];
    const yesterdayMovies: CardData[] = [];

    cardsData.forEach((data) => {
      const movieDate = new Date(data.uploadTime);
      const isToday = movieDate.toDateString() === today.toDateString();
      const isYesterday = movieDate.toDateString() === yesterday.toDateString();

      if (isToday) {
        todayMovies.push(data);
      } else if (isYesterday) {
        yesterdayMovies.push(data);
      }
    });

    return { todayMovies, yesterdayMovies };
  }, [cardsData]);

  return (
    <div className="relative w-full py-3">
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <Image src={logoCenter} alt="" className="w-[25rem]" />
      </div>
      <Header />
      <div className="font-manrope px-8">
        <ScheduleRequestsCount />
      </div>
      <div className="font-manrope my-5 px-8">
        <h3 className="text-[#0BF931] font-bold mb-2">TODAY</h3>
        <div className="grid grid-cols-5 items-center gap-2 cardCon-scroll-container">
          {/* {todayMovies.map((data) => ( */}
            {/* <div className="bg-[#D9D9D9]" key={data.id}> */}
            <div className="bg-[#D9D9D9]">
              <Cards cardsData={cardsData} />
            </div>
        {/* ))} */}
        </div>
      </div>
      <div className="font-manrope my-5 px-8">
        <div>
          <PendingScheduleRequestCount />
        </div>
        <div className="grid grid-cols-5 items-center gap-2 cardCon-scroll-container">
          {yesterdayMovies.map((data) => (
            <div>
            <Cards cardsData={cardsData} />
            </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleRequest;
