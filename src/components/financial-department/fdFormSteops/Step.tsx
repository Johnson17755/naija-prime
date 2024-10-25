"use client";

import { useAppSelector } from "@/redux/hooks";
interface StepData {
  number: number;
}

interface StepProps {
  step: StepData;
}

export const Step = ({ step }: StepProps) => {
  const { number } = step;
  const fdFormCurrentStep = useAppSelector(
    (state) => state.fdFormSteps.fdFormCurrentStep
  );

  return (
    <>
      <div className="flex">
        <div
          className={`flex items-center justify-center size-4 rounded-full ${
            number === fdFormCurrentStep ? "bg-[#0bf931]" : "bg-[#d8d8d9]"
          }  `}
        ></div>
      </div>
    </>
  );
};
