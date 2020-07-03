import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "../ExpensesListItemComponent/expenses-list-item.component";

const ExpenseList = (props) => {
  return (
    <div>
      {console.log(props)}
      {props.expenses.map((expense) => {
        return <ExpenseListItem {...expense} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters,
});

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
