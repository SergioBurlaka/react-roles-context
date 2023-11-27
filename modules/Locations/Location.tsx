import { useParams } from "react-router-dom";

import { Item } from "../../compomemts/Item";

export const Location = () => {
  const { locationsId } = useParams();

  return <Item>Current Location is {locationsId}</Item>;
};
