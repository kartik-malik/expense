import React from "react";
import numeral from "numeral";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
const ExpenseListitem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`edit/${id}`} className="list-item">
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span>{moment(createdAt).format("MMMM Do,YYYY")}</span>
      </div>
      <div className="list-item__sub-title">
        <h3 className="list-item__data">
          Rs.{numeral(amount).format("0,0.0000")}/-
        </h3>
      </div>
    </Link>
  </div>
);
export default connect()(ExpenseListitem);
