import { Box, Text } from "@/components/Auxilary";
import { toastAtom } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useDidUpdate } from "rooks";

const Toast = () => {
  const [showToast, setShowToast] = useAtom(toastAtom);

  useDidUpdate(() => {
    let timeoutId: NodeJS.Timeout;
    if (showToast.isShown) {
      timeoutId = setTimeout(() => {
        setShowToast({ isShown: false });
      }, 4000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showToast]);

  return (
    <AnimatePresence>
      {showToast.isShown && (
        <motion.div
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            y: -80,
            opacity: 1,
          }}
          exit={{
            y: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <Box
            w="300px"
            pos="fixed"
            bottom="0px"
            left="50%"
            transform="translateX(-50%)"
            invert
            p="0.7em"
            radius="10px"
            o="0.7"
          >
            <Text size="13px" weight="600" invert>
              {showToast.message}
            </Text>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
