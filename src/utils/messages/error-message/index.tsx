import React from "react";

export const ErrorMessage = ({ message }: { message: string }) => {
  return <div className="text-sm text-red-500">{message}</div>;
};
