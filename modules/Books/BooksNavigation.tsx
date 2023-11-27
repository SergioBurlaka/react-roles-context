import { NavLink } from "react-router-dom";

export const BooksNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="1">book 1</NavLink>
        </li>
        <li>
          <NavLink to="2">book 2</NavLink>
        </li>
        <li>
          <NavLink to="super-book">super book</NavLink>
        </li>
      </ul>
    </nav>
  );
};
