import React from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div className="bg-cyan-600 p-4 my-4 mx-auto max-w-[95%] rounded-2xl text-center shadow-md shadow-slate-800">
      <div className="bg-slate-700 p-4 rounded-xl">
        <ExpenseForm />
      </div>
    </div>
  );
};

export default NewExpense;
