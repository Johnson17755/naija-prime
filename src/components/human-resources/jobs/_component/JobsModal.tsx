"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { jobOpeningSchema } from "@/utils/validation";
import { selectJobsData } from "@/constants";
import { createJobOpening } from "@/redux/jobOpening/actions";
import { ErrorMessage } from "@/utils/messages/error-message";

interface ModalBoxProps {
  closeModal: () => void;
}

export const JobsModal = ({ closeModal }: ModalBoxProps) => {
  const { isAddJobLoading } = useAppSelector((state) => state.jobOpenings);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobTitle: "",
      department: "",
      candidates: null,
      qualifications: "",
      salary: "",
      expireDate: "",
    },
    resolver: yupResolver(jobOpeningSchema) as any,
  });

  const formSubmit = (data: any) => {
    createJobOpening(data, reset, closeModal);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[1.563rem] font-bold font-sourceSerif">
          Create New Job
        </h1>
        <button
          onClick={closeModal}
          className="size-6 flex justify-center items-center rounded-full border-2 border-[#fff] text-black font-bold text-lg"
        >
          &times;
        </button>
      </div>
      <div className="pl-6">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="grid grid-cols-1 gap-y-4 px-10 mt-10">
            <div className="flex flex-col items-start">
              <label
                htmlFor="jobTitle"
                className="text-[0.938rem] text-[#4C4C4C] font-manrope font-bold"
              >
                Job Title
              </label>
              <input
                type="text"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("jobTitle")}
              />
              {errors.jobTitle?.message && (
                <ErrorMessage message={errors.jobTitle.message} />
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="department"
                className="text-[0.938rem] text-[#4C4C4C] font-manrope font-bold"
              >
                Hiring Department
              </label>
              <select
                id="department"
                className="bg-[#fff] text-[#4C4C4C] border-none focus:outline-none focus:border-none py-2 px-2 2xl:px-3 w-full"
                {...register("department")}
              >
                <option value="" className="bg-[#fff] text-[#4C4C4C]">
                  Select Department
                </option>
                {selectJobsData.map((dept, index) => (
                  <option
                    value={dept}
                    key={index}
                    className="bg-[#fff] text-[#4C4C4C] py-3"
                  >
                    {dept}
                  </option>
                ))}
              </select>
              {errors.department?.message && (
                <ErrorMessage message={errors.department.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="candidates"
                className="text-[0.938rem] text-[#4C4C4C] font-manrope font-bold"
              >
                Number of Candidate
              </label>
              <input
                type="number"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("candidates")}
              />
              {errors.candidates?.message && (
                <ErrorMessage message={errors.candidates.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="qualifications"
                className="text-[0.938rem] text-[#4C4C4C] font-manrope font-bold"
              >
                Qualification
              </label>
              <input
                type="text"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("qualifications")}
              />
              {errors.qualifications?.message && (
                <ErrorMessage message={errors.qualifications.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="salary"
                className="text-[0.938rem] text-[#4C4C4C] font-manrope font-bold"
              >
                Salary
              </label>
              <input
                type="text"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("salary")}
              />
              {errors.salary?.message && (
                <ErrorMessage message={errors.salary.message} />
              )}
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="expireDate"
                className="text-[0.938rem] text-[#4C4C4C] font-manrope font-bold"
              >
                Valid till
              </label>
              <input
                type="date"
                className="w-full border-none p-2 focus:outline-none focus:border-none"
                {...register("expireDate")}
              />
            </div>
            {errors.expireDate?.message && (
              <ErrorMessage message={errors.expireDate.message} />
            )}
          </div>
          <div className="flex items-center justify-end mt-12 px-10">
            <button
              type="submit"
              disabled={isAddJobLoading}
              className="bg-[#0af930] text-[0.938rem] font-manrope font-bold text-[#000] py-0.5 px-3 rounded-sm"
            >
              {isAddJobLoading ? (
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
                "CREATE"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
