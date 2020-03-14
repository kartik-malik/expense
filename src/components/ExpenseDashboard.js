import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenselistFilters";

const ExpenseDashBoardPage = () => {
  return (
    <div>
      <div>this is dashboard page</div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};
export default ExpenseDashBoardPage;
