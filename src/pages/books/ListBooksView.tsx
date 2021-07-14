import Link from "next/link";
import {
  Box,
  Text,
  Grid,
  Heading,
  Image as ChakraImage,
} from "@chakra-ui/react";

import getAutors from "../../utils/getAuthors";

import { Book } from "../../types/Book";
interface ListBooksViewProps {
  books: Book[];
}

const ListBooksView = ({ books }: ListBooksViewProps) => {
  return (
    <Grid
      mt="140px"
      gap={6}
      templateColumns={["repeat(3, 1fr)", "repeat(5, 1fr)"]}
    >
      {books &&
        books.map((item) => (
          <Link
            as={`/books/${item.id}`}
            key={item.id}
            href={`/books/${item.id}`}
            passHref
          >
            <Box as="div">
              <ChakraImage
                src={item?.volumeInfo?.imageLinks?.thumbnail}
                alt="tets"
                width="99px"
                height="153px"
                filter="drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5))"
                objectFit="cover"
                fallbackSrc="/images/bookmockup.jpg"
                borderRadius="5px"
              />
              <Box width="91px" mt="10px">
                <Heading
                  color="gray.800"
                  opacity="0.8"
                  fontSize="12px"
                  fontWeight="700"
                  lineHeight="14.32px"
                  isTruncated
                >
                  {item?.volumeInfo?.title}
                </Heading>
              </Box>
              <Box width="91px" mt="2px">
                <Text
                  align="start"
                  color="gray.800"
                  opacity="0.8"
                  fontSize="10px"
                  fontFamily="Roboto"
                  lineHeight="11.72px"
                  fontWeight="900"
                  isTruncated
                >
                  {item?.volumeInfo.authors &&
                    `by ${getAutors(item?.volumeInfo?.authors)}`}
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
    </Grid>
  );
};

export default ListBooksView;
