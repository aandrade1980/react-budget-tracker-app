import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ search }) => {
  const { expenses } = useContext(AppContext);

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className="list-group">
      {filteredExpenses.map(({ id, name, cost }) => (
        <ExpenseItem key={id} id={id} name={name} cost={cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
