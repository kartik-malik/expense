import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink activeClassName="is-active" to="/" exact>
        homeee{" "}
      </NavLink>
      <NavLink activeClassName="is-active" to="/create" exact>
        create{" "}
      </NavLink>
      <NavLink activeClassName="is-active" to="/help" exact>
        help{" "}
      </NavLink>
      <NavLink activeClassName="is-active" to="/edit" exact>
        edit{" "}
      </NavLink>
    </header>
  );
};
export default Header;
