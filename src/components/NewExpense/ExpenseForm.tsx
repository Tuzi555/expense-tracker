import React, { ChangeEvent, FormEvent, useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const defaultDate = new Date('2020-01-01');

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState(defaultDate);
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.currentTarget.value);
  };
  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.currentTarget.valueAsNumber);
  };
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.currentTarget.valueAsDate ?? defaultDate);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    setEnteredTitle('');
    setEnteredAmount(0);
    setEnteredDate(defaultDate);
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-4 text-left">
        <div className="new-expense__control ">
          <label>Title</label>
          <div>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <div>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <div>
            <input
              type="date"
              min={defaultDate.toISOString().split('T')[0]}
              max="2023-12-31"
              value={enteredDate.toISOString().split('T')[0]}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      </div>
      <button
        className="border border-white bg-blue-900 text-white cursor-pointer px-8 py-4 rounded-xl hover:bg-blue-700 w-full"
        type="submit"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
