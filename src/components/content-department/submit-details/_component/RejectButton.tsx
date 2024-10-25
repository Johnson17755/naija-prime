"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface RejectButtonProps {
  id: string;
  onSuccess: () => void; 
}

const RejectButton: React.FC<RejectButtonProps> = ({ id, onSuccess }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  const handleReject = async () => {
    setLoading(true);
    try {
      const payload = { id }; 

      const response = await axios.put(
        `${baseUrl}/api/v1/contentReview/reject`,
        {},
        { params: payload }
      );
      // Display success toast
      toast.success("Content rejected successfully!");
      if (onSuccess) onSuccess(); // Call onSuccess prop
      return response.data;
    } catch (error) {
      // Display error toast
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error.response);
        toast.error(
          error.response?.data?.message ||
            "An error occurred while rejecting the content."
        );
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleReject}
        className="bg-red-500 py-1 px-3 text-xs font-bold"
        disabled={loading}
      >
        {loading ? "REJECTING..." : "REJECT"}
      </button>
    </div>
  );
};

export default RejectButton;
