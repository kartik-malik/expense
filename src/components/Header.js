import React from "react";
import { NavLink } from "react-router-dom";
import { startLogOut } from "../actions/auth";
import { connect } from "react-redux";
const Header = ({ dispatch }) => {
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
      <button onClick={dispatch(startLogOut)}>Log Out</button>
    </header>
  );
};
export default connect()(Header);
