import { Flex, Box, Text, Image as ChakraImage } from "@chakra-ui/react";

interface NewBookHeadLineProps {
  book?: {};
}

const NewBookHeadLine = ({ book }: NewBookHeadLineProps) => {
  return (
    <Box
      w="272px"
      h="139px"
      mt="15px"
      bg="blue.800"
      color="white"
      boxShadow="2xl"
      borderRadius="5px"
    >
      <Flex>
        <Box bg="pink.800">
          <Text
            ml="20px"
            color="red.50"
            fontSize="27px"
            fontFamily="Playfair Display"
            lineHeight="35.99px"
            letterSpacing="2px"
          >
            Hooked
          </Text>

          <Text
            ml="20px"
            align="start"
            color="gray.300"
            fontSize="14px"
            fontStyle="italic"
            lineHeight="16.43px"
            letterSpacing="1.29px"
          >
            Nir Eyal
          </Text>
          <Box>
            <Flex>
              <ChakraImage src="/ico/bar-chart-square.svg" alt="Hello" />
              <Text
                ml="4px"
                mt="3px"
                color="gray.300"
                fontSize="10px"
                fontWeight="700"
                lineHeight="11.93px"
              >
                120+
              </Text>
              <Text
                ml="4px"
                mt="3px"
                color="gray.300"
                fontSize="10px"
                lineHeight="11.93px"
                fontWeight="400"
              >
                Read Now
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box w="100%" h="auto" bg="pink.800">
          <ChakraImage
            mr="-20px"
            mt="15px"
            alt="tets"
            src="http://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
            width="72px"
            height="111px"
            borderRadius="5px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default NewBookHeadLine;
