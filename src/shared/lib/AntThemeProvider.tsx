import type { FC, PropsWithChildren } from "react";
import { App, ConfigProvider, type ThemeConfig } from "antd";

export const AntThemeProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const antTheme: ThemeConfig = {
    token: {
      colorPrimary: "#0066A6",
      colorBgBase: "#fff",
      colorText: "#665780",
    },
    components: {
      Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
      },
    },
  };

  return (
    <ConfigProvider theme={antTheme} autoInsertSpaceInButton={false}>
      <App>{children}</App>
    </ConfigProvider>
  );
};
