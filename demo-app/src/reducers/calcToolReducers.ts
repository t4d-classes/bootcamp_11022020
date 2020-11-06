import { Reducer } from "redux";
import {
  CalcActions,
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
  isOpAction,
  isDeleteEntryAction,
  isDivideAction,
  isClearAction,
} from "../actions/calcToolActions";
import { CalcToolState } from "../models/calcStore";

const initialState: CalcToolState = {
  result: 0,
  history: [],
  errorMessage: "",
};

export const calcToolReducer: Reducer<CalcToolState, CalcActions> = (
  state = initialState,
  action
) => {
  const newState = { ...state };

  if (isClearAction(action)) {
    return {
      result: 0,
      history: [],
      errorMessage: "",
    } as CalcToolState;
  }

  if (isDeleteEntryAction(action)) {
    newState.history = newState.history.filter(
      (entry) => entry.id !== action.payload.entryId
    );
    return newState;
  }

  if (isDivideAction(action) && action.payload.value === 0) {
    newState.errorMessage = "Cannot divide by 0";
    return newState;
  }

  newState.errorMessage = "";

  if (isOpAction(action)) {
    newState.history = [
      ...newState.history,
      {
        id: Math.max(...newState.history.map((entry) => entry.id), 0) + 1,
        opName: action.type,
        opValue: action.payload.value,
      },
    ];
  }

  switch (action.type) {
    case ADD_ACTION:
      newState.result = newState.result + action.payload.value;
      break;
    case SUBTRACT_ACTION:
      newState.result = newState.result - action.payload.value;
      break;
    case MULTIPLY_ACTION:
      newState.result = newState.result * action.payload.value;
      break;
    case DIVIDE_ACTION:
      newState.result = newState.result / action.payload.value;
      break;
  }

  return newState;
};
