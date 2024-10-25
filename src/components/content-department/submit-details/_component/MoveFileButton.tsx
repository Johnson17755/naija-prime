"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface MoveFileButtonProps {
  id: string;
  onSuccess: () => void;
}

const MoveFileButton: React.FC<MoveFileButtonProps> = ({ id, onSuccess }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

  const handleMoveFile = async () => {
    setLoading(true);
    try {
      const payload = { id }; // Sending content ID to be moved

      const response = await axios.put(
        `${baseUrl}/api/v1/contentReview/update-status-accept`,
        {},
        { params: payload }
      );
      // Display success toast
      toast.success("Content moved successfully!");
      if (onSuccess) onSuccess(); // Call onSuccess prop
      return response.data;
    } catch (error) {
      // Display error toast
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error.response);
        toast.error(
          error.response?.data?.message ||
            "An error occurred while moving the content."
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
        onClick={handleMoveFile}
        className="bg-[#0283FABA] py-1 px-3 text-xs font-bold border border-black"
        disabled={loading}
      >
        {loading ? "MOVING..." : "MOVE TO FILE"}
      </button>
    </div>
  );
};

export default MoveFileButton;
