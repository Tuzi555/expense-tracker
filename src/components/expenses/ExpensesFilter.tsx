import React, { ChangeEvent, FC } from 'react';

interface ExpenseFilterProps {
  selectedYear: string;
  onFilterExpenses: (selectedYear: string) => void;
  availableYears: number[];
}

const ExpensesFilter: FC<ExpenseFilterProps> = (props) => {
  const changeYearHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onFilterExpenses(event.currentTarget.value);
  };
  return (
    <div className="expenses-filter text-white">
      <div className="flex w-full items-center justify-between">
        <label className="m-2 font-bold">Filter by year</label>
        <select
          className="rounded-xl px-6 py-2 mx-2 bg-blue-900 border border-white font-bold"
          onChange={changeYearHandler}
          value={props.selectedYear}
        >
          <option key="All" value="All">All</option>
          {props.availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
