import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundError = () => (
  <div>
    404 Not Found - <NavLink to="/">Go Home</NavLink>
  </div>
);

export default NotFoundError;
