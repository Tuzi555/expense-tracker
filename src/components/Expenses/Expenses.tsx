import React, { FC } from 'react';

import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import { ExpenseItemModel } from '../../models/ExepnseItemModel';
import ExpenseFilter from './ExpensesFilter';
import Card from '../UI/Card';

interface ExpensesProps {
  items: ExpenseItemModel[];
}

const Expenses: FC<ExpensesProps> = (props) => {
  const filterExpensesHandler = (selectedYear: string) => {
    console.log(`Year selected by user: ${selectedYear}`);
  };
  return (
    <div className="expenses rounded-2xl">
      <Card className="bg-cyan-600 py-4 my-4">
        <ExpenseFilter onFilterExpenses={filterExpensesHandler} />
      </Card>

      <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        id={props.items[1].id}
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        id={props.items[2].id}
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        id={props.items[3].id}
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
};

export default Expenses;
