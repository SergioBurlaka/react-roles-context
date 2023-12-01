import type { FC } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { HomeNavigation } from "../modules/Home/HomeNavigation";

import DashboardModule from '../modules/Dashboard/Dashboard.module'

export const RootRoutes: FC = () => {

  return (
    <Router>
      <HomeNavigation />

      <DashboardModule />

    </Router>
  );
};
