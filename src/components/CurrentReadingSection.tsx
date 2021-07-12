import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import {
  Box,
  Flex,
  Stack,
  Text,
  SimpleGrid,
  Image as ChakraImage,
} from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";

export const CurrentReadingSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, 3, page);
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <Box mt="15px">
        <HeadingBox title="Current Reading" actionTitle="All" />
        <Flex mt="25px" ml="-44px" w="331px" h="100px" bg="green.300">
          <ChakraImage
            position="absolute"
            src="https://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            alt="tets"
            width="91px"
            borderRadius="5px"
            ml="20px"
            mt="-20px"
            height="136px"
          />
          <Stack mt="15px">
            <Box>
              <Text
                fontSize="27px"
                fontFamily="Playfair Display"
                lineHeight="35.99px"
                letterSpacing="2px"
                color="red.50"
              >
                Hooked
              </Text>
            </Box>
            <Box align="flex-start">
              <Text
                color="gray.300"
                fontSize="14px"
                fontStyle="italic"
                lineHeight="16.43px"
                letterSpacing="1.29px"
              >
                Nir Eyal
              </Text>
            </Box>
            <Box>
              <SimpleGrid>
                <ChakraImage src="/ico/bar-chart-square.svg" alt="Hello" />
                <Text
                  ml="4px"
                  mt="3px"
                  color="gray.300"
                  fontSize="10px"
                  fontWeight="700"
                  lineHeight="11.93px"
                >
                  120+
                </Text>
                <Text
                  ml="4px"
                  mt="3px"
                  color="gray.300"
                  fontSize="10px"
                  lineHeight="11.93px"
                  fontWeight="400"
                >
                  Read Now
                </Text>
              </SimpleGrid>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
