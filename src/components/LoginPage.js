import React from "react";
import { startLogIn } from "../actions/auth";
import { connect } from "react-redux";
const LoginPage = ({ dispatch }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>Control you budget</p>
        <button className="button" onClick={dispatch(startLogIn)}>
          Login With Google
        </button>
      </div>
    </div>
  );
};
export default connect()(LoginPage);
