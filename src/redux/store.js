import { createStore, combineReducers } from "redux";
import expensesReducer from "./expenses-reducer";
import filtersReducer from "./filters-reducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    })
  );

  return store;
};

export default configStore;
