import React, { useState } from "react";
import {
  SolutionOutlined,
  SettingOutlined ,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "@shared/constants";

const items: MenuProps["items"] = [
  {
    label: AppRoutes.admin.label,
    key: AppRoutes.admin.path,
    icon: <SettingOutlined  />,
  },
  {
    label: AppRoutes.manager.label,
    key: AppRoutes.manager.path,
    icon: <SolutionOutlined />,
  },
  {
    label: AppRoutes.superUser.label,
    key: AppRoutes.superUser.path,
    icon: <TeamOutlined />,
  },
  {
    label: AppRoutes.user.label,
    key: AppRoutes.user.path,
    icon: <UserOutlined />,
  },
];

const TopNavigation: React.FC = () => {
  const [current, setCurrent] = useState(AppRoutes.admin.path);
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      style={{ height: 46 }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default TopNavigation;
