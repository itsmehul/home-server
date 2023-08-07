import { Box, Text } from "@/components/Auxilary";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface CollapseProps {
  children: React.ReactNode;
  label: string;
}

const Collapse = ({ children, label }: CollapseProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const variants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box>
      <Text
        onClick={toggleCollapse}
        style={{ cursor: "pointer" }}
        size="14px"
        mb="3px"
      >
        {label}
      </Text>
      <AnimatePresence initial={false}>
        {isCollapsed && (
          <motion.div
            key="content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Collapse;
