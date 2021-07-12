import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import { RiSearchLine } from "react-icons/ri";

const SearchBook = ({ setOnFocusToSearch }) => {
  return (
    <Flex position="fixed" pt="50px" width="100%">
      <InputGroup>
        <InputLeftElement
          mt="6px"
          ml="4px"
          color="orange.50"
          fontSize="1.2em"
          pointerEvents="none"
        >
          <Image
            src="/images/search.svg"
            alt="Search Icon"
            width="16px"
            height="16px"
          />
        </InputLeftElement>
        <Input
          size="lg"
          bgColor="red.100"
          maxLength={90}
          borderRadius="10px"
          placeholder="Search Book"
          _placeholder={{
            fontSize: "16px",
            lineHeight: "18px",
            color: "gray.500",
            marginLeft: "-12px",
          }}
          boxShadow="5px 5px 80px rgba(212, 173, 134, 0.122623)"
          focusBorderColor="none"
          onChange={(e) => {
            console.log(e);
          }}
          onFocus={(e) => {
            console.log("testes", e);
            setOnFocusToSearch(true);
          }}
          onMouseLeave={(e) => {
            setOnFocusToSearch(false);
          }}
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
