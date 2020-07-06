import { createStore, combineReducers } from "redux";
import expensesReducer from "./expenses-reducer";
import filtersReducer from "./filters-reducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configStore;
