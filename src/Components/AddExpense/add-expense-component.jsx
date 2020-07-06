import React from "react";
import { connect } from "react-redux";

import { addExpense } from "../../redux/expenses-actions";
import ExpenseForm from "../ExpenseForm/expense-form.component";

const AddExpense = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpense);
