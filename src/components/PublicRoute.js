import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";

const PublicRoute = ({ isAuthenticated, rest, component: Component }) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <div>
            <Component {...props} />
          </div>
        )
      }
    />
  );
};

const mapStateToprops = state => ({
  isAuthenticated: !!state.auth.uid
});
export default connect(mapStateToprops)(PublicRoute);
