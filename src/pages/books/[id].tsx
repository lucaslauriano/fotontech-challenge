import { ReactNode, useMemo } from "react";
import {
  Flex,
  Box,
  Image as ChakraImage,
  Center,
  Heading,
  Divider,
  Link,
  Container,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import axios from "axios";
import { Book as BookProps } from "../../types/Book";
import FloatingBar from "../../components/FloatingBar";

const HeadingTitle = ({ children }: { children: ReactNode }) => (
  <Heading
    as="span"
    color="gray.500"
    fontSize="24px"
    lineHeight="29px"
    fontWeight="700"
    letterSpacing="0.5px"
  >
    {children}
  </Heading>
);

const Book = () => {
  const router = useRouter();
  const [book, setBook] = useState<BookProps>();
  const { id } = router.query;

  const getAutors = (autors) => {
    if (autors.length > 1)
      return autors.slice(0, -1).join(", ") + " & " + autors.slice(-1);
    return autors[0];
  };

  useEffect(() => {
    if (!!id) {
      const getBooks = () => {
        axios
          .request({
            method: "get",
            url: "https://www.googleapis.com/books/v1/volumes?q=" + id,
          })
          .then((response) => {
            setBook(response.data.items[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      getBooks();
    }
  }, [id]);
  return (
    <Flex direction="column" w="100vw" h="100vh">
      <Box
        w="100%"
        mx="auto"
        align="center"
        maxWidth={1024}
        alignItems="center"
      >
        <Box w="100%" h="auto" align="center">
          <Box
            w="100%"
            h="282px"
            mx="-20px"
            bg="pink.200"
            align="center"
            borderBottomRightRadius="100px"
          />
          <Box
            _before={{
              background: "#272626",
              filter: "blur(24.1828px)",
            }}
          >
            <ChakraImage
              mt="-194px"
              src={book?.volumeInfo?.imageLinks?.thumbnail}
              width="151px"
              height="234px"
              align={"center"}
              fallbackSrc="https://via.placeholder.com/150"
              borderRadius="5px"
            />
          </Box>

          <Box align="start" mx="20px" mt="30px">
            <Heading
              color="gray.500"
              fontSize="24px"
              fontWeight="400"
              lineHeight="29px"
            >
              <HeadingTitle>{book?.volumeInfo?.title}</HeadingTitle>
              {book?.volumeInfo?.subtitle && <> : </>}
              {book?.volumeInfo?.subtitle}
            </Heading>
          </Box>
        </Box>
        <Box align="start">
          <Heading
            mt="10px"
            ml="20px"
            color="pink.500"
            fontSize="16px"
            fontWeight="400"
            lineHeight="19px"
          >
            {book?.volumeInfo?.authors && getAutors(book.volumeInfo.authors)}
          </Heading>
        </Box>
      </Box>
      <FloatingBar />
    </Flex>
  );
};

export default Book;
