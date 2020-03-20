import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const mapStateToprops = state => ({
  isAuthenticated: !!state.auth.uid
});
export default connect(mapStateToprops)(PrivateRoute);
