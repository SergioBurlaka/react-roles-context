import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import { Location } from "./Location";

export const Locations = () => {
  return (
    <Routes>
      <Route
        path="locations"
        element={
          <div>
            <div>Locations </div>
            <h1>Locations navigation</h1>
            <nav>
              <ul>
                <li>
                  <NavLink to=":345">locations 345</NavLink>
                </li>
                <li>
                  <NavLink to="super-location">super-location</NavLink>
                </li>
              </ul>
            </nav>
            <Outlet />
          </div>
        }
      >
        <Route path=":locationsId" element={<Location />} />
        <Route path="super-location" element={<div>super location </div>} />
      </Route>
    </Routes>
  );
};
