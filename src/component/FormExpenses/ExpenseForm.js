import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate,setEnteredDate] = useState('');

  //! For reference (dealing with multiple states)
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  //! For reference (using single state instead of multiple states)

  // const [userInput,setUserInput] = useState('');

  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle:event.target.value
  //   });
  // };
  
  // const amountChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount:event.target.value
  //   });
  // };

  //todo More accurate solution (since we use states which is based on previous states so we can use a better approach for the same) 

  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {
  //        ...prevState,enteredDate:event.target.value 
  //     };
  //   });
  // };

  //! using single handler function instead of using different handlers

  // const expenseDataHandler = (identifier,value) => {
  //   if(identifier === 'title'){
  //     setEnteredTitle(value);
  //   }else if(identifier === 'amount'){
  //     setEnteredAmount(value);
  //   }else{
  //     setEnteredDate(value);
  //   }
  // }

  // html

  // <div className="new-expense__control">
  //         <label>Title</label>
  //         <input onChange={(event) => {
  //           expenseDataHandler('title',event.target.value)
  //         }} 
  //         type="text" />
  //       </div>

  return (
    <form>
      <div className="new-expense__controls">
        
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} 
          type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input 
          onChange={amountChangeHandler}
          type="number"
          min="0.01"
          step="0.01"/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input 
          onChange={dateChangeHandler}
          type="date"
          min="2019-01-01"
          max="2022-12-31"/>
        </div>

      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;