import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");

  const [enteredamount, setenteredamount] = useState("");

  const [entereddate, setentereddate] = useState("");

  const titleChangeHandler = (event) => {
    setenteredtitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredamount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setentereddate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(expenseData);
    
    setenteredtitle("");
    setenteredamount("");
    setentereddate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            value={enteredamount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input type="date" value={entereddate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
