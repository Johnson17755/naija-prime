"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@/utils/messages/error-message";
import { employeeSchema } from "@/utils/validation";
import { useAppSelector } from "@/redux/hooks";
import UploadImage from "../../../../../public/assets/employee-upload-img.svg";
import { selectDepartmentsData } from "@/constants";
import { API } from "@/utils/api";
import { alertNotification, createEmployee } from "@/redux/auth/actions";

interface ModalBoxProps {
  closeModal: () => void;
}

export const EmployeeModal = ({ closeModal }: ModalBoxProps) => {
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [passkey, setPasskey] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [isGeneratng, setIsGenerating] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { isLoading } = useAppSelector((state) => state.user);

  // HR00223882: "Human Resources";
  // SA00112395: "Super Admin";
  // CX00654874: "customer ";
  // SCH000243769: "schedule ";
  // CSUP00765094: " Content dept";
  // ACCT00694632: " fin";

  const departSelected = [
    `SA00112395`,
    `HR00223882`,
    `CSUP00765094`,
    `SCH000243769`,
    `ACCT00694632`,
    `CX00654874`,
  ];

  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      lastName: "",
      imageUrl: "",
      email: "",
      phoneNumber: "",
      hiredDate: "",
      departmentPassword: "",
      uniquePassKey: "",
      userRole: "",
    },

    resolver: yupResolver(employeeSchema) as any,
  });

  useEffect(() => {
    setValue("departmentPassword", departmentCode, { shouldValidate: true });
  }, [departmentCode, setValue]);

  const formSubmit = (data: any) => {
    setFormSubmitted(true);
    createEmployee(data, reset, closeModal);
    setImage(null);
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
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
        const imageUrl = response.data;
        setImage(imageUrl);
        setValue("imageUrl", imageUrl, { shouldValidate: true });
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }
  };

  const handleDepartmentChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = e.target.selectedIndex - 1;
    if (selectedIndex >= 0 && selectedIndex < departSelected.length) {
      setDepartmentCode(departSelected[selectedIndex]);
      setValue("userRole", selectDepartmentsData[selectedIndex].value, {
        shouldValidate: true,
      });
    } else {
      setDepartmentCode("");
      setValue("userRole", "", { shouldValidate: true });
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Employee Registration</h1>
        <button
          onClick={closeModal}
          className="size-6 flex justify-center items-center rounded-full border-2 border-[#fff] text-black font-bold text-lg"
        >
          &times;
        </button>
      </div>
      <div className="pl-6">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div
            className="flex flex-col justify-center items-center gap-2 h-[10rem] w-[25%] mx-auto bg-[#fefffe] rounded-md cursor-pointer p-7 rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%] shadow-md shadow-gray-500 relative overflow-hidden"
            onClick={() => fileRef.current && fileRef.current.click()}
          >
            {!image && (
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="flex flex-col items-center">
                  <Image
                    src={UploadImage}
                    width={50}
                    height={50}
                    alt="Upload Icon"
                    className=""
                  />
                  <span className="text-[0.438rem] text-[#000] font-manrope font-semibold">
                    Click to upload
                  </span>
                </div>
                <span className="uppercase text-[0.938rem] text-[#fff] bg-[#0af831] font-manrope font-semibold px-3 py-0.5 rounded-sm">
                  upload
                </span>
              </div>
            )}
            {image && (
              <Image
                src={image}
                alt="Uploaded Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full z-0 rounded-md rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%]"
              />
            )}
            <input
              type="file"
              {...register("imageUrl")}
              ref={fileRef}
              onChange={handleImageUpload}
              hidden
            />
          </div>
          <div className="text-center mt-3">
            {errors.imageUrl?.message && (
              <ErrorMessage message={errors.imageUrl.message} />
            )}
          </div>
          <div className="grid grid-cols-3 gap-4 pr-[10rem] mt-10">
            <div className="flex flex-col items-start mb-5">
              <label
                htmlFor="firstName"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("firstName")}
              />
              {errors.firstName?.message && (
                <ErrorMessage message={errors.firstName.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="secondName"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Second Name
              </label>
              <input
                type="text"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("secondName")}
              />
              {errors.secondName?.message && (
                <ErrorMessage message={errors.secondName.message} />
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
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("lastName")}
              />
              {errors.lastName?.message && (
                <ErrorMessage message={errors.lastName.message} />
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
                type="email"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("email")}
              />
              {errors.email?.message && (
                <ErrorMessage message={errors.email.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="phoneNumber"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Phone
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber?.message && (
                <ErrorMessage message={errors.phoneNumber.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="hiredDate"
                className="text-[0.938rem] text-[#000] font-manrope font-bold"
              >
                Hired Date
              </label>
              <input
                type="date"
                id="hiredDate"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("hiredDate")}
              />
              {errors.hiredDate?.message && (
                <ErrorMessage message={errors.hiredDate.message} />
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pr-[15rem] mt-12">
            <div className="flex flex-col items-start">
              <select
                id="department"
                className="bg-[#fff] text-[#000] border-none focus:outline-none focus:border-none py-2 px-4 2xl:px-6 my-2"
                onChange={handleDepartmentChange}
              >
                <option value="" className="bg-[#fff] text-[#000]">
                  Select Department
                </option>
                {selectDepartmentsData.map((dept, index) => (
                  <option
                    value={dept.value}
                    className="bg-[#fff] text-[#000] py-3"
                    key={index}
                  >
                    {dept.name}
                  </option>
                ))}
              </select>
              {errors.userRole?.message && (
                <ErrorMessage message={errors.userRole.message} />
              )}
            </div>
            <div className="-ml-[4.5rem] 2xl:-ml-20 mt-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Generate Unique Pass key"
                  value={passkey}
                  readOnly
                  className="p-2 w-[80%] border-none placeholder:text-sm"
                  {...register("uniquePassKey")}
                />
                <button
                  type="button"
                  className="bg-[#0af930] text-[#000] text-[0.625rem] font-manrope font-semibold py-1 px-2 absolute right-0 mr-[5.3rem] rounded-sm"
                  onClick={async () => {
                    const firstName = (
                      document.querySelector(
                        'input[name="firstName"]'
                      ) as HTMLInputElement
                    ).value;
                    const lastName = (
                      document.querySelector(
                        'input[name="lastName"]'
                      ) as HTMLInputElement
                    ).value;

                    if (firstName && lastName) {
                      try {
                        setIsGenerating(true);
                        const response = await API.get("/hr/generate-passkey", {
                          params: { firstName, lastName },
                        });
                        const generatedPasskey = response.data;
                        setPasskey(generatedPasskey);
                        setValue("uniquePassKey", generatedPasskey, {
                          shouldValidate: true,
                        });
                        alertNotification(
                          "Passkey generated successfully",
                          "success"
                        );
                      } catch (error) {
                        alertNotification(
                          "Failed to generate passkey, try again",
                          "error"
                        );
                      } finally {
                        setIsGenerating(false);
                      }
                    } else {
                      alertNotification(
                        "First name and Last name are required to generate a passkey",
                        "error"
                      );
                    }
                  }}
                >
                  {isGeneratng ? (
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
                      </svg>
                      {""}
                      Generating...
                    </div>
                  ) : (
                    "Generate"
                  )}
                </button>
              </div>
              {errors.uniquePassKey?.message && (
                <ErrorMessage message={errors.uniquePassKey.message} />
              )}
            </div>
          </div>
          <div className="flex flex-col items-start mt-10">
            <label
              htmlFor=""
              className="text-[0.725rem] text-[#000] font-manrope font-bold"
            >
              Automatic department Password
            </label>
            <input
              type="text"
              className="border-none w-[26%] text-center"
              value={departmentCode}
              readOnly
              {...register("departmentPassword")}
              // onChange={(e) => {
              //   setValue("departmentPassword", e.target.value, {
              //     shouldValidate: true,
              //   });
              // }}
            />
          </div>
          {errors.departmentPassword?.message && (
            <ErrorMessage message={errors.departmentPassword.message} />
          )}
          <div className="flex items-center justify-between mt-10 pr-5">
            <button className="bg-[#fe0809] text-[0.938rem] font-manrope font-bold text-[#000] py-0.5 px-3 rounded-sm">
              Delete
            </button>
            <button
              type="submit"
              className="bg-[#0af930] text-[0.938rem] font-manrope font-bold text-[#000] py-0.5 px-3 rounded-sm"
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
                  Creating...
                </div>
              ) : (
                "REGISTER"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

// const generatePassKey = async (firstName: string, lastName: string) => {
//   try {
//     const response = await API.get("/hr/generate-passkey", {
//       params: {
//         firstName,
//         lastName,
//       },
//     });
//     alertNotification("Passkey generated successfully", "success");
//     setPasskey(response.data);
//   } catch (error) {
//     alertNotification("Failed to generate passkey, try again", "error");
//   }
// };

// const handleGeneratePassKeyClick = async () => {
//   const firstName = (
//     document.querySelector('input[name="firstName"]') as HTMLInputElement
//   ).value;
//   const lastName = (
//     document.querySelector('input[name="lastName"]') as HTMLInputElement
//   ).value;

//   if (firstName && lastName) {
//     try {
//       setIsGenerating(true);
//       await generatePassKey(firstName, lastName);
//     } catch (error) {
//       console.error("Error generating passkey", error);
//     } finally {
//       setIsGenerating(false);
//     }
//   } else {
//     alertNotification(
//       "First name and Last name are required to generate a passkey",
//       "error"
//     );
//   }
// };

{
  /* <div
className="flex flex-col justify-center items-center gap-2 h-fit w-[25%] mx-auto bg-[#fefffe] rounded-md cursor-pointer p-7 rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%] shadow-md shadow-gray-500"
onClick={() => fileRef.current && fileRef.current.click()}
>
<div className="flex flex-col items-center gap-3">
  <div className="flex flex-col items-center">
    <Image
      src={UploadImage}
      width={50}
      height={50}
      alt="Upload Icon"
      className=""
    />
    {image && (
      <Image
        src={image}
        width={40}
        height={40}
        alt="Uploaded Image"
        className="w-10 h-10 object-cover rounded-full"
      />
    )}
    <span className="text-[0.438rem] text-[#000] font-manrope font-semibold">
      Click to upload
    </span>
  </div>
  <span className="uppercase text-[0.938rem] text-[#fff] bg-[#0af831] font-manrope font-semibold px-3 py-0.5 rounded-sm">
    upload
  </span>
</div>
<input
  type="file"
  {...register("imageUrl")}
  ref={fileRef}
  onChange={handleImageUpload}
  hidden
/>
</div> */
}
