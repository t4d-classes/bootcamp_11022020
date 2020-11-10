import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { calcToolReducer } from "../reducers/calcToolReducers";

export const calcToolStore = createStore(
  calcToolReducer,
  applyMiddleware(thunk)
);
