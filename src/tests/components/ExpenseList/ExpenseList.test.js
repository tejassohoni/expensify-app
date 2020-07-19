import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../../Components/ExpenseList/expense-list.component";
import expenses from "../../fixtures/expenses";

test("Should render ExpenseList with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render eExpenseList with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
