import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header/header.component.jsx";
import ExpenseDashboard from "../components/ExpenseDashboard/expense-dashboard-page.component.jsx";
import AddExpense from "../components/AddExpense/add-expense-component.jsx";
import Help from "../components/Help/help.component.jsx";
import EditExpense from "../components/EditExpense/edit-expense.component.jsx";
import NotFoundError from "../components/404Error/404-error.component.jsx";

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
