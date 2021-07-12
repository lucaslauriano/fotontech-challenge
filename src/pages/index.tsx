import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
//import { motion, isValidMotionProp } from "framer-motion";

import {
  Image as ChakraImage,
  Box,
  Text,
  Flex,
  Stack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import HelloUser from "../components/HelloUser";
import BottomBar from "../components/BottomBar";
import SearchBook from "../components/SearchBook";
import HeadingBox from "../components/HeadingBox";
import { CurrentReadingSection } from "../components/CurrentReadingSection";
import { DiscoverNewBookSection } from "../components/DiscoverNewBookSection";

const Home = () => {
  const [onFocusToSearch, setOnFocusToSearch] = useState(false);

  useEffect(() => {
    const getBooks = () => {
      axios
        .request({
          method: "get",
          url: "https://www.googleapis.com/books/v1/volumes?q=" + "harry pott",
        })
        .then((response) => {
          console.log("books", response.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBooks();
  });
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
        <SearchBook setOnFocusToSearch={setOnFocusToSearch} />

        {!onFocusToSearch && (
          <>
            <HelloUser />

            <DiscoverNewBookSection />

            <CurrentReadingSection />

            <Box mt="25px">
              <HeadingBox title="Reviews of The Days" actionTitle=" Al Video" />
              <Flex mt="10px">
                <Image
                  src="/images/thumb.png"
                  alt="Video Thumb"
                  width="335px"
                  height="181px"
                />
              </Flex>
            </Box>
            <BottomBar />
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
