import React from "react";
import ExpenseListFilters from "../ExpenseListFilters/expense-list-filters.component";
import ExpenseList from "../ExpenseList/expense-list.component";

const ExpenseDashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
