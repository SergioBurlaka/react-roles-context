import type { FC } from "react";

import { BrowserRouter as Router } from "react-router-dom";


import DashboardModule from "../modules/Dashboard/Dashboard.module";

export const RootRoutes: FC = () => {
  return (
    <Router>
      <DashboardModule />
    </Router>
  );
};
