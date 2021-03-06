import React, { createContext, useReducer } from 'react';

import { ADD_EXPENSE, REMOVE_EXPENSE, UPDATE_BUDGET } from '../utils/const';

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 14, name: 'car service', cost: 50 }
  ]
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload
        )
      };
    case UPDATE_BUDGET:
      return {
        ...state,
        budget: action.payload
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
