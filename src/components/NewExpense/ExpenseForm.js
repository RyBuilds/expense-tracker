import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  // IF UPDATING A STATE WHICH DEPENDS ON THE PREVIOUS STATE...
  // REACT SCHEDULES STATE UPDATES, THEY ARENT PERFORMED INSTANTLY
  // YOU COULD BE RELYING ON AN OUT OF DATE SNAPSHOT WITH THIS APPROACH

  // TO AVOID; PASS IN A FUNCTION TO THAT FUNCTION; ANONYMOUS ARROW FUNCTION
  // THIS FUNCTION IS AUTOMATICALLY EXECUTED BY REACT, WITH prevState
  // AND OVERRIDE THE CHANGED VALUE WITH event.target.value

  // setUserInput((prevState) => {
  //   return { ...prevState, changedInput: event.target.value };
  // });

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    console.log(expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
