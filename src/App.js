import React from "react";
import AppRouter from "./app-routers/app-routers.jsx";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;
