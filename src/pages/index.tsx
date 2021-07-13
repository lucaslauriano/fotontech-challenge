import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import { Box, Flex } from "@chakra-ui/react";

import { Book } from "../types/Book";
import HelloUser from "../components/HelloUser";
import BottomBar from "../components/BottomBar";
import SearchBook from "../components/SearchBook";
import HeadingBox from "../components/HeadingBox";
import CurrentlyReadingSection from "../components/CurrentlyReadingSection";
import DiscoverNewBookSection from "../components/DiscoverNewBookSection";
import VideoReviewsSection from "../components/VideoReviewsSection";

const Home = () => {
  const [onFocusToSearch, setOnFocusToSearch] = useState(false);
  const [onSearch, setOnSearch] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

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

        {!onFocusToSearch && (
          <>
            <HelloUser />

            <DiscoverNewBookSection />

            <CurrentlyReadingSection />

            <VideoReviewsSection />
            <BottomBar />
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
