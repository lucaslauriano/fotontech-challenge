import { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Box, Stack } from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";
import NewBookBanner from "./NewbookBanner";
import {
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  CarouselProvider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { NONAME } from "dns";
import { inherits } from "util";

const card = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const DiscoverNewBookSection = () => {
  const [isFocused, setIsFocused] = useState(true);
  return (
    <Box mt="30px">
      <HeadingBox title="Discover new book" actionTitle="More" />

      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={200}
        isIntrinsicHeight={true}
        totalSlides={3}
      >
        <Slider moveThreshold={1} style={{ top: "15px" }}>
          <Slide
            index={0}
            style={{
              width: "272px",
              height: "139px",
              bottom: "14px",
              position: "relative",
              marginLeft: isFocused ? "0px" : "10px",
            }}
            onFocus={() => {
              setIsFocused((prevState) => !prevState);
            }}
          >
            <NewBookBanner isFocused={isFocused} />
          </Slide>
          <Slide
            index={0}
            style={{
              width: "250px",
              height: "128px",
              bottom: "14px",
              position: "relative",
              marginLeft: "10px",
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
          >
            <NewBookBanner isFocused={isFocused} />
          </Slide>
          <Slide
            index={0}
            style={{
              width: "250px",
              height: "128px",
              bottom: "14px",
              position: "relative",
              marginLeft: "10px",
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
          >
            <NewBookBanner isFocused={isFocused} />
          </Slide>
        </Slider>
      </CarouselProvider>
    </Box>
  );
};

export default DiscoverNewBookSection;
