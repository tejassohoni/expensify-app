import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../redux/filters.actions";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  // onDatesChange = ({ startDate, endDate }) => {
  //   this.props.dispatch(setStartDate(startDate));
  //   this.props.dispatch(setEndDate(endDate));
  // };

  // onFocusChange = ({ calendarFocused }) => {
  //   this.setState(() => ({ calendarFocused: calendarFocused }));
  // };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="startdateid"
          endDate={this.props.filters.endDate}
          endDateId="enddateid"
          onDatesChange={({ startDate, endDate }) => {
            this.props.dispatch(setStartDate(startDate));
            this.props.dispatch(setEndDate(endDate));
          }}
          focusedInput={this.state.calendarFocused}
          onFocusChange={(calendarFocused) =>
            this.setState({ calendarFocused })
          }
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
  expenses: state.expenses,
});

export default connect(mapStateToProps)(ExpenseListFilters);
