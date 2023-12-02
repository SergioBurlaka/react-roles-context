import React, { FC, type PropsWithChildren } from "react";

import { Layout, theme } from "antd";

const { useToken } = theme;

enum LayoutConstants {
  HEADER_HEIGHT = 64,
}

const Dashboardlayout: FC<PropsWithChildren> = ({ children }) => {
  const antTheme = useToken();

  return (
    <Layout className="relative h-full min-h-screen ">
      <Layout.Header
        className="sticky top-0 z-30 w-full px-2 shadow-md md:px-4"
        style={{
          height: LayoutConstants.HEADER_HEIGHT,
          backgroundColor: antTheme.token.colorBgContainer,
        }}
      >
        <h1 className="">users roles</h1>
      </Layout.Header>
      <Layout>
        {children}
      </Layout>
    </Layout>
  );
};

export default Dashboardlayout;
