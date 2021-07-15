import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";
import NewBookBanner from "./NewbookBanner";
import Carousel from "react-multi-carousel";

const DiscoverNewBookSection = () => {
  const [isFocused, setIsFocused] = useState(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 376, min: 272 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <Box mt="30px">
      <HeadingBox title="Discover new book" actionTitle="More" />

      <Box width="100%" maxWidth={1024}>
        <Carousel
          responsive={responsive}
          ssr={true}
          sliderClass={"item"}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          focusOnSelect={true}
          additionalTransfrom={0}
          partialVisible
        >
          {["1", 2, 3].map((item, index) => (
            <NewBookBanner key={index} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default DiscoverNewBookSection;
