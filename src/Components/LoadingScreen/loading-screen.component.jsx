import React from "react";

import "./loading-screen.styles.scss";

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <div className="loader">
        <img src={require("./loader.gif")} />
      </div>
    );
  }
}
