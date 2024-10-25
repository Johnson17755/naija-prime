"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { FDOtherHeader } from "@/features/header/financialDepartment/otherHeader";
import BackArrow from "../../../../../public/assets/movie-back-arrow.svg";
import SearchIcon from "../../../../../public/assets/search-icon.svg";
import { DoughnutChart } from "./DoughnutChart";
import { useAppSelector } from "@/redux/hooks";
import { fetchMovieDetails } from "@/redux/financial-department/configuration/actions";
import { setIsLoading } from "@/redux/financial-department/configuration/configurationSlice";
import { API } from "@/utils/api";
import { alertNotification } from "@/redux/auth/actions";
import { ErrorMessage } from "@/utils/messages/error-message";
import { paymentSchema } from "@/utils/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { store } from "@/redux/store";

export const MovieDetails = ({ movieId }: any) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState("1");

  const pathname = usePathname();
  const router = useRouter();

  const { movieDetails } = useAppSelector((state) => state.movies);
  const { movieIds } = useAppSelector((state) => state.movies);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyRation: undefined,
      creatorRation: undefined,
      creatorName: "",
      lockAmount: undefined,
    },
    resolver: yupResolver(paymentSchema),
  });

  const formSubmit = async (data: any) => {
    const paymentData = {
      ...data,
      movieId,
    };
    handlePaymentConfiguration(paymentData);
  };

  const [formData, setFormData] = useState({
    bannerUrl: "",
    title: "",
    producer: "",
    scriptWriters: "",
    movieType: "",
    year: "",
    indication: "",
    ageLimit: "",
    splitRation: "",
    lockAmount: "",
    trailerUrl: "",
    aboutMovie: "",
  });

  useEffect(() => {
    fetchMovieDetails(movieId);
  }, []);

  useEffect(() => {
    const movieID = pathname.split("/");
    const movieIdFromPath = movieID[movieID.length - 1];
    setCurrentMovieId(movieIdFromPath);
  }, [pathname]);

  useEffect(() => {
    if (movieDetails) {
      setFormData({
        bannerUrl: movieDetails?.bannerUrl ?? "",
        title: movieDetails?.title ?? "",
        producer: movieDetails.producer ?? "",
        scriptWriters: movieDetails?.scriptWriters[0] ?? "",
        movieType: movieDetails?.movieContentType ?? "",
        year: movieDetails?.yearOfProduction ?? "",
        indication: movieDetails?.viewingRestriction ?? "",
        ageLimit: movieDetails?.ageCategory?.split("_").join(" ") ?? "",
        splitRation: movieDetails?.splitRation?.split("_").join(" ") ?? "",
        lockAmount: movieDetails?.lockAmount ?? "",
        trailerUrl: movieDetails?.trailerUrl ?? "",
        aboutMovie: movieDetails?.aboutMovie ?? "",
      });
    }
  }, [movieDetails]);

  const bannerUrl = formData.bannerUrl?.startsWith("http")
    ? formData.bannerUrl
    : formData.bannerUrl?.startsWith("https")
    ? formData.bannerUrl
    : "/";

  const trailerUrl = formData.trailerUrl?.startsWith("http")
    ? formData.trailerUrl
    : formData.trailerUrl?.startsWith("https")
    ? formData.trailerUrl
    : "/";

  const handleSendForSchedule = async () => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    setIsSending(true);
    try {
      const response = await API.post(
        `/api/v1/finance/send-to-schedule?id=${movieId}`,
        formData
      );
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        alertNotification("Movie sent to schedule successfully.", "success");
        setIsSent(true);
      } else {
        dispatch(setIsLoading(false));
        alertNotification(
          "Failed to send movie for schedule. Please try again.",
          "error"
        );
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleNextMovie = () => {
    if (!movieIds || movieIds.length === 0) {
      alertNotification("No movie available", "error");
      return;
    }

    const currentID = parseInt(currentMovieId, 10);
    if (isNaN(currentID)) {
      alertNotification("Invalid movie ID", "error");
      return;
    }

    const currentIndex = movieIds.findIndex((id: any) => id === currentID);
    if (currentIndex === -1) {
      alertNotification("Movie ID not found", "error");
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < movieIds.length) {
      const nextMovieID = movieIds[nextIndex];
      router.push(`/financial-department/configuration/${nextMovieID}`);
    } else {
      alertNotification("No more available movie", "error");
    }
  };

  const handlePaymentConfiguration = async (paymentData: any) => {
    const dispatch = store.dispatch;
    dispatch(setIsLoading(true));
    setIsConnecting(true);

    try {
      const response = await API.post(
        `/api/v1/finance/create-configuration-request`,
        paymentData
      );
      const jsonData = response?.data;
      if (jsonData) {
        dispatch(setIsLoading(false));
        alertNotification("Movie ration created successfully.", "success");
        setIsConnected(true);
      } else {
        dispatch(setIsLoading(false));
        alertNotification(
          "Failed to create movie ration. Please try again.",
          "error"
        );
      }
    } catch (error: any) {
      dispatch(setIsLoading(false));
      console.log(error);
      if (error instanceof AxiosError) {
        alertNotification(error?.response?.data.message, "error");
      }
    } finally {
      setIsConnecting(false);
      console.log("Finished!!!");
    }
  };

  return (
    <>
      <div className="relative w-full h-full min-h-screen">
        <FDOtherHeader />
        <div className="p-5">
          <div className="px-5 pb-7">
            <Link
              href={`/financial-department/configuration`}
              className="flex items-center gap-2"
            >
              <Image
                src={BackArrow}
                width={30}
                height={30}
                alt="Back Arrow Icon"
                className=""
              />
              <span className="text-[#fff] text-[0.938rem] font-manrope font-bold">
                BACK
              </span>
            </Link>
          </div>
          <div className="bg-[#315a91] flex items-start justify-between gap-5 p-4 h-[30rem]">
            <div className="flex flex-col items-start flex-1">
              <div className="h-[20rem] w-full">
                {bannerUrl && (
                  <Image
                    src={bannerUrl ?? ""}
                    width={720}
                    height={720}
                    alt="Movie Banner"
                    className="object-cover h-full w-full"
                  />
                )}
              </div>
              <div className="mt-5 flex items-center justify-between w-full">
                <div className="flex flex-col items-start gap-3 text-[#fff] text-[0.7rem] font-manrope font-bold w-full">
                  <div className="flex items-center gap-1">
                    <span>Title:</span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>PRODUCER:</span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.producer}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>SCRIPT WRITER:</span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.scriptWriters}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3 text-[#fff] text-[0.7rem] font-manrope font-bold w-full">
                  <div className="flex items-center gap-1">
                    <span>Movie Type:</span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.movieType}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Year:</span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>INDICATION:</span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.indication}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-3 text-[#fff] text-[0.7rem] font-manrope font-bold w-full">
                  <div className="flex items-center gap-1">
                    <span>Age Limit:</span>
                    <span>
                      <span className="font-light text-slate-100 text-[0.6rem]">
                        {formData.ageLimit}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <span>SPLIT RATION: </span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.splitRation}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Lock Amount:</span>
                    <span className="font-light text-slate-100 text-[0.6rem]">
                      {formData.lockAmount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-center items-center h-[20rem]">
                <div className="w-full max-w-full h-full">
                  <Player
                    playsInline
                    src={trailerUrl}
                    fluid={false}
                    width={480}
                    height={320}
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col items-start justify-between gap-10">
                <div className="flex items-center gap-4">
                  <h3 className="text-[0.8rem] text-[#fff] font-manrope font-bold">
                    ABOUT MOVIE
                  </h3>
                  <span className="font-light text-slate-100 text-[0.8rem]">
                    {formData.aboutMovie}
                  </span>
                </div>
                <button
                  className="bg-[#0af930] text-[1.25rem] font-manrope font-bold py-1 px-4 self-end"
                  onClick={handleSendForSchedule}
                  disabled={isSending || isSent}
                >
                  {isSending
                    ? "SENDING..."
                    : isSent
                    ? "SENT"
                    : "SEND FOR SCHEDULE"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end my-3 mr-8">
            <button
              className="bg-[#0af930] text-[1.563rem] font-manrope font-bold py-1 px-6"
              onClick={handleNextMovie}
              disabled={!isSent}
            >
              NEXT
            </button>
          </div>
          <div className="bg-[#d8d9d8] w-full h-fit px-3 pt-1 pb-3">
            <form onSubmit={handleSubmit(formSubmit)}>
              <h3 className="text-[#000] text-[0.938rem] font-manrope font-bold">
                Payment Configuration
              </h3>
              <div className="flex justify-between">
                <div className="text-[#000] text-[0.938rem] font-manrope font-extrabold w-[23rem] flex flex-col gap-5 mt-5 flex-1">
                  <h3 className="self-end mr-[5rem]">COMPANY</h3>
                  <div className="flex items-center justify-between">
                    <label htmlFor="">RATION</label>
                    <input
                      type="number"
                      className="py-0.5 w-[11rem]"
                      // value={companyRation}
                      // onChange={(e) => setCompanyRation(e.target.value)}
                      {...register("companyRation")}
                    />
                  </div>
                  {errors?.companyRation?.message && (
                    <ErrorMessage message={errors.companyRation?.message} />
                  )}
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="whitespace-nowrap">
                      FINANCILA DB
                    </label>
                    <div className="bg-[#a6e0ae] h-[1.8rem] w-[11rem] flex items-center justify-center text-gray-500">
                      CONNECTED
                    </div>
                  </div>
                </div>
                <div className="flex justify-center flex-1">
                  <DoughnutChart
                    companyRation={watch("companyRation") || 0}
                    creatorRation={watch("creatorRation") || 0}
                  />
                </div>
                <div className="flex flex-col items-start gap-7 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-5">
                      <label
                        htmlFor=""
                        className="whitespace-nowrap text-[0.8rem] text-[#000] font-bold font-manrope"
                      >
                        CREATOR
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          placeholder="Producer"
                          className="w-[10rem] h-[1.5rem] focus:border-none focus:outline-none border-1 rounded-md placeholder:text-[0.8rem] pl-7"
                          {...register("creatorName")}
                        />
                        <Image
                          src={SearchIcon}
                          width={15}
                          height={15}
                          alt="Search Icon"
                          className="absolute left-0 ml-2 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div className="whitespace-nowrap text-[0.6rem] text-[#000] font-light outline outline-1 outline-[#000] rounded-md bg-[#0af831] px-2 py-0.5">
                      CONNECT
                    </div>
                  </div>
                  {errors.creatorName?.message && (
                    <ErrorMessage message={errors.creatorName?.message} />
                  )}
                  <div className="flex items-center justify-between w-[88%]">
                    <label
                      htmlFor=""
                      className="whitespace-nowrap text-[0.8rem] text-[#000] font-bold font-manrope"
                    >
                      RATION
                    </label>
                    <input
                      type="number"
                      className="w-[10rem] h-[1.6rem]"
                      {...register("creatorRation")}
                    />
                  </div>
                  {errors.creatorRation?.message && (
                    <ErrorMessage message={errors.creatorRation?.message} />
                  )}
                  <div className="flex items-center justify-between w-[88%]">
                    <label
                      htmlFor=""
                      className="whitespace-nowrap text-[0.8rem] text-[#000] font-bold font-manrope"
                    >
                      LOCK AMOUNT
                    </label>
                    <input
                      type="number"
                      className="w-[10rem] h-[1.6rem]"
                      {...register("lockAmount")}
                    />
                  </div>
                  {errors.lockAmount?.message && (
                    <ErrorMessage message={errors.lockAmount?.message} />
                  )}
                  <button
                    type="submit"
                    disabled={isConnecting || isConnected}
                    className="bg-[#0af831] place-self-end mt-20 px-[3rem] py-[0.4rem] text-[0.938rem] text-[#000] font-manrope font-bold"
                  >
                    {isConnecting
                      ? "CONNECTING..."
                      : isConnected
                      ? "CONNECTED"
                      : "CONNECT"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
