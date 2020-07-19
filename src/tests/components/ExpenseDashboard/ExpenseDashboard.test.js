import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from "../../../Components/ExpenseDashboard/expense-dashboard-page.component.jsx";

test("Should render ExpenseListItem", () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect(wrapper).toMatchSnapshot();
});
