import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="isActive" to="/">
      Dashboard{" "}
    </NavLink>
    <NavLink activeClassName="isActive" to="/create">
      Create{" "}
    </NavLink>
    <NavLink activeClassName="isActive" to="/help">
      Help{" "}
    </NavLink>
  </div>
);

export default Header;
