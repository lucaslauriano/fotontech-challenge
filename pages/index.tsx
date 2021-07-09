import { Text, Box, Flex, Center, Stack } from "@chakra-ui/react";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <Flex w="100%" maxWidth={1024} mx="auto" px="20px" bg="blue.100">
      <Box w="100%" mt="50px" align="center" alignItems="center" bg="green.100">
        <SearchBox />
        <Stack spacing="4">
          <Flex mt="45px">
            <Text color="gray.900" fontSize="18" fontWeight="500">
              Hi,
            </Text>
            <Text px="1" color="pink.500" fontSize="18" fontWeight="700">
              Mehmed Al Fatih
            </Text>
          </Flex>
        </Stack>
        <Flex justify="space-between">
          <Text px="1" color="gray.900" fontSize="18" fontWeight="500">
            Discover new book
          </Text>
          <Text px="1" color="blue.200" fontSize="18" fontWeight="500">
            More
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text px="1" color="gray.900" fontSize="18" fontWeight="500">
            Current Reading
          </Text>
          <Text px="1" color="blue.200" fontSize="18" fontWeight="500">
            All
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text px="1" color="gray.900" fontSize="18" fontWeight="500">
            Reviews of The Days
          </Text>
          <Text px="1" color="blue.200" fontSize="18" fontWeight="500">
            Al Video
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
