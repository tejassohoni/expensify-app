import React from "react";
import { shallow } from "enzyme";
import NotFoundError from "../../../Components/404Error/404-error.component";

test("Should render ExpenseListItem", () => {
  const wrapper = shallow(<NotFoundError />);
  expect(wrapper).toMatchSnapshot();
});
