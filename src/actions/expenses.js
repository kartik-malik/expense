import { v4 as uuid } from "uuid";
import database from "../firebase/firebase";
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});
//remove
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
//edit
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      amount = 100,
      note = "",
      createdAt = 0
    } = expenseData;
    const expense = { description, amount, createdAt, note };
    database
      .ref("expense")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};
