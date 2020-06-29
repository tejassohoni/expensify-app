import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboard from "./Components/ExpenseDashboard/expense-dashboard-page.component.jsx";
import AddExpense from "./Components/AddExpense/add-expense-component.jsx";
import Help from "./Components/Help/help.component.jsx";
import EditExpense from "./Components/EditExpense/edit-expense.component.jsx";
import NotFoundError from "./Components/404Error/404-error.component.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/create" component={AddExpense} />
            <Route exact path="/dashboard" component={ExpenseDashboard} />
            <Route path="/edit" component={EditExpense} />
            <Route exact path="/help" component={Help} />
            <Route component={NotFoundError} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
