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
            <Box
              w="100%"
              style={{
                filter: "dropShadow(0px 2px 4px rgba(229, 229, 229, 0.5))",
              }}
              borderRadius="10px"
            >
              <ChakraImage
                src={item?.volumeInfo?.imageLinks?.thumbnail}
                alt="tets"
                width="91px"
                height="136px"
                objectFit="cover"
                fallbackSrc="/images/bookmockup.jpg"
                borderRadius="5px"
              />
              <Box width="91px" mt="10px">
                <Heading fontSize="12px" fontWeight="700" isTruncated>
                  {item?.volumeInfo?.title}
                </Heading>
              </Box>
              <Box width="91px" mt="2px">
                <Text
                  align="start"
                  fontSize="10px"
                  fontFamily="Roboto"
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
