import { createStore } from "redux";

import { carToolReducer } from "../reducers/carToolReducers";

export const carToolStore = createStore(carToolReducer);
