import React, { FC, type PropsWithChildren } from "react";

import { Layout, theme, Typography } from "antd";

const { useToken } = theme;

import TopNavigation from "./components/TopNavigation";

enum LayoutConstants {
  HEADER_HEIGHT = 64,
}

const Dashboardlayout: FC<PropsWithChildren> = ({ children }) => {
  const antTheme = useToken();

  return (
    <Layout className="relative h-full min-h-screen ">
      <Layout.Header
        className="sticky top-0 z-30 w-full px-2 shadow-md md:px-4 flex items-center"
        style={{
          height: LayoutConstants.HEADER_HEIGHT,
          backgroundColor: antTheme.token.colorBgContainer,
        }}
      >
        <Typography.Title className="uppercase">
          <h1>users roles</h1>
        </Typography.Title>
      </Layout.Header>
      <Layout className="p-4 pt-20">
        <div className="fixed top-0 z-30 mb-4 mt-20">
          <TopNavigation />
        </div>
        {children}
      </Layout>
    </Layout>
  );
};

export default Dashboardlayout;
