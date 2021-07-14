import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Box, Flex, Heading, Image as ChakraImage } from "@chakra-ui/react";

import { api } from "../../services/axios";
import getAutors from "../../utils/getAuthors";
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

  useEffect(() => {
    const fetchData = async () => {
      const resp = await api.get(`/volumes?q=${id}`);
      setBook(resp.data.items);
    };

    if (!!id) {
      fetchData();
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
              fallbackSrc="/images/bookmockup.jpg"
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
