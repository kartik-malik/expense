import React from "react";
import { startLogIn } from "../actions/auth";
import { connect } from "react-redux";
const LoginPage = ({ dispatch }) => {
  return <button onClick={dispatch(startLogIn)}>Login</button>;
};
export default connect()(LoginPage);
