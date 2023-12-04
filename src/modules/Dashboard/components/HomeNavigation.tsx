import { NavLink } from "react-router-dom";


export const HomeNavigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin">admin</NavLink>
          </li>
          <li>
            <NavLink to="/manager">manager</NavLink>
          </li>
          <li>
            <NavLink to="/user">user</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
