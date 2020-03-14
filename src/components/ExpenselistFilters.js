import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setEndDate,
  setStartDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };
  render() {
    const { text, sortBy, startDate, endDate } = this.props.filters;
    const { dispatch } = this.props;
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={e => {
            dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={sortBy}
          onChange={e => {
            if (e.target.value === "date") dispatch(sortByDate());
            else if (e.target.value === "amount") dispatch(sortByAmount());
          }}
        >
          <option value="date">date</option>
          <option value="amount">amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});
export default connect(mapStateToProps)(ExpenseListFilters);
