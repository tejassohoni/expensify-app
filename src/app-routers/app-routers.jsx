import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import ExpenseDashboard from "../Components/ExpenseDashboard/expense-dashboard-page.component.jsx";
import AddExpense from "../Components/AddExpense/add-expense-component.jsx";
import EditExpense from "../Components/EditExpense/edit-expense.component.jsx";
import NotFoundError from "../Components/404Error/404-error.component.jsx";
import LoginPage from "../Components/Login/login-page.component";
import PrivateRoute from "../Components/PrivateRoute/private-route.component.jsx";
import PublicRoute from "../Components/PublicRoute/public-route.component";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route component={NotFoundError} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
