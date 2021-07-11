import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';

import { getTotalExpenses } from '../utils/helpers';

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = getTotalExpenses(expenses);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
