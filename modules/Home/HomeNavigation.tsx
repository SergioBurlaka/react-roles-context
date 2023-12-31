import { NavLink } from "react-router-dom";


export const HomeNavigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/todos">todos</NavLink>
          </li>
          <li>
            <NavLink to="/books">books</NavLink>
          </li>
          <li>
            <NavLink to="/locations">locations</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
