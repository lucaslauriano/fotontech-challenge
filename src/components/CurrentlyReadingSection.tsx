import * as React from "react";
import { Box, Flex, Stack, Text, Image } from "@chakra-ui/react";
import HeadingBox from "./HeadingBox";

const CurrentlyReadingSection = () => {
  return (
    <Box mt="37px">
      <HeadingBox ml="20px" title="Current Reading" actionTitle="All" />
      <Box align="start" ml={["-20px", "0px"]}>
        <Box mt="60px" w="331px" h="100px" bg="green.300">
          {/*   <Box
            //bg="red.500"
            as="img"
            top="40px"
            ml="-30px"
            alt="Hello"
            src="/images/oval-bg.svg"
            boxSize="116px"
            position="absolute"
          /> */}

          <Box
            as="img"
            mt="-28px"
            ml="212px"
            alt="Hello"
            src="/images/oval.svg"
            width="24px"
            height="24px"
          />
          <Box
            as="img"
            top="28px"
            left="240px"
            alt="Hello"
            src="/images/oval-bg.svg"
            boxSize="116px"
            position="relative"
          />
          <Box
            as="img"
            src="/images/oval-waves-bicolor.png"
            width="69px"
            height="69px"
            top="-168px"
            position="relative"
            left="288px"
          />
          <Box
            as="img"
            src="/images/rectangle-bicolor.png"
            width="46"
            height="20px"
            top="-140px"
            position="relative"
            left="302px"
          />
        </Box>
      </Box>
      <Box ml="-20px" mt="-105px" position="absolute">
        <Stack width="100%" direction="row">
          <Box>
            <Image
              ml="20px"
              mt="-15px"
              src="https://books.google.com/books/content?id=eLRhDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              alt="tets"
              width="91px"
              height="136px"
              borderRadius="5px"
            />
          </Box>
          <Box pl="5px">
            <Box mt="15px">
              <Text
                color="gray.900"
                fontSize="27px"
                fontFamily="Playfair Display"
                lineHeight="36px"
                letterSpacing="2px"
              >
                Originals
              </Text>
            </Box>
            <Box align="start">
              <Text
                pt="2px"
                color="green.400"
                fontSize="10px"
                lineHeight="12px"
                fontFamily="Roboto"
              >
                by Adam Grant
              </Text>
            </Box>
            <Flex mt="10px">
              <Image
                alt="Hello"
                src="/ico/bookmarks.svg"
                width="16px"
                height="16px"
              />

              <Text fontSize="10px">Chapter</Text>

              <Text
                ml="4px"
                mt="3px"
                color="pink.500"
                fontSize="10px"
                fontWeight="700"
                lineHeight="12px"
                latter="0.02px"
              >
                2
              </Text>
              <Text
                ml="4px"
                mt="3px"
                color="gray.900"
                fontSize="10px"
                lineHeight="12px"
                fontWeight="400"
                letterSpacing="0.02px"
              >
                From
              </Text>
              <Text
                ml="4px"
                mt="3px"
                color="gray.900"
                fontSize="10px"
                fontWeight="400"
                lineHeight="12px"
              >
                9
              </Text>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CurrentlyReadingSection;
