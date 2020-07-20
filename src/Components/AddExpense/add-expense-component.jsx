import React from "react";
import { connect } from "react-redux";

import { startAddExpense } from "../../Redux/expenses-actions";
import ExpenseForm from "../ExpenseForm/expense-form.component";

export class AddExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});
export default connect(null, mapDispatchToProps)(AddExpense);
