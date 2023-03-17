import React, {FC} from 'react';

import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import './ExpenseItem.css';
import {ExpenseItemModel} from "../../models/ExepnseItemModel";

const ExpenseItem:FC<ExpenseItemModel> = (props) => {
  // function clickHandler() {}
  console.log('ExpenseItem evaluated by React');

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
