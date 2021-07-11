import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map(({ id, name, cost }) => (
        <ExpenseItem key={id} id={id} name={name} cost={cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
