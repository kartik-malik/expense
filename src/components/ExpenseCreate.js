import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense, startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";
const ExpenseCreatePage = props => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={expense => {
            props.dispatch(startAddExpense(expense));
            props.history.push("/");
          }}
        />
      </div>
    </div>
  );
};

export default connect()(ExpenseCreatePage);
