import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { API } from "@/utils/api";
import UploadImage from "../../../../../public/assets/employee-upload-img.svg";
import { ErrorMessage } from "@/utils/messages/error-message";
import { UseFormRegister, FieldValues, UseFormSetValue, FieldError } from "react-hook-form";

interface ImageUploadProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: { [key: string]: FieldError | undefined };
}

export const ImageUpload = ({ register, setValue, errors }: ImageUploadProps) => {
  const [image, setImage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await API.post("/api/content-creators/upload", formData);
        const imageUrl = response.data;
        setImage(imageUrl);
        setValue("imageUrl", imageUrl, { shouldValidate: true });
      } catch (error) {
        console.error("Error uploading image", error);
      }
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-2 h-fit w-[25%] mx-auto bg-[#fefffe] rounded-md cursor-pointer p-7 rounded-tl-[80%] rounded-tr-[80%] rounded-bl-[80%] rounded-br-[80%] shadow-md shadow-gray-500"
      onClick={() => fileRef.current && fileRef.current.click()}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
          <Image src={UploadImage} width={50} height={50} alt="Upload Icon" />
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
      <div className="text-center mt-3">
        {errors.imageUrl?.message && (
          <ErrorMessage message={errors.imageUrl.message} />
        )}
      </div>
    </div>
  );
};
