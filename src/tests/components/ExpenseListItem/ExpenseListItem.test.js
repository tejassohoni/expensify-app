import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../../Components/ExpensesListItem/expenses-list-item.component.jsx";
import expenses from "../../fixtures/expenses";

test("Should render ExpenseListItem", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
