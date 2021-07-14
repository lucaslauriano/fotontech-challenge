import {
  Flex,
  Image as ChakraImage,
  Stack,
  Center,
  Heading,
  Divider,
  Container,
} from "@chakra-ui/react";

const FloatingBar = () => {
  return (
    <Container
      h="56px"
      mx="20px"
      bg="white"
      bottom="30px"
      position="fixed"
      maxWidth={[335, 1024]}
      boxShadow="3px 3px 23px rgba(107, 103, 70, 0.125901);"
      borderRadius="2px"
    >
      <Center h="56px">
        <Stack width="100%" spacing="30px" direction="row">
          <Flex>
            <ChakraImage
              src="/images/book-open.svg"
              alt="Home"
              width="16px"
              height="16px"
            />
            <Heading
              ml="10px"
              color="gray.700"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="700"
            >
              Read
            </Heading>
          </Flex>
          <Divider orientation="vertical" />
          <Flex>
            <ChakraImage
              src="/images/headphones.svg"
              alt="Home"
              width="17.78px"
              height="16px"
            />
            <Heading
              ml="10px"
              color="gray.700"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="700"
            >
              Listen
            </Heading>
          </Flex>
          <Divider orientation="vertical" />
          <Flex>
            <ChakraImage
              src="/images/share.svg"
              alt="Home"
              width="17.78px"
              height="16px"
            />
            <Heading
              ml="10px"
              color="gray.700"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="700"
            >
              Share
            </Heading>
          </Flex>
        </Stack>
      </Center>
    </Container>
  );
};

export default FloatingBar;
