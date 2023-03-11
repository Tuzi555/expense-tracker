import React, { FC } from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';
import { ExpenseItemModel } from '../../models/ExepnseItemModel';

interface NewExpenseProps {
  onNewExpenseAdded: (newExpense: ExpenseItemModel) => void;
}

const NewExpense: FC<NewExpenseProps> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemModel) => {
    props.onNewExpenseAdded(enteredExpenseData);
  };

  return (
    <div className="bg-cyan-600 p-4 my-4 mx-auto w-[50rem] max-w-[95%] rounded-2xl text-center shadow-md shadow-slate-800">
      <div className="bg-slate-700 p-4 rounded-xl">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
};

export default NewExpense;
