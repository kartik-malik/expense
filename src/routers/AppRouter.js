import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import Header from "../components/Header";
import ExpenseCreatePage from "../components/ExpenseCreate";
import ExpenseEditPage from "../components/ExpenseEdit";
import ExpenseHelpPage from "../components/ExpenseHelp";
import NotFound from "../components/NotFound";
import LoginPage from "../components/LoginPage";
import { createBrowserHistory } from "history";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

export const history = createBrowserHistory();
const AppRouter = () => {
  return (
    <BrowserRouter history={history}>
      <div>
        <Switch>
          <PublicRoute exact="true" path="/" component={LoginPage} />

          <PrivateRoute
            exact="true"
            path="/dashboard"
            component={ExpenseDashboardPage}
          />
          <PrivateRoute exact="true" path="/help" component={ExpenseHelpPage} />
          <PrivateRoute
            exact="true"
            path="/edit/:id"
            component={ExpenseEditPage}
          />
          <PrivateRoute
            exact="true"
            path="/create"
            component={ExpenseCreatePage}
          />
          <PrivateRoute component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
