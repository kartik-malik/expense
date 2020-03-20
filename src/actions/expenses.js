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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      amount = 100,
      note = "",
      createdAt = 0
    } = expenseData;
    const expense = { description, amount, createdAt, note };
    return database
      .ref(`user/${uid}/expense`)
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
export const setExpense = expenses => ({
  type: "SET_EXPENSE",
  expenses
});
export const startsetExpense = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`user/${uid}/expense`)
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpense(expenses));
      });
  };
};
export const startremoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    database
      .ref(`user/${uid}/expense/${id}`)
      .remove()
      .then(ref => {
        dispatch(removeExpense({ id: id }));
      });
  };
};
export const startEditExpense = (id, expense) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`user/${uid}/expense/${id}`)
      .update(expense)
      .then(() => {
        dispatch(editExpense(id, expense));
      });
  };
};
