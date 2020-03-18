import React from "react";
import numeral from "numeral";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
const ExpenseListitem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {numeral(amount).format("0,0.0000")}-
      {moment(createdAt).format("MMMM Do,YYYY")}
    </p>
  </div>
);
export default connect()(ExpenseListitem);
