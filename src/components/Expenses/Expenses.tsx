import React, { FC, useState } from 'react';

import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import { ExpenseItemModel } from '../../models/ExepnseItemModel';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';

interface ExpensesProps {
  items: ExpenseItemModel[];
}

const Expenses: FC<ExpensesProps> = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterExpensesHandler = (selectedYear: string) => {
    console.log(`Year selected by user: ${selectedYear}`);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
  return (
    <div className="expenses rounded-2xl">
      <Card className="bg-cyan-600 py-4 my-4">
        <ExpenseFilter selectedYear={filteredYear} onFilterExpenses={filterExpensesHandler} />
      </Card>
      {filteredExpenses.length === 0 ? (
        <p className="text-white m-1">No expenses found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
