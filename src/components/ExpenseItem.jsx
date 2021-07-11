import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';

import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
  const { dispatch } = useContext(AppContext);

  const handleItemRemove = () => {
    dispatch({
      type: 'REMOVE_EXPENSE',
      payload: id
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">£{cost}</span>
      </div>
      <TiDelete size="1.5em" onClick={handleItemRemove} />
    </li>
  );
};

export default ExpenseItem;
