import { useParams } from "react-router-dom";

import { Item } from "../../compomemts/Item";

export const Book = () => {
  const { bookId } = useParams();

  return <Item>Current book is {bookId}</Item>;
};
