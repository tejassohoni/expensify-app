import React from "react";

import AppRouter from "./app-routers/app-routers.jsx";
import configStore from "./redux/store.js";
import { addExpense } from "./redux/expenses-actions.js";
import { setTextFilter } from "./redux/filters.actions.js";
import getVisibleExpenses from "./redux/expenses-selectors.js";

import "./App.css";

const store = configStore();
store.dispatch(addExpense({ description: "water bill" }));
store.dispatch(addExpense({ description: "phone bill" }));
store.dispatch(addExpense({ description: "gas bill" }));
store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(state);
console.log(visibleExpenses);

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
