"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import backgroundImage from "../../../../public/Content-bg-image-icon.svg";
import logoCenter from "../../../../public/Content-dept-logoCenter.svg";
import backArrow from "../../../../public/Back-arrow.svg";
import VideoTrailerPlayer from "./_component/VideoTrailerPlayer";
import VideoPlayer from "./_component/VideoPlayer";
import SubmissionHeader from "../submissionHeader";
import RejectButton from "./_component/RejectButton";
import MoveFileButton from "./_component/MoveFileButton";
import SendToFinance from "./_component/SendToFinance";
import NextContent from "./_component/NextContent";
import { toast } from "react-toastify";
import { CardData } from "@/types";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

interface MovieDetails {
  id:string;
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

const SubmitDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentContentId, setCurrentContentId] = useState<string>("1");
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [cardIds, setCardIds] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFileMoved, setIsFileMoved] = useState<boolean>(false); // State to manage visibility of buttons
  const [showSendToFinance, setShowSendToFinance] = useState<boolean>(false); // State to manage SendToFinance visibility

  useEffect(() => {
    const pathParts = pathname.split("/");
    const idFromPath = pathParts[pathParts.length - 1];
    setCurrentContentId(idFromPath);
  }, [pathname]);

  useEffect(() => {
    if (currentContentId) {
      fetchMovieDetails(currentContentId);
    }
  }, [movieDetails]);

  // useEffect(() => {
  //   const fetchCardIds = async () => {
  //     try {
  //       const response = await axios.get<{ content: CardData[] }>(
  //         // `${baseUrl}/api/v1/contentReview/pending-or-new-submits`
  //         `${baseUrl}/api/v1/contentReview/get-movie-by-id/${id}`
  //       );
  //       const ids = response.data.content.map((card) => Number(card.id));
  //       setCardIds(ids);
  //     } catch (error: any) {
  //       setError(error.message);
  //       toast.error(`Error loading data: ${error.message}`);
  //     }
  //   };

  //   fetchCardIds();
  // }, []);

   // Fetch the movie details based on the ID
   useEffect(() => {
    if (currentContentId) {
      fetchMovieDetails(currentContentId);
    }
  }, [currentContentId]);

  const fetchMovieDetails = async (id: string) => {
    try {
      const response = await axios.get<MovieDetails>(
        `${baseUrl}/api/v1/contentReview/get-movie-by-id/${id}`
      );
      // const data = JSON.stringify(response?.data);
      const data = response.data;
      if (data) {
        setMovieDetails(data);
      }
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
    router.push("/content-department/submission");
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
      router.push(`/content-department/submission/${nextId}`);
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
      <SubmissionHeader />
      <div className="font-manrope px-8 mt-4">
        <div
          onClick={handleBack}
          className="flex items-center gap-2 mb-3 cursor-pointer"
        >
          <Image src={backArrow} alt="" className="w-7" />
          <h6 className="text-white text-xs">BACK</h6>
        </div>
        <div className="bg-[#D9D9D936] h-[500px] p-4">
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="h-[200px]">
              <div className="relative w-full h-full">
                {movieDetails && (
                  <Image
                    src={
                      movieDetails.bannerUrl.startsWith("http")
                        ? movieDetails?.bannerUrl
                        : `${baseUrl}/${movieDetails.bannerUrl}`
                    }
                    alt="Banner"
                    width={300}
                    height={200}
                    className="w-full h-full"
                    sizes="(min-width: 1024px) 100vw"
                  />
                )}
              </div>
            </div>
            <div className="bg-[#D9D9D994] border border-dashed border-black h-[200px] w-full">
              {movieDetails && (
                <VideoTrailerPlayer url={movieDetails.trailerUrl} />
              )}
            </div>
            {!isFileMoved && movieDetails && (
              <div className="bg-[#D9D9D994] border border-dashed border-black h-[200px] w-full">
                <VideoPlayer url={movieDetails.fullMovieUrl} />
              </div>
            )}
          </div>
          <div className="flex justify-end my-5">
            {!isFileMoved && (
              <MoveFileButton
                id={currentContentId}
                onSuccess={() => {
                  setIsFileMoved(true); // Hide the button
                  setShowSendToFinance(true); // Show the SendToFinance button
                }}
              />
            )}
          </div>

          {movieDetails && (
            <div className="grid grid-cols-4 text-white text-sm">
              <div className="flex flex-col gap-4">
                <p>TITLE: {movieDetails?.title}</p>
                <p>PRODUCER: {movieDetails.producer}</p>
                <p>SCRIPT WRITERS: {movieDetails.scriptWriters.join(", ")}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>Movie Type: {movieDetails.movieContentType}</p>
                <p>Year: {movieDetails.yearOfProduction}</p>
                <p>INDICATIONS: {movieDetails.viewingRestriction}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  Age Limit: {movieDetails.ageCategory.split("_").join(" ")}
                </p>
                <p>
                  SPLIT RATION: {movieDetails.splitRation.split("_").join(" ")}
                </p>
                <p>Lock Amount: {movieDetails.lockAmount}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>ABOUT MOVIE: {movieDetails.aboutMovie}</p>
              </div>
            </div>
          )}
          <div className="flex justify-between mt-12">
            <div className="flex-none">
              {!showSendToFinance && (
                <RejectButton
                  id={currentContentId}
                  onSuccess={handleNextContent}
                />
              )}
            </div>
            <div className="flex-grow"></div>
            <div className="flex-none">
              {showSendToFinance && (
                <SendToFinance
                  id={currentContentId}
                  onSuccess={handleNextContent}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <NextContent onNext={handleNextContent} />
        </div>
      </div>
    </div>
  );
};

export default SubmitDetails;
