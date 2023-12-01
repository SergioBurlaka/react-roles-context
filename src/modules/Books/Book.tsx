import { useParams } from "react-router-dom";

import { Item } from "../../compomemts/Item";

export const Book = () => {
  const { bookId } = useParams();
  // setTimeout(() => {
  //   throw new Error('Parameter is not a number!');
  // }, 2000)

  return <Item>Current book is {bookId}</Item>;
};
