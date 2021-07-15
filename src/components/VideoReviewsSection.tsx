import { Flex, Box, Image } from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";

const VideoReviewsSection = () => {
  return (
    <Box mt="25px" h="281px">
      <HeadingBox title="Reviews of The Days" actionTitle=" Al Video" />
      <Flex mt="10px">
        <Image
          src="/images/thumb.png"
          alt="Video Thumb"
          width="335px"
          height="181px"
        />
      </Flex>
    </Box>
  );
};

export default VideoReviewsSection;
