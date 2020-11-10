import { Reducer, combineReducers } from "redux";
import {
  CalcActions,
  isRefreshHistoryDoneAction,
  REFRESH_HISTORY_DONE_ACTION,
  SET_ERROR_MESSAGE_ACTION,
} from "../actions/calcToolActions";
import { HistoryEntry } from "../models/calcStore";

export const errorMessageReducer: Reducer<string, CalcActions> = (
  errorMessage = "",
  action
) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE_ACTION:
      return action.payload.errorMessage;
    case REFRESH_HISTORY_DONE_ACTION:
      return "";
    default:
      return errorMessage;
  }
};

export const historyReducer: Reducer<HistoryEntry[], CalcActions> = (
  history = [],
  action
) => {
  if (isRefreshHistoryDoneAction(action)) {
    return action.payload.history;
  }
  return history;
};

export const calcToolReducer = combineReducers({
  errorMessage: errorMessageReducer,
  history: historyReducer,
});
