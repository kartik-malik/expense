import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
export default class ExpenseForm extends Component {
  state = {
    description: this.props.expense ? this.props.expense.description : "",
    note: this.props.expense ? this.props.expense.note : "",
    amount: this.props.expense ? this.props.expense.amount : "",
    createdAt: this.props.expense
      ? moment(this.props.expense.createdAt)
      : moment(),
    calendarFocused: false,
    error: ""
  };
  onDateChange = createdAt => {
    if (createdAt) this.setState({ createdAt });
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState({ amount });
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "please provide details" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: +this.state.amount,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calendarFocused,

      error
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="desc"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focused={calendarFocused}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="note"
            onChange={this.onNoteChange}
            value={note}
          />

          <button>submit</button>
        </form>
      </div>
    );
  }
}
