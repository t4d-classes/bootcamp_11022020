import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { carToolReducer } from "../reducers/carToolReducers";

export const carToolStore = createStore(
  carToolReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
