import React, { FC, PropsWithChildren } from "react";
import { Typography } from "antd";

const CardTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Typography.Title level={2}>{children}</Typography.Title>;
};

export default CardTitle;
