import { ForwardRefRenderFunction } from "react";
import { Flex, Text, Heading, FlexProps } from "@chakra-ui/react";

interface HeadingBoxProps extends FlexProps {
  title: string;
  actionTitle: string;
}

const HeadingBox = ({ title, actionTitle }: HeadingBoxProps, refs) => {
  return (
    <Flex justify="space-between" {...refs}>
      <Heading
        color="gray.700"
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
