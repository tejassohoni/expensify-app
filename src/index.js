import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addExpense } from "./redux/expenses-actions.js";
import * as serviceWorker from "./serviceWorker";

import configStore from "./redux/store.js";

const store = configStore();
store.dispatch(addExpense({ description: "water bill", amount: 80000 }));
store.dispatch(addExpense({ description: "phone bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "gas bill" }));
store.dispatch(addExpense({ description: "rent", amount: 450000 }));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
