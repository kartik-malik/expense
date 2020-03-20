import React from "react";
import ExpenseCreatePage from "./ExpenseCreate";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {
  editExpense,
  removeExpense,
  startremoveExpense,
  startEditExpense
} from "../actions/expenses";

const ExpenseEditPage = props => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expenses}
        onSubmit={expense => {
          props.dispatch(startEditExpense(props.expenses.id, expense));
          props.history.push("/");
          console.log(expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startremoveExpense({ id: props.expenses.id }));
          props.history.push("/");
        }}
      >
        remove
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(ExpenseEditPage);
