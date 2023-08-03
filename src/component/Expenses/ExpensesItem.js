import React from "react";
import Card from "../UI/Card"
import ExpensesDate from "./ExpensesDate";

import "./ExpensesItem.css"

const ExpenseItem = (props) => {

  return (
    <li>
    <Card className="expense-item">
      <ExpensesDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;