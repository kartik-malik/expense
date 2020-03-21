import React from "react";
import { Link } from "react-router-dom";
import { startLogOut } from "../actions/auth";
import { connect } from "react-redux";
const Header = ({ dispatch }) => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header-content">
          <Link className="header__title" to="/">
            <h1>Expensify</h1>
          </Link>

          <button
            className="button button--link"
            onClick={dispatch(startLogOut)}
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
};
export default connect()(Header);
