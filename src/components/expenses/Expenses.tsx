import React, { FC, useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {ExpenseItemModel} from "./models/ExepnseItemModel";

interface ExpensesProps {
  items: ExpenseItemModel[];
}

const Expenses: FC<ExpensesProps> = (props) => {
  const availableYears = props.items
    .map((expense) => expense.date.getFullYear())
    .sort((a, b) => a - b)
    .filter((year, index, self) => self.indexOf(year) === index);

  const [filteredYear, setFilteredYear] = useState(availableYears[availableYears.length - 1].toString());
  const filterExpensesHandler = (selectedYear: string) => {
    console.log(`Year selected by user: ${selectedYear}`);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === 'All') {
      return true;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses rounded-2xl">
      <Card className="bg-cyan-600 py-4 my-4">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterExpenses={filterExpensesHandler}
          availableYears={availableYears}
        />
      </Card>
      {filteredExpenses.length === 0 ? (
        <p className="text-white m-1">No expenses found.</p>
      ) : (
        filteredExpenses
          .sort((a, b) => b.date.valueOf() - a.date.valueOf())
          .map((expense) => (
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
