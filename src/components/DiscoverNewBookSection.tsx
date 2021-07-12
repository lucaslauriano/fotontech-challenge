import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex, Box, Stack, Text, Image as ChakraImage } from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";
import NewBookHeadLine from "./NewbookHeadLine";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const DiscoverNewBookSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Box mt="30px">
      <AnimatePresence initial={false} custom={direction}>
        <HeadingBox title="Discover new book" actionTitle="More" />
        <motion.div
          key={page}
          drag="x"
          exit="exit"
          custom={direction}
          initial="enter"
          animate="center"
          variants={variants}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Box maxWidth={1024} overflow="hidden">
            <Flex mt="15px">
              <Stack direction="row">
                <NewBookHeadLine />
              </Stack>
            </Flex>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};
