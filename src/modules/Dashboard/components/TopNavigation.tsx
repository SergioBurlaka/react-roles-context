import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "@shared/constants";

const items: MenuProps["items"] = [
  {
    label: AppRoutes.admin.label,
    key: AppRoutes.admin.path,
    icon: <MailOutlined />,
  },
  {
    label: AppRoutes.manager.label,
    key: AppRoutes.manager.path,
    icon: <AppstoreOutlined />,
  },
  {
    label: AppRoutes.user.label,
    key: AppRoutes.user.path,
    icon: <SettingOutlined />,
  },
];

const TopNavigation: React.FC = () => {
  const [current, setCurrent] = useState(AppRoutes.admin.path);
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key)
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default TopNavigation;
