import { motion } from "framer-motion";

const spinnerVariants = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 360,
  },
};

const Loading = () => (
  <div className="flex justify-center items-center">
    <motion.div
      className="w-7 h-7 border-4 border-t-green-500 border-[#000000] rounded-full"
      variants={spinnerVariants}
      initial="start"
      animate="end"
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    />
  </div>
);

export default Loading;
