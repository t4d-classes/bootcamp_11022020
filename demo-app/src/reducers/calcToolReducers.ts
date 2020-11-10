import { Reducer, combineReducers } from "redux";
import {
  CalcActions,
  // ADD_ACTION,
  // SUBTRACT_ACTION,
  // MULTIPLY_ACTION,
  // DIVIDE_ACTION,
  isOpAction,
  isDeleteEntryAction,
  isDivideAction,
  OpActions,
  isRefreshHistoryDoneAction,
} from "../actions/calcToolActions";
import {
  // CalcToolState,
  HistoryEntry,
} from "../models/calcStore";

// const initialState: CalcToolState = {
//   result: 0,
//   history: [],
//   errorMessage: "",
// };

// export const resultReducer: Reducer<number, CalcActions> = (
//   result = 0,
//   action
// ) => {
//   if (isClearAction(action)) {
//     return 0;
//   }

//   switch (action.type) {
//     case ADD_ACTION:
//       return result + action.payload.value;
//     case SUBTRACT_ACTION:
//       return result - action.payload.value;
//     case MULTIPLY_ACTION:
//       return result * action.payload.value;
//     case DIVIDE_ACTION:
//       return result / action.payload.value;
//   }

//   return result;
// };

export const errorMessageReducer: Reducer<string, OpActions> = (
  errorMessage = "",
  action
) => {
  if (isDivideAction(action) && action.payload.value === 0) {
    return "Cannot divide by 0";
  }

  if (
    isRefreshHistoryDoneAction(action) ||
    isDeleteEntryAction(action) ||
    isOpAction(action)
  ) {
    return "";
  }

  return errorMessage;
};

export const historyReducer: Reducer<HistoryEntry[], CalcActions> = (
  history = [],
  action
) => {
  if (isDivideAction(action) && action.payload.value === 0) {
    return history;
  }

  if (isDeleteEntryAction(action)) {
    return history.filter((entry) => entry.id !== action.payload.entryId);
  }

  if (isRefreshHistoryDoneAction(action)) {
    return action.payload.history;
  }

  // if (isOpAction(action)) {
  //   return [
  //     ...history,
  //     {
  //       id: Math.max(...history.map((entry) => entry.id), 0) + 1,
  //       opName: action.type,
  //       opValue: action.payload.value,
  //     },
  //   ];
  // }

  return history;
};

export const calcToolReducer = combineReducers({
  // result: resultReducer,
  errorMessage: errorMessageReducer,
  history: historyReducer,
});

// export const calcToolReducer: Reducer<CalcToolState, CalcActions> = (
//   state = initialState,
//   action
// ) => {
//   const newState = { ...state };

//   if (isClearAction(action)) {
//     return {
//       result: 0,
//       history: [],
//       errorMessage: "",
//     } as CalcToolState;
//   }

//   if (isDeleteEntryAction(action)) {
//     newState.history = newState.history.filter(
//       (entry) => entry.id !== action.payload.entryId
//     );
//     return newState;
//   }

//   if (isDivideAction(action) && action.payload.value === 0) {
//     newState.errorMessage = "Cannot divide by 0";
//     return newState;
//   }

//   newState.errorMessage = "";

//   if (isOpAction(action)) {
//     newState.history = [
//       ...newState.history,
//       {
//         id: Math.max(...newState.history.map((entry) => entry.id), 0) + 1,
//         opName: action.type,
//         opValue: action.payload.value,
//       },
//     ];
//   }

//   switch (action.type) {
//     case ADD_ACTION:
//       newState.result = newState.result + action.payload.value;
//       break;
//     case SUBTRACT_ACTION:
//       newState.result = newState.result - action.payload.value;
//       break;
//     case MULTIPLY_ACTION:
//       newState.result = newState.result * action.payload.value;
//       break;
//     case DIVIDE_ACTION:
//       newState.result = newState.result / action.payload.value;
//       break;
//   }

//   return newState;
// };
