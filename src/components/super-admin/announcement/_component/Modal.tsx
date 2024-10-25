import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";
import Form from "./Form";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  return (
    showModal && (
      <motion.div
        className="backdrop"
        variants={backdrop}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="modal"
          variants={modal}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          <div className="flex justify-between items-center">
            <p className="font-bold">Create Announcement</p>
            <button onClick={() => setShowModal(false)}>
              <MdOutlineCancel size={23} />
            </button>
          </div>
          <div className="my-3">
            <Form setShowModal={setShowModal} />
          </div>
        </motion.div>
      </motion.div>
    )
  );
};

export default Modal;
