import { NavLink } from "react-router-dom";


export const HomeNavigation = () => {
  return (
    <>
      <h1>Home navigation</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
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
