import { Flex, Box, Image } from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";

const VideoReviewsSection = () => {
  return (
    <Box mt="30px" mb="20px" h="281px">
      <HeadingBox title="Reviews of The Days" actionTitle=" Al Video" />
      <Flex mt="20px">
        <Image
          src="/images/thumb.png"
          alt="Video Thumb"
          width="335px"
          height="181px"
          borderRadius="5px"
        />
      </Flex>
    </Box>
  );
};

export default VideoReviewsSection;
