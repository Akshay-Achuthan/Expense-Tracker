import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css"

const NewExpenses = (props) => {

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpenseData(expenseData);
    setShowing(false);
  }

  const [isShowing,setShowing] = useState(false);

  const newExpenseHandler = () => {
    setShowing(true);
  }
  
  const stopExpenseHandler = () => {
    setShowing(false);
  }

  return (
    <div className="new-expense">
      {isShowing === true ? <ExpenseForm onCancel={stopExpenseHandler} onSaveExpenseData={saveExpenseData}/> :
      <button onClick={newExpenseHandler}>Add New Expenses</button>}
    </div>
  );
}

export default NewExpenses;