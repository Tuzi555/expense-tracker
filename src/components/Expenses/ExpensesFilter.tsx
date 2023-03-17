import React, { ChangeEvent, FC } from 'react';

interface ExpenseFilterProps {
  selectedYear: string;
  onFilterExpenses: (selectedYear: string) => void;
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
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
