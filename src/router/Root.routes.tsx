import type { FC } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomeNavigation } from "../modules/Home/HomeNavigation";

export const RootRoutes: FC = () => {
  return (
    <Router>
      <HomeNavigation />
      <Routes>
        {/* <Route  path="/" element={<div>home</div>} /> */}
        <Route index element={<div>home </div>} />

        <Route index path="admin" element={<div>admin </div>} />
        <Route path="manager" element={<div>manager </div>} />
        <Route path="user" element={<div>user </div>} />

        <Route path="*" element={<div>Error page</div>} />
      </Routes>
    </Router>
  );
};
