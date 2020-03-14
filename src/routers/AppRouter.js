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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route exact path="/create" component={ExpenseCreatePage} />
          <Route exact path="/help" component={ExpenseHelpPage} />
          <Route exact path="/edit/:id" component={ExpenseEditPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
