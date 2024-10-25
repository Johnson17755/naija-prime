// ModalButton.tsx
import React from "react";
import { CiCirclePlus } from "react-icons/ci";

interface ModalButtonProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalButton: React.FC<ModalButtonProps> = ({ setShowModal }) => {
  return (
    <button
      onClick={() => setShowModal(true)}
      className="flex items-center gap-2 bg-[#11EE42DB] font-bold px-2 border border-black"
    >
      <CiCirclePlus size={20} style={{ strokeWidth: 1 }} />
      Create
    </button>
  );
};

export default ModalButton;
