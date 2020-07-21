import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../Redux/filters.actions";
import "./expense-list-filters.styles.scss";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };
  onFocusChange = (calendarFocused) => this.setState({ calendarFocused });

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              placeholder="Search Expenses"
              className="text-input"
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              className="dateRangePicker"
              startDate={this.props.filters.startDate}
              startDateId="startdateid"
              endDate={this.props.filters.endDate}
              endDateId="enddateid"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
