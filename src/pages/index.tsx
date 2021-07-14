import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Skeleton,
  Grid,
  Button,
  Text,
  Center,
  Icon,
} from "@chakra-ui/react";

import { api } from "../services/axios";
import { Book } from "../types/Book";

import HelloUser from "../components/HelloUser";
import BottomBar from "../components/BottomBar";
import SearchBook from "../components/SearchBook";
import VideoReviewsSection from "../components/VideoReviewsSection";
import DiscoverNewBookSection from "../components/DiscoverNewBookSection";
import CurrentlyReadingSection from "../components/CurrentlyReadingSection";

import ListBooksView from "./books/ListBooksView";
import { RiAddLine, RiArrowGoBackLine, RiArrowLeftLine } from "react-icons/ri";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [onSearch, setOnSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [onFocusToSearch, setOnFocusToSearch] = useState(false);
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await api.get(
        `/volumes?q=${onSearch}&maxResults=${maxResults}&startIndex=${startIndex}`
      );
      setBooks(resp.data.items);
      setTotalItems(resp.data.totalItems);
      setIsLoading(false);
    };

    if (!!onSearch) {
      fetchData();
    }
  }, [onSearch, maxResults, startIndex]);

  const handleChange = useCallback(() => {
    setStartIndex(startIndex + maxResults);
    setMaxResults((prev) => prev + 10);
  }, [startIndex, maxResults]);

  return (
    <Flex direction="column" w="100vw" h="100vh">
      <Box
        w="100%"
        mx="auto"
        px="20px"
        align="center"
        maxWidth={1024}
        alignItems="center"
      >
        <SearchBook
          onSearch={onSearch}
          setOnSearch={setOnSearch}
          setOnFocusToSearch={setOnFocusToSearch}
        />

        {!onFocusToSearch ? (
          <>
            <HelloUser />
            <DiscoverNewBookSection />
            <CurrentlyReadingSection />
            <VideoReviewsSection />
          </>
        ) : isLoading || onSearch === "" ? (
          <>
            <Grid
              w="100%"
              mt="140px"
              gap={6}
              templateColumns={["repeat(3, 1fr)", "repeat(5, 1fr)"]}
            >
              <Skeleton
                w="91px"
                h="136px"
                startColor="gray.400"
                endColor="gray.300"
              />
              <Skeleton
                w="91px"
                h="136px"
                startColor="gray.400"
                endColor="gray.300"
              />
              <Skeleton
                w="91px"
                h="136px"
                startColor="gray.400"
                endColor="gray.300"
              />
              <Skeleton
                w="91px"
                h="136px"
                startColor="gray.400"
                endColor="gray.300"
              />
              <Skeleton
                w="91px"
                h="136px"
                startColor="gray.400"
                endColor="gray.300"
              />
              <Skeleton
                w="91px"
                h="136px"
                startColor="gray.400"
                endColor="gray.300"
              />
            </Grid>
            <Button
              mt="15px"
              size="sm"
              variant="solid"
              color="gray.500"
              onClick={() => setOnFocusToSearch(false)}
              colorScheme="white"
              leftIcon={<Icon as={RiArrowLeftLine} />}
              _hover={{
                bgColor: "pink.500",
                color: "white",
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <ListBooksView books={books} />
            <Box mt="25px" height="200px">
              <Button
                mt="15px"
                size="sm"
                variant="solid"
                color="gray.500"
                onClick={handleChange}
                colorScheme="white"
                rightIcon={<Icon as={RiAddLine} />}
                _hover={{
                  bgColor: "pink.500",
                  color: "white",
                }}
              >
                Load more
              </Button>
              <Box mt="5px">
                <Text fontSize="14px">
                  Showing {maxResults} of {totalItems}
                </Text>
              </Box>
            </Box>
          </>
        )}
        <BottomBar />
      </Box>
    </Flex>
  );
};

export default Home;
