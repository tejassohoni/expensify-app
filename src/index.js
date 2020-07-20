import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import LoadingScreen from "./Components/LoadingScreen/loading-screen.component.jsx";
import { startSetExpenses } from "./Redux/expenses-actions.js";
import "react-dates/lib/css/_datepicker.css";
import { history } from "./app-routers/app-routers.jsx";
import { login, logout } from "./Redux/auth-actions";
import { firebase } from "./Firebase/firebase";
import "./index.css";
import configStore from "./Redux/store.js";

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <LoadingScreen />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
