import React, { useContext, useState } from 'react';

import { AppContext } from '../context/AppContext';

import { UPDATE_BUDGET } from '../utils/const';

const EditBudgetForm = () => {
  const { dispatch } = useContext(AppContext);

  const [budget, setBudget] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();

    dispatch({
      type: UPDATE_BUDGET,
      payload: budget
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Budget</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="budget"
            value={budget}
            onChange={evt => setBudget(evt.target.value)}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditBudgetForm;
