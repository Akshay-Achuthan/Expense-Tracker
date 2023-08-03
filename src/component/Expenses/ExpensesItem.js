import React, {useState} from "react";
import Card from "../UI/Card"
import ExpensesDate from "./ExpensesDate";

import "./ExpensesItem.css"

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated!');
  }

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;