import { Flex, Box, Heading, Image as ChakraImage } from "@chakra-ui/react";

const HelloUser = () => {
  return (
    <Flex mt="128px">
      <Heading color="gray.600" fontSize="2xl" fontWeight="400">
        Hi,
      </Heading>
      <Heading px={1} pr={2} color="pink.500" fontSize="2xl" fontWeight="700">
        Mehmed Al Fatih
      </Heading>
      <Box boxSize="sm" w="24px" h="24px">
        <ChakraImage src="/images/hello-hand.svg" alt="Hello" />
      </Box>
    </Flex>
  );
};

export default HelloUser;
