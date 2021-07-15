import { Flex, Box, Text, Image, BoxProps } from "@chakra-ui/react";

interface NewBookBannerProps extends BoxProps {
  book?: {};
  isFocused?: boolean;
}

const NewBookBanner = ({ book, isFocused }: NewBookBannerProps, refs) => {
  return (
    <Box
      w={isFocused ? "272px" : "250px"}
      h={isFocused ? "139px" : "128px"}
      mt="15px"
      bg="blue.800"
      color="white"
      boxShadow="box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134)"
      borderRadius="5px"
    >
      <Flex height="100%" backgroundImage="/images/oval-waves.svg">
        <Box>
          <Text
            ml="20px"
            mt="20px"
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
            mt="5px"
            align="start"
            color="gray.300"
            fontSize="14px"
            fontStyle="italic"
            lineHeight="16.43px"
            letterSpacing="1.29px"
          >
            Nir Eyal
          </Text>
          <Box ml="20px" mt="28px">
            <Flex>
              <Image src="/ico/bar-chart-square.svg" alt="Hello" />
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

        <Box w="100%" h="auto">
          <Image
            mt="14px"
            ml="16px"
            alt="Purple Circle"
            src="/images/oval.svg"
            width="18px"
            height="18px"
            position="absolute"
          />

          <Image
            mt="4px"
            ml="40px"
            alt="Purple Circle"
            src="/images/path.svg"
            width="32.87px"
            height="28.22px"
            position="absolute"
          />

          <Image
            mt="96px"
            ml="15px"
            alt="Purple Circle"
            src="/images/rectangle.svg"
            width="46px"
            position="absolute"
          />

          <Image
            mr="-30px"
            mt="14px"
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

export default NewBookBanner;
