import { Routes, Route } from "react-router-dom";

import { UserNavigation } from "./UserNavigation";
import { User } from "./User";

export const Users = () => {
  return (
    <>
      <UserNavigation />
      <Routes>
        {/* <Route index element={<UserNavigation />} /> */}
        <Route path=":userId" element={<User />} />
        <Route path="super-user" element={<div>super user </div>} />
      </Routes>
    </>
  );
};
