import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
// import "./firebase/firebase";
import * as serviceWorker from "./serviceWorker";
import configStore from "./store/configStore";
import getVisibleExpenses from "./selectors/expenses";
const store = configStore();
// store.dispatch(addExpense({ description: "water", amount: 1000 }));
// store.dispatch(addExpense({ description: "bill", amount: 500 }));
// store.dispatch(addExpense({ description: "bill", amount: 1500 }));
store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
