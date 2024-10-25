import React, { useState } from "react";
import { alertNotification } from "@/redux/auth/actions";
import { API } from "@/utils/api";
import { ErrorMessage } from "@/utils/messages/error-message";
import { UseFormSetValue, FieldValues, FieldError } from "react-hook-form";

interface GeneratePassKeyButtonProps {
    setValue: UseFormSetValue<FieldValues>;
    errors: { [key: string]: FieldError | undefined };
  }

export const GeneratePassKeyButton = ({
  setValue,
  errors,
}: GeneratePassKeyButtonProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [passkey, setPasskey] = useState<string>("");

  const generatePassKey = async (firstName: string, lastName: string) => {
    try {
      const response = await API.get("/hr/generate-passkey", {
        params: { firstName, lastName },
      });
      setPasskey(response?.data);
      setValue("uniquePassKey", response?.data, { shouldValidate: true });
      alertNotification("Passkey generated successfully", "success");
    } catch (error) {
      alertNotification("Failed to generate passkey, try again", "error");
    }
  };

  const handleGeneratePassKeyClick = async () => {
    const firstName = (
      document.querySelector('input[name="firstName"]') as HTMLInputElement
    ).value;
    const lastName = (
      document.querySelector('input[name="lastName"]') as HTMLInputElement
    ).value;

    if (firstName && lastName) {
      try {
        setIsGenerating(true);
        await generatePassKey(firstName, lastName);
      } finally {
        setIsGenerating(false);
      }
    } else {
      alertNotification(
        "First name and Last name are required to generate a passkey",
        "error"
      );
    }
  };

  return (
    <div className="-ml-[4.5rem] 2xl:-ml-20 mt-2">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Generate Unique Pass key"
          value={passkey}
          readOnly
          className="p-2 w-[80%] border-none placeholder:text-sm"
          onChange={(e) => {
            setValue("uniquePassKey", e.target.value, {
              shouldValidate: true,
            });
          }}
        />
        <button
          type="button"
          className="bg-[#0af930] text-[#000] text-[0.625rem] font-manrope font-semibold py-1 px-2 absolute right-0 mr-[5.3rem] rounded-sm"
          onClick={handleGeneratePassKeyClick}
        >
          {isGenerating ? (
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
  );
};
