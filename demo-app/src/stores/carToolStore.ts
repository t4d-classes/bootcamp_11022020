import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { carToolReducer } from "../reducers/carToolReducers";

export const carToolStore = createStore(carToolReducer, applyMiddleware(thunk));
