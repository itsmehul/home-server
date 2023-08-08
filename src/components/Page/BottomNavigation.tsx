import { Box, Flex } from "@/components/Auxilary";
import { pages } from "@/utils/constants";
import { AnimatePresence, motion, useWillChange } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { useTheme } from "styled-components";

const BottomNavigation = () => {

  return (
    <Box h="70px" invert w="100%">
      <Flex
        clampWidth={["320px", "700px"]}
        invert
        justify="space-around"
        align="center"
        m="auto"
        h="100%"
      >
        {pages[1].map((page) => (
          <NavButton
            key={page.pathname}
            pathname={page.pathname}
            icon={page.icon}
          />
        ))}
      </Flex>
    </Box>
  );
};

interface NavButtonProps {
  pathname: string;
  icon: React.ComponentType<{ fontSize: number; opacity: number }>;
}

interface IconProps {
  isActive: boolean;
  icon: any;
}

const AnimatedIcon = ({ isActive, icon }: IconProps) => {
  const theme = useTheme();
  const willChange = useWillChange()
  const Icon = React.createElement(icon, {
    fontSize: 22,
    opacity: isActive ? 1 : 0.5,
  });
  return (
    <AnimatePresence>
      {isActive ? (
        <div
          style={{
            position: "relative",
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{ willChange }}
          >
            {Icon}
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: -5,
              left: "50%",
              transform: "translateX(-50%)",
              height: 2,
              backgroundColor: theme.toneTwo,
              ...willChange
            }}
          />
        </div>
      ) : (
        Icon
      )}
    </AnimatePresence>
  );
};

const NavButton = ({ pathname, icon }: NavButtonProps) => {
  const router = useRouter();

  const isActive = router.pathname === pathname;

  return (
    <motion.div
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      onClick={() => {
        router.push(pathname);
      }}
    >
      <Box
        invert
        onClick={() => {
          router.push(pathname);
        }}
        p="0.5em 1em"
        cursor="pointer"
      >
        <AnimatedIcon isActive={isActive} icon={icon} />
      </Box>
    </motion.div>
  );
};

export default BottomNavigation;
