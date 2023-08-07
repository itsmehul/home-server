import { motion } from "framer-motion";
import styled from "styled-components";

const CountBadge = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f44336;
  color: #ffffff;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  font-size: 10px;
`;

const countBadgeVariants = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
export interface NotificationBadgeProps {
  content: number | string | boolean;
}

const NotificationBadge = ({ content }: NotificationBadgeProps) => {
  if (typeof content === "boolean") {
    return (
      <CountBadge
        variants={countBadgeVariants}
        initial="initial"
        animate="animate"
      />
    );
  } else {
    return (
      <CountBadge
        variants={countBadgeVariants}
        initial="initial"
        animate="animate"
      >
        {content}
      </CountBadge>
    );
  }
};

export default NotificationBadge;
