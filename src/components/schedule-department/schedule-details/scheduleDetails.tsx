"use client";

import Image from "next/image";
import backgroundImage from "../../../../public/Content-bg-image-icon.svg";
import logoCenter from "../../../../public/Content-dept-logoCenter.svg";
import backArrow from "../../../../public/Back-arrow.svg";
import { usePathname, useRouter } from "next/navigation";
import VideoTrailerPlayer from "./_component/VideoTrailerPlayer";
import Header from "../header";
import Form from "./_component/Form";
import NextContent from "./_component/NextContent";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardData } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

interface MovieDetails {
  title: string;
  bannerUrl: string;
  trailerUrl: string;
  fullMovieUrl: string;
  splitRation: string;
  lockAmount: number;
  aboutMovie: string;
  scriptWriters: string[];
  ageCategory: string;
  yearOfProduction: string;
  movieContentType: string;
  viewingRestriction: string;
  producer: string;
}

const ScheduleDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentContentId, setCurrentContentId] = useState<string>("1");
  const [cardIds, setCardIds] = useState<number[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const pathParts = pathname.split("/");
    const idFromPath = pathParts[pathParts.length - 1];
    setCurrentContentId(idFromPath);
  }, [pathname]);

  useEffect(() => {
    if (currentContentId) {
      fetchMovieDetails(currentContentId);
    }
  }, [currentContentId]);

  useEffect(() => {
    const fetchCardIds = async () => {
      try {
        const response = await axios.get<{ content: CardData[] }>(
          `${baseUrl}/api/v1/schedule/get-all-requesting-schedule`
        );
        const ids = response.data.content.map((card) => Number(card.id));
        setCardIds(ids);
      } catch (error: any) {
        setError(error.message);
        toast.error(`Error loading data: ${error.message}`);
      }
    };

    fetchCardIds();
  }, []);

  const fetchMovieDetails = async (id: string) => {
    try {
      const response = await axios.get<MovieDetails>(
        `${baseUrl}/api/v1/finance/get-movie-by-id/${id}`
      );
      setMovieDetails(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(`Error: ${error.response.data.message}`);
        } else if (error.request) {
          toast.error("No response from server. Please try again later.");
        } else {
          toast.error("Error: " + error.message);
        }
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleBack = () => {
    router.push("/schedule-department/schedule-request");
  };

  const handleNextContent = () => {
    if (!cardIds || cardIds.length === 0) {
      toast.error("No cards available.");
      return;
    }

    const currentIdNumber = parseInt(currentContentId, 10);
    if (isNaN(currentIdNumber)) {
      toast.error("Invalid current content ID.");
      return;
    }

    const currentIndex = cardIds.findIndex((id) => id === currentIdNumber);
    if (currentIndex === -1) {
      toast.error("Current ID not found in card IDs.");
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < cardIds.length) {
      const nextId = cardIds[nextIndex];
      router.push(`/schedule-department/schedule-request/${nextId}`);
    } else {
      toast.error("No more available Content");
    }
  };

  return (
    <div className="relative w-full h-screen">
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
      <div className="font-manrope px-8 mt-4">
        <div className="flex justify-between items-center mb-3">
          <div
            onClick={handleBack}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image src={backArrow} alt="" className="w-7" />
            <h6 className="text-white text-xs">BACK</h6>
          </div>
          <div>
            <NextContent onNext={handleNextContent} />
          </div>
        </div>
        <div className="bg-[#D9D9D936] p-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="h-[280px]">
              <div className="relative w-full h-full">
                {movieDetails && (
                  <Image
                    src={
                      movieDetails.bannerUrl.startsWith("http")
                        ? movieDetails.bannerUrl
                        : `${baseUrl}/${movieDetails.bannerUrl}`
                    }
                    alt="Banner"
                    width={400}
                    height={280}
                    className="w-full h-full"
                  />
                )}
              </div>
            </div>
            <div className="bg-[#D9D9D994] border border-dashed border-black h-[280px]">
              {movieDetails && (
                <VideoTrailerPlayer url={movieDetails.trailerUrl} />
              )}
            </div>
          </div>
          {movieDetails && (
            <div className="grid grid-cols-4 text-white text-sm mt-4">
              <div className="flex flex-col gap-4">
                <p>TITLE: {movieDetails.title}</p>
                <p>PRODUCER: {movieDetails.producer}</p>
                <p>SCRIPT WRITERS: {movieDetails.scriptWriters.join(", ")}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>Movie Type: {movieDetails.movieContentType}</p>
                <p>Year: {movieDetails.yearOfProduction}</p>
                <p>INDICATIONS: {movieDetails.viewingRestriction}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>Age Limit: {movieDetails.ageCategory}</p>
                <p>SPLIT RATION: {movieDetails.splitRation}</p>
                <p>Lock Amount: {movieDetails.lockAmount}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>ABOUT MOVIE: {movieDetails.aboutMovie}</p>
              </div>
            </div>
          )}
        </div>
        {movieDetails && (
          <div className="mt-7">
            <Form
              movieId={currentContentId}
              bannerUrl={movieDetails.bannerUrl}
              trailerUrl={movieDetails.trailerUrl}
              title={movieDetails.title}
              ageCategory={movieDetails.ageCategory}
              aboutMovie={movieDetails.aboutMovie}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleDetails;
