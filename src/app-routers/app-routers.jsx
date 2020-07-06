import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../Components/Header/header.component.jsx";
import ExpenseDashboard from "../Components/ExpenseDashboard/expense-dashboard-page.component.jsx";
import AddExpense from "../Components/AddExpense/add-expense-component.jsx";
import Help from "../Components/Help/help.component.jsx";
import EditExpense from "../Components/EditExpense/edit-expense.component.jsx";
import NotFoundError from "../Components/404Error/404-error.component.jsx";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/create" component={AddExpense} />
        <Route exact path="/" component={ExpenseDashboard} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFoundError} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
