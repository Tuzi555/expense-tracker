import React, {FC} from 'react';

import ExpenseItem, {ExpenseItemProps} from './ExpenseItem.js';
import './Expenses.css';

interface ExpensesProps {
    items: ExpenseItemProps[]
}

const Expenses:FC<ExpensesProps> = (props) => {
  return (
    <div className="expenses rounded-2xl">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </div>
  );
}

export default Expenses;
