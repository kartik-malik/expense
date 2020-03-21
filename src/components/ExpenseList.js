import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "../components/ExpenseListItem";
import selectExpenses from "../selectors/expenses";
const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div>
      {props.expenses.length ? (
        props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      ) : (
        <div>
          <span className="list-item list-item--message">No Expense</span>
        </div>
      )}
    </div>
  </div>
);
const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
