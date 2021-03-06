import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { Link } from "react-router-dom";

import "./expense-form.styles.scss";

const date = moment();
console.log(date.format("Do/MMM/YYYY"));

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please enter the necessary details" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });

      this.setState(() => ({
        description: "",
        amount: "",
        date: moment(),
        note: "",
      }));
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        {this.state.error && <p className="form-error">{this.state.error}</p>}

        <input
          className="text-input"
          type="text"
          value={this.state.description}
          placeholder="Description"
          autoFocus
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          className="datepicker"
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
          placeholder="Add a note for your expense(optional)"
        ></textarea>
        <div>
          <button className="button" onClick={this.onSubmit}>
            Save Expense
          </button>
          <Link className="cancel-button" to="/">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
