import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../../redux/expenses-selectors.js";

import ExpenseListItem from "../ExpensesListItemComponent/expenses-list-item.component";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};
export default connect(mapStateToProps)(ExpenseList);
