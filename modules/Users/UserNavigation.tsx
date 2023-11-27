import { NavLink } from "react-router-dom";

export const UserNavigation = () => {
  return (
    <>
      <h1>User navigation</h1>
      <nav>
        <ul>
          <li>
            <NavLink  to="1">user 1</NavLink>
          </li>
          <li>
            <NavLink  to="2">user 2</NavLink>
          </li>
          <li>
            <NavLink  to="super-user">super user </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
