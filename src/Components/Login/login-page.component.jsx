import React from "react";
import { connect } from "react-redux";

import { startLogin } from "../../Redux/auth-actions.js";
import "./login.styles.scss";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>A Better Way To Handle Your Expenses.</p>
      <button className="button" onClick={startLogin}>
        Login With Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
