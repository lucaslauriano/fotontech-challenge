import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import _ from "lodash";

import { Box, Flex, Heading, Image as Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { Book as BookProps } from "../../types/Book";
import { api } from "../../services/axios";
import getAutors from "../../utils/getAuthors";
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
  const [description, setDescription] = useState<string>();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await api.get(`volumes/${id}`);
      setBook(resp.data);
      const description = resp.data.volumeInfo.description.replace(
        /<\/?[^>]+(>|$)/g,
        ""
      );
      setDescription(description);
    };
    fetchData();
  }, [id]);

  const getDescription = () => {
    const str = _.split(description, ".");
    return str.map((item, index) => (
      <Box key={index}>
        <Text
          pt="15px"
          fontFamily="SF Pro Text"
          size="14px"
          opacity="0.6"
          color="gray.800"
          letter="0.2px"
          justify="flex-start"
          lineHeight="25px"
        >
          {item}
        </Text>
      </Box>
    ));
  };

  return (
    <Flex direction="column" w="100vw" h="100vh">
      <Box
        w="100%"
        mx="auto"
        align="center"
        maxWidth={1024}
        alignItems="center"
      >
        <Box
          w="100%"
          h="294px"
          mx="-20px"
          bg="pink.200"
          align="center"
          borderBottomRightRadius="100px"
        >
          <motion.div animate={{ scale: 0.9 }} transition={{ duration: 0.5 }}>
            <Link href="/" as={`/`} passHref>
              <Img
                ml="33px"
                top="55px"
                src="/images/back-button.svg"
                width="14px"
                height="14px"
                position="absolute"
              />
            </Link>
          </motion.div>
          <motion.div animate={{ scale: 0.9 }} transition={{ duration: 0.5 }}>
            <Img
              mt="-14px"
              left={["298px", "980px", "1024px"]}
              src="/images/oval-waves-detail-lg.svg"
              width="100px"
              position="fixed"
              height="100px"
            />
          </motion.div>

          <Box mt="84px" width="100%" maxWidth={1024} position="absolute">
            <Box width="100%" h="auto" maxWidth={300}>
              <Img
                top="55px"
                right="135px"
                zIndex="1"
                width="15px"
                height="15px"
                position="relative"
                src="/images/oval-pink.svg"
              />

              <Img
                mt="31px"
                ml="37px"
                width="63px"
                height="63px"
                position="absolute"
                src="/images/oval-blue.svg"
              />

              <Img
                mt="1px"
                ml="212px"
                src="/images/oval-double.svg"
                width="24px"
                height="24px"
                position="absolute"
              />
              <Img
                mt="134px"
                ml={["-60px", "270px"]}
                src="/images/oval-waves-detail-sm.svg"
                left={["293px"]}
                width="48px"
                height="48px"
                position="absolute"
              />
              <Box
                width="151px"
                height="234px"
                _before={{
                  filter: "blur(27.1828px)",
                  position: "absolute",
                  left: "2px",
                  bottom: "10px",
                  width: "146px",
                  height: "17px",
                  background: "rgba(0, 0, 0, 0.3)",
                  zIndex: "-1",
                }}
              >
                <Img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt="Cover Book"
                  width="151px"
                  height="234px"
                  borderRadius="5px"
                  transform={"scale(1)"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box align="start" mx="20px" mt="67px">
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
        <Box mt="5px">{getDescription()}</Box>
        <FloatingBar />
      </Box>
    </Flex>
  );
};

export default Book;
