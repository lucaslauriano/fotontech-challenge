import {
  Flex,
  Input,
  Icon,
  InputRightElement,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement color="gray.300" fontSize="1.2em" pointerEvents="none">
        <Icon as={RiSearchLine} fontSize="20" mt="2px" />
      </InputLeftElement>
      <Input
        size="lg"
        bgColor="gray.50"
        fullwidth
        borderRadius="10px"
        placeholder="Search Book"
        _placeholder={{
          color: "gray.500",
        }}
        boxShadow="5px 5px 80px rgba(212, 173, 134, 0.122623)"
        focusBorderColor="none"
      />
      {false && (
        <InputRightElement>
          <Icon as={RiSearchLine} fontSize="20" mt="2px" />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default SearchBox;
