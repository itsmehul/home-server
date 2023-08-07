import { Box, Text } from "@/components/Auxilary";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.toneOne};

  width: 100%;
`;

const AccordionTitle = styled(motion.div)`
  background-color: ${({ theme }) => theme.toneTwo};
  color: ${({ theme }) => theme.toneOne};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const AccordionContent = styled(motion.div)``;

const Accordion = ({
  title,
  children,
  openState,
}: {
  title: string;
  children: React.ReactNode;
  openState: [boolean, () => void];
}) => {
  const [isOpen, setIsOpen] = openState;

  const toggleAccordion = () => {
    setIsOpen();
  };

  return (
    <AccordionWrapper>
      <AccordionTitle onClick={toggleAccordion}>
        <Text size="14px">{title}</Text>
        {isOpen ? null : <RiAddFill />}
      </AccordionTitle>
      <AnimatePresence>
        {isOpen && (
          <AccordionContent
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box>{children}</Box>
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionWrapper>
  );
};

export default Accordion;
