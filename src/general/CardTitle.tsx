import React, { FC, PropsWithChildren } from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

type DataTitleProps = {
  onAddClick?: () => void;
};

const CardTitle: FC<PropsWithChildren<DataTitleProps>> = ({
  children,
  onAddClick,
}) => (
  <div className="flex items-center justify-between">
    <div>
      <Typography.Title level={2}>{children}</Typography.Title>
    </div>
    {onAddClick && (
      <div>
        <Button
          icon={<PlusOutlined />}
          onClick={() => {
            onAddClick();
          }}
        />
      </div>
    )}
  </div>
);
export default CardTitle;
