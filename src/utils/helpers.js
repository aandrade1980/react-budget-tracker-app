export const getTotalExpenses = expenses =>
  expenses.reduce((total, item) => (total = total + item.cost), 0);
