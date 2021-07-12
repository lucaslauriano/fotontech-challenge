import { useRouter } from "next/dist/client/router";

const Book = () => {
  const router = useRouter();

  console.log("router", router);

  return <>Book</>;
};

export default Book;
