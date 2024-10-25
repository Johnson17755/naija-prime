"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface SendToFinanceProps {
  id: string;
  onSuccess: () => void;
}

const SendToFinance: React.FC<SendToFinanceProps> = ({ id, onSuccess }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendToFinance = async () => {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
      const payload = { id };

      const response = await axios.put(
        `${baseUrl}/api/v1/contentReview/Send-to-finance`,
        {},
        { params: payload }
      );
      // Display success toast
      toast.success("Content sent to finance successfully!");
      if (onSuccess) onSuccess(); // Call onSuccess prop
      return response.data;
    } catch (error) {
      // Display error toast
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error.response);
        toast.error(
          error.response?.data?.message ||
            "An error occurred while sending content to finance."
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
        onClick={handleSendToFinance}
        className="bg-[#0BF931] py-1 px-3 text-xs font-bold"
        disabled={loading}
      >
        {loading ? "SENDING..." : "SEND TO FINANCE"}
      </button>
    </div>
  );
};

export default SendToFinance;
