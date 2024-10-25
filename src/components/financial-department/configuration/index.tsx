"use client";

import React, { useState, useEffect, useMemo } from "react";
import { FDOtherHeader } from "@/features/header/financialDepartment/otherHeader";
import { SingleMovie } from "./_component/SingleMovie";
import { fetchAllMovies } from "@/redux/financial-department/configuration/actions";
import { useAppSelector } from "@/redux/hooks";

interface MovieType {
  id: number;
  title: string;
  bannerUrl: string;
  trailerUrl: string;
  producer: string;
  seriesGenre: string;
  fullMovieUrl: string;
  uploadTime: string;
}

export const Configuration = () => {
  const { allMovies } = useAppSelector((state) => state.movies);
  const [FetchedMovie, setFetchedMovie ]= useState([]);


  useEffect(() => {
    fetchAllMovies();
  }, []);
  
  useEffect(() => {
    if(allMovies?.content){
      setFetchedMovie(allMovies.content);
    }
  }, [allMovies]);

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const { todayMovies, yesterdayMovies } = useMemo(() => {
    const todayMovies: MovieType[] = [];
    const yesterdayMovies: MovieType[] = [];

    allMovies?.content?.forEach((singleMovie: any) => {
      const movieDate = new Date(singleMovie.uploadTime);
      const isToday = movieDate.toDateString() === today.toDateString();
      const isYesterday = movieDate.toDateString() === yesterday.toDateString();

      if (isToday) {
        todayMovies.push(singleMovie);
      } else if (isYesterday) {
        yesterdayMovies.push(singleMovie);
      }
    });
    return { todayMovies, yesterdayMovies };
  }, [allMovies]);

  return (
    <>
      <div className="relative w-full h-full min-h-screen">
        <FDOtherHeader />
        <div className="px-7 pb-10">
          <h2 className="text-[1.275rem] text-[#fff] font-manrope font-bold mb-6">
            Content Configuration Requests
          </h2>
          <div className="flex items-center justify-end gap-2 mb-4">
            <span className="text-[#fff] text-[1.875rem] font-manrope font-bold">
              Total
            </span>
            <div className="bg-[#fff] py-[0.2rem] px-[3.5rem] text-[1.2rem] font-manrope font-semibold">
              {todayMovies.length ?? 0}
            </div>
          </div>
          <div>
            <h3 className="text-[1.563rem] text-[#fff] font-manrope font-bold">
              Today
            </h3>
            {todayMovies.length > 0 && (
              <div className="bg-[#2a4572] w-full h-[20rem] px-4 py-3 grid grid-cols-3 2xl:grid-cols-4 gap-5 overflow-y-auto flex-1">
                {todayMovies.length > 0 &&
                  todayMovies.map((singleMovie: any) => (
                    <SingleMovie key={singleMovie.id} movie={singleMovie} />
                  ))}
              </div>
            )}
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-end gap-2 mb-4">
              <span className="text-[#fff] text-[1.875rem] font-manrope font-bold">
                Total
              </span>
              <div className="bg-[#fff] py-[0.2rem] px-[3.5rem] text-[1.2rem] font-manrope font-semibold">
                {yesterdayMovies.length ?? 0}
              </div>
            </div>
            <h3 className="text-[1.563rem] text-[#fff] font-manrope font-bold">
              Yesterday
            </h3>
            {yesterdayMovies.length > 0 && (
              <div className="bg-[#263458] w-full h-[20rem] px-4 py-3 grid grid-cols-4 gap-5 overflow-y-auto flex-1">
                {yesterdayMovies.length > 0 &&
                  yesterdayMovies.map((singleMovie: any) => (
                    <SingleMovie key={singleMovie.id} movie={singleMovie} />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
