import { motion } from "framer-motion";
import { RiLoader5Line } from "react-icons/ri";

const Loader = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <RiLoader5Line size={50} />
    </motion.div>
  );
};

export default Loader;
