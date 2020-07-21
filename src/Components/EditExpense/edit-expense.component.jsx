import React from "react";
import { connect } from "react-redux";
import "react-dates/initialize";

import {
  startEditExpenses,
  startRemoveExpenses,
} from "../../Redux/expenses-actions";
import ExpenseForm from "../ExpenseForm/expense-form.component";
import "./edit-expense.styles.scss";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpenses(this.props.expense.id, expense);
    this.props.history.push("/dashboard");
  };
  onRemove = () => {
    this.props.startRemoveExpenses({ id: this.props.expense.id });
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container remove">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button onClick={this.onRemove} className="button remove-button">
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
  startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
