import { createStore } from "redux";

import { calcToolReducer } from "../reducers/calcToolReducers";

export const calcToolStore = createStore(calcToolReducer);
