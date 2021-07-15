import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex, Stack } from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";
import NewBookBanner from "./NewbookBanner";
import TouchCarousel from "react-touch-carousel";

const DiscoverNewBookSection = () => {
  const [isFocused, setIsFocused] = useState(true);
  return (
    <Box mt="30px">
      <HeadingBox title="Discover new book" actionTitle="More" />

      <Box width="100%" maxWidth={1024} overflow="hidden">
        <Flex mt="15px">
          <NewBookBanner />
        </Flex>
      </Box>
    </Box>
  );
};

export default DiscoverNewBookSection;
