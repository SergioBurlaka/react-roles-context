import React, { FC, type PropsWithChildren } from 'react'

import { Layout, theme } from 'antd';

const { useToken } = theme;

enum LayoutConstants {
  HEADER_HEIGHT = 64,
}



const Dashboardlayout: FC<PropsWithChildren> = ({ children }) => {
  const antTheme = useToken();

  return (
    <Layout className="relative h-full min-h-screen">

      <Layout.Header

        style={{
          height: LayoutConstants.HEADER_HEIGHT,
          backgroundColor: antTheme.token.colorBgContainer,
        }}
      >
        <div >
          fffffffffff
        </div>
      </Layout.Header>
      <Layout >
        <div >
          Navigation
        </div>
        {children}
      </Layout>
    </Layout>
  )
}

export default Dashboardlayout