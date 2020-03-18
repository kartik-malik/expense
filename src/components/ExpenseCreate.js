import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense, startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";
const ExpenseCreatePage = props => {
  return (
    <div>
      <div>this is add expense component</div>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(startAddExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(ExpenseCreatePage);
