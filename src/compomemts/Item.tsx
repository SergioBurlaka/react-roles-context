import type { PropsWithChildren, FC } from "react";

export const Item: FC<PropsWithChildren> = ({ children }) => {
  return <div className="item">{children}</div>;
};
