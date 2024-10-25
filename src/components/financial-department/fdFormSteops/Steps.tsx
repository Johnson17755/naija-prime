import React from "react";
import { Step } from "./Step";

interface StepData {
  number: number;
}

interface StepsProps {
  steps: StepData[];
}

export const Steps = ({ steps }: StepsProps) => {
  return (
    <div className="flex items-center gap-2">
      {steps.map((step, index) => {
        return <Step key={index} step={step} />;
      })}
    </div>
  );
};
