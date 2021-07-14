import { Box, Link, Heading, Container, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const BottomBar = () => {
  return (
    <Container
      h="59px"
      pt="6px"
      bg="white"
      bottom="0"
      marginLeft="-20px"
      position="fixed"
      maxWidth={1024}
    >
      <SimpleGrid width="100%" columns={[3, 3, 3]} justify="center" mt="4px">
        <Box>
          <Link href={"#"}>
            <Image
              src="/images/home.svg"
              alt="Home"
              width="17.78px"
              height="16px"
            />
            <Heading
              color="gray.800"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="400"
            >
              Home
            </Heading>
          </Link>
        </Box>
        <Box>
          <Link>
            <Image
              src="/images/libraries.svg"
              alt="Home"
              width="17.78px"
              height="16px"
            />
            <Heading
              color="gray.400"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="400"
            >
              Libraries
            </Heading>
          </Link>
        </Box>
        <Box>
          <Link>
            <Image
              src="/images/profile.svg"
              alt="Home"
              width="17.78px"
              height="16px"
            />
            <Heading
              color="gray.400"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="400"
            >
              Profile
            </Heading>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default BottomBar;
