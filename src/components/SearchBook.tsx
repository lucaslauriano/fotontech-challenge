import React, {
  useState,
  forwardRef,
  ElementType,
  ForwardRefRenderFunction,
} from "react";

import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

interface InputProps extends ChakraInputProps {
  setOnFocusToSearch: (onFocusToSearch: boolean) => void;
  setOnSearch: (onSearch: string) => void;
}

const SearchBook: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { setOnFocusToSearch, setOnSearch }: InputProps,
  ref
) => {
  const handleSearch = (e) => {};

  return (
    <Flex
      mr="20px"
      pt="50px"
      flex="1"
      width={["336px", "100%", "1024px"]}
      position="fixed"
    >
      <InputGroup>
        <InputLeftElement
          mt="6px"
          ml="4px"
          color="orange.50"
          fontSize="1.2em"
          pointerEvents="none"
        >
          <ChakraInput
            src="/images/search.svg"
            alt="Search Icon"
            width="16px"
            height="16px"
          />
        </InputLeftElement>
        <Input
          size="lg"
          onBlur={() => setOnFocusToSearch(false)}
          onFocus={() => setOnFocusToSearch(true)}
          bgColor="red.100"
          onChange={(e) => setOnSearch(e.target.value)}
          boxShadow="5px 5px 80px rgba(212, 173, 134, 0.122623)"
          maxLength={90}
          placeholder="Search Book"
          borderRadius="10px"
          _placeholder={{
            fontSize: "16px",
            lineHeight: "18px",
            color: "gray.500",
            marginLeft: "-12px",
          }}
          focusBorderColor="none"
        />
        {false && (
          <InputRightElement>
            <Icon as={RiSearchLine} fontSize="20" mt="2px" />
          </InputRightElement>
        )}
      </InputGroup>
    </Flex>
  );
};

export default SearchBook;