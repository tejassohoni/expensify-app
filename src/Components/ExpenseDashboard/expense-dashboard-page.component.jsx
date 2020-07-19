import React from "react";

import ExpensesSummary from "../ExpensesSummary/expenses-summary.component";
import ExpenseListFilters from "../ExpenseListFilters/expense-list-filters.component";
import ExpenseList from "../ExpenseList/expense-list.component";

const ExpenseDashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
