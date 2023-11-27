import { useParams } from "react-router-dom";

import { Item } from "../../compomemts/Item";

export const User = () => {
  const { userId } = useParams();

  return (
    <Item>
      <div>Current user is {userId}</div>
    </Item>
  );
};
