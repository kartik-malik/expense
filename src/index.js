import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { addExpense, startsetExpense } from "./actions/expenses";
import { login, logout } from "./actions/auth";
// import "./firebase/firebase";
import * as serviceWorker from "./serviceWorker";
import configStore from "./store/configStore";
import getVisibleExpenses from "./selectors/expenses";
import { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";
const store = configStore();
// store.dispatch(addExpense({ description: "water", amount: 1000 }));
// store.dispatch(addExpense({ description: "bill", amount: 500 }));
// store.dispatch(addExpense({ description: "bill", amount: 1500 }));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
function renderApp() {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
}

ReactDOM.render(<p>loading</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startsetExpense()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
