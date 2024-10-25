"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import UploadImageIcon from "../../../../../public/assets/upload-img-icon.svg";
import { API } from "@/utils/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { createJobApplication } from "@/redux/application/actions";
import { jobApplicationSchema } from "@/utils/validation";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@/utils/messages/error-message";
import { useAppSelector } from "@/redux/hooks";
import { alertNotification } from "@/redux/auth/actions";

type FormFields =
  | "firstName"
  | "lastName"
  | "otherName"
  | "age"
  | "sex"
  | "state"
  | "phoneNumber"
  | "email"
  | "emergencyContact"
  | "fullAddress"
  | "qualifications"
  | "yearsOfExperience"
  | "previousOrganization"
  | "positionAppliedFor"
  | "governmentIdUrl"
  | "certificateUrl";

interface ModalBoxProps {
  closeModal: () => void;
}

export const ModalBox = ({ closeModal }: ModalBoxProps) => {
  const [governmentIdImage, setGovernmentIdImage] = useState<string | null>(
    null
  );
  const [certificateImage, setCertificateImage] = useState<string | null>(null);
  const governmentIdFileRef = useRef<HTMLInputElement | null>(null);
  const certificateFileRef = useRef<HTMLInputElement | null>(null);

  const { isLoading } = useAppSelector((state) => state.applications);

  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      otherName: "",
      age: "",
      sex: "",
      state: "",
      phoneNumber: "",
      email: "",
      emergencyContact: "",
      fullAddress: "",
      qualifications: "",
      yearsOfExperience: "",
      previousOrganization: "",
      positionAppliedFor: "",
      governmentIdUrl: "",
      certificateUrl: "",
    },
    resolver: yupResolver(jobApplicationSchema) as any,
  });

  const formSubmit = (data: any) => {
    createJobApplication(data, reset, closeModal);
    setGovernmentIdImage(null);
    setCertificateImage(null);
  };
  const handleImageUpload = async (
    e: ChangeEvent<HTMLInputElement>,
    field: FormFields
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith("image/")) {
        console.error("The selected file is not an image.");
        alertNotification("Please upload an image file.", "error");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await API.post(
          "/api/content-creators/upload",
          formData
        );
        const fileUrl = response.data;
        console.log("Image url:", fileUrl);

        if (field === "governmentIdUrl") {
          setGovernmentIdImage(fileUrl);
        } else if (field === "certificateUrl") {
          setCertificateImage(fileUrl);
        }
        setValue(field, fileUrl, { shouldValidate: true });
      } catch (error) {
        console.error("Error uploading document", error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Create Application</h1>
        <button
          onClick={closeModal}
          className="size-6 flex justify-center items-center rounded-full border-2 border-[#fff] text-black font-bold text-lg"
        >
          &times;
        </button>
      </div>
      <div className="pl-6">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="grid grid-cols-3 gap-4 pr-[10rem]">
            <div className="flex flex-col items-start">
              <label
                htmlFor="firstName"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("firstName")}
              />
              {errors.firstName?.message && (
                <ErrorMessage message={errors.firstName.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="lastName"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("lastName")}
              />
              {errors.lastName?.message && (
                <ErrorMessage message={errors.lastName.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="otherName"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Other Name
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("otherName")}
              />
              {errors.otherName?.message && (
                <ErrorMessage message={errors.otherName.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="age"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Age
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("age")}
              />
              {errors.age?.message && (
                <ErrorMessage message={errors.age.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="sex"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Sex
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("sex")}
              />
              {errors.sex?.message && (
                <ErrorMessage message={errors.sex.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="state"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                State
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("state")}
              />
              {errors.state?.message && (
                <ErrorMessage message={errors.state.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="phoneNumber"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber?.message && (
                <ErrorMessage message={errors.phoneNumber.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="email"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("email")}
              />
              {errors.email?.message && (
                <ErrorMessage message={errors.email.message} />
              )}
            </div>
            <div>
              <label
                htmlFor="emergencyContact"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Emergency contact
              </label>
              <input
                type="text"
                className="w-full border-none p-2"
                {...register("emergencyContact")}
              />
              {errors.emergencyContact?.message && (
                <ErrorMessage message={errors.emergencyContact.message} />
              )}
            </div>
          </div>
          <div className="flex justify-between pr-[3%] mt-[5%]">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col items-start">
                <label
                  htmlFor="fullAddress"
                  className="text-[0.938rem] text-[#000] font-manrope font-bold"
                >
                  Full Address
                </label>
                <input
                  type="text"
                  className="w-full border-none p-2"
                  {...register("fullAddress")}
                />
                {errors.fullAddress?.message && (
                  <ErrorMessage message={errors.fullAddress.message} />
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="qualifications"
                    className="text-[0.938rem] text-[#000] font-manrope font-bold"
                  >
                    Qualifications
                  </label>
                  <input
                    type="text"
                    className="w-full border-none p-2"
                    {...register("qualifications")}
                  />
                  {errors.qualifications?.message && (
                    <ErrorMessage message={errors.qualifications.message} />
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="yearsOfExperience"
                    className="text-[0.938rem] text-[#000] font-manrope font-bold"
                  >
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    className="w-full border-none p-2"
                    {...register("yearsOfExperience")}
                  />
                  {errors.yearsOfExperience?.message && (
                    <ErrorMessage message={errors.yearsOfExperience.message} />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="previousOrganization"
                  className="text-[0.938rem] text-[#000] font-manrope font-bold"
                >
                  List the organisation you have worked for and Position
                </label>
                <textarea
                  className="w-full border-none p-4"
                  {...register("previousOrganization")}
                ></textarea>
                {errors.previousOrganization?.message && (
                  <ErrorMessage message={errors.previousOrganization.message} />
                )}
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="positionAppliedFor"
                  className="text-[0.938rem] text-[#000] font-manrope font-bold"
                >
                  Position Applied for?
                </label>
                <input
                  type="text"
                  className="w-full border-none p-2"
                  {...register("positionAppliedFor")}
                />
                {errors.positionAppliedFor?.message && (
                  <ErrorMessage message={errors.positionAppliedFor.message} />
                )}
              </div>
            </div>
            <div className="w-[30%] flex flex-col items-start gap-3">
              <div className="w-full">
                <h3 className="text-[0.938rem] text-[#000] font-manrope font-bold">
                  Upload Government ID
                </h3>
                <div
                  className="flex flex-col justify-center items-center gap-2 h-40 max-w-full mx-auto bg-[#a3a2a2] rounded-sm cursor-pointer p-7 z-20 relative overflow-hidden"
                  onClick={() =>
                    governmentIdFileRef.current &&
                    governmentIdFileRef.current.click()
                  }
                >
                  {!governmentIdImage ? (
                    <>
                      <Image
                        src={UploadImageIcon}
                        width={50}
                        height={50}
                        alt="Upload Icon"
                        className=""
                      />
                      <div className="flex flex-col items-center">
                        <span className="uppercase text-[0.625rem] text-[#000] font-manrope font-normal">
                          Click to{" "}
                          <span className="text-[#10ED31] font-bold">
                            upload
                          </span>{" "}
                          image
                        </span>
                        <span className="uppercase text-[0.625rem] text-[#000] font-manrope font-normal">
                          or drag and drop here
                        </span>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={governmentIdImage}
                      alt="Uploaded Image"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full z-50"
                    />
                  )}
                  <input
                    type="file"
                    ref={governmentIdFileRef}
                    accept=".pdf,.doc,.docx,.jpeg,.png,.gif"
                    onChange={(e) => handleImageUpload(e, "governmentIdUrl")}
                    hidden
                  />
                </div>
                <div className="text-center mt-3">
                  {errors.governmentIdUrl?.message && (
                    <ErrorMessage message={errors.governmentIdUrl.message} />
                  )}
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-[0.938rem] text-[#000] font-manrope font-bold">
                  Upload Certificate
                </h3>
                <div
                  className="flex flex-col justify-center items-center gap-2 h-40 max-w-full mx-auto bg-[#a3a2a2] rounded-sm cursor-pointer p-7 relative overflow-hidden"
                  onClick={() =>
                    certificateFileRef.current &&
                    certificateFileRef.current.click()
                  }
                >
                  {!certificateImage ? (
                    <>
                      <Image
                        src={UploadImageIcon}
                        width={50}
                        height={50}
                        alt="Upload Icon"
                        className=""
                      />
                      <div className="flex flex-col items-center">
                        <span className="uppercase text-[0.625rem] text-[#000] font-manrope font-normal">
                          Click to{" "}
                          <span className="text-[#10ED31] font-bold">
                            upload
                          </span>{" "}
                          image
                        </span>
                        <span className="uppercase text-[0.625rem] text-[#000] font-manrope font-normal">
                          or drag and drop here
                        </span>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={certificateImage}
                      alt="Uploaded Image"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 w-full h-full z-50"
                    />
                  )}
                  <input
                    type="file"
                    ref={certificateFileRef}
                    accept=".pdf,.doc,.docx,.jpeg,.png,.gif"
                    onChange={(e) => handleImageUpload(e, "certificateUrl")}
                    hidden
                  />
                </div>
                <div className="text-center mt-3">
                  {errors.certificateUrl?.message && (
                    <ErrorMessage message={errors.certificateUrl.message} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex justify-between mt-[2%]">
            <button
              type="button"
              className="bg-red-500 text-white px-3 py-1 text-[0.938rem] font-manrope font-bold rounded-sm"
              onClick={closeModal}
            >
              DELETE
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-3 py-1 text-[0.938rem] font-manrope font-bold rounded-sm"
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>{" "}
                  Uploading...
                </div>
              ) : (
                "UPLOAD"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
