import { motion } from "framer-motion";
import styled from "styled-components";

const Drawer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

interface BottomDrawerProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const BottomDrawer = ({ isOpen, onClose, children }: BottomDrawerProps) => {
  const variants = {
    open: { y: 0 },
    closed: { y: "100%" },
  };

  return (
    <Drawer
      variants={variants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </Drawer>
  );
};

export default BottomDrawer;
