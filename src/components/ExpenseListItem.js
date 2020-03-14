import React from "react";

import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const ExpenseListitem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {amount}-{createdAt}
    </p>
  </div>
);
export default connect()(ExpenseListitem);
