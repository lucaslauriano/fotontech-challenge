import { Flex, Text, Heading } from "@chakra-ui/react";

interface HeadingBoxProps {
  title: string;
  actionTitle: string;
}

const HeadingBox = ({ title, actionTitle }: HeadingBoxProps) => {
  return (
    <Flex justify="space-between">
      <Heading
        color="gray.800"
        fontSize="18px"
        fontWeight="500"
        letterSpacing="0.5px"
      >
        {title}
      </Heading>
      <Text
        color="blue.200"
        cursor="pointer"
        fontSize="14px"
        lineHeight="16px"
        fontWeight="400"
        _hover={{
          cursor: "pointer",
        }}
      >
        {actionTitle}
      </Text>
    </Flex>
  );
};

export default HeadingBox;
