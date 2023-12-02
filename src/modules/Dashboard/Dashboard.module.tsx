import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { HomeNavigation } from "./components/HomeNavigation";

import { AppRoutes } from "../../shared/constants/AppRoutes";

import Dashboardlayout from "./Dashboardlayout";

import AdminPage from "./modules/Admin/pages/Admin.page";
import ManagerPage from "./modules/Manager/pages/Manager.page";
import UserPage from "./modules/User/pages/User.page";

const DashboardModule = () => {
  return (
    <Dashboardlayout>
      <HomeNavigation />
      <Routes>
        <Route index element={<Navigate to={AppRoutes.admin.path} />} />
        <Route index path={AppRoutes.admin.path} element={<AdminPage />} />
        <Route path={AppRoutes.manager.path} element={<ManagerPage />} />
        <Route path={AppRoutes.user.path} element={<UserPage />} />
        <Route path="*" element={<div>Error page</div>} />
      </Routes>
    </Dashboardlayout>
  );
};

export default DashboardModule;
