import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, Skeleton, Grid, Button } from "@chakra-ui/react";

import { Book } from "../types/Book";
import HelloUser from "../components/HelloUser";
import BottomBar from "../components/BottomBar";
import SearchBook from "../components/SearchBook";
import CurrentlyReadingSection from "../components/CurrentlyReadingSection";
import DiscoverNewBookSection from "../components/DiscoverNewBookSection";
import VideoReviewsSection from "../components/VideoReviewsSection";
import ListBooksView from "./books/ListBooksView";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [onSearch, setOnSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [onFocusToSearch, setOnFocusToSearch] = useState(false);

  useEffect(() => {
    if (!!onSearch) {
      const getBooks = () => {
        axios
          .request({
            method: "get",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + onSearch,
          })
          .then((response) => {
            console.log("books", response.data.items);
            setBooks(response.data.items);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getBooks();
    }
  }, [onSearch]);

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
          <Grid
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
          </Grid>
        ) : (
          <>
            <ListBooksView books={books} />
            <Box mt="15px" height="200px" bg="blue.400">
              <Button>Load More</Button>
            </Box>
          </>
        )}
        <BottomBar />
      </Box>
    </Flex>
  );
};

export default Home;
