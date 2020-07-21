import React from "react";
import { connect } from "react-redux";

import getVisibleExpenses from "../../Redux/expenses-selectors.js";
import ExpenseListItem from "../ExpensesListItem/expenses-list-item.component";
import "./expense-list.styles.scss";

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    {props.expenses.length === 0 ? (
      <div className="list-message">
        <span>No expenses</span>
      </div>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
