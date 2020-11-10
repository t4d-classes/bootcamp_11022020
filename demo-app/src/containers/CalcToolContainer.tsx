import React, { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
  createDeleteEntryAction,
  appendEntry,
  refreshHistory,
  ADD_ACTION,
  SUBTRACT_ACTION,
  MULTIPLY_ACTION,
  DIVIDE_ACTION,
} from "../actions/calcToolActions";
import { CalcTool } from "../components/CalcTool";
import { CalcToolState, HistoryEntry } from "../models/calcStore";

const computeResult = (history: HistoryEntry[]) => {
  console.log("I am computing...");
  return history.reduce((result, entry) => {
    switch (entry.opName) {
      case ADD_ACTION:
        return result + entry.opValue;
      case SUBTRACT_ACTION:
        return result - entry.opValue;
      case MULTIPLY_ACTION:
        return result * entry.opValue;
      case DIVIDE_ACTION:
        return result / entry.opValue;
      default:
        return result;
    }
  }, 0 /* initial value of result */);
};

// const computeResult = (history: HistoryEntry[]) => {
//   let result = 0;

//   history.forEach((entry) => {
//     switch (entry.opName) {
//       case ADD_ACTION:
//         result = result + entry.opValue;
//         break;
//       case SUBTRACT_ACTION:
//         result = result - entry.opValue;
//         break;
//       case MULTIPLY_ACTION:
//         result = result * entry.opValue;
//         break;
//       case DIVIDE_ACTION:
//         result = result / entry.opValue;
//         break;
//     }
//   });

//   return result;
// };

export function CalcToolContainer() {
  const stateProps = useSelector((state: CalcToolState) => {
    return {
      history: state.history,
      errorMessage: state.errorMessage,
    };
  }) as { result: number; history: HistoryEntry[]; errorMessage: string };

  stateProps.result = useMemo(() => computeResult(stateProps.history), [
    stateProps.history,
  ]);

  // onAdd = (value: number) => dispatch(createAddAction(value));
  // onSubtract = (value: number) => dispatch(createSubtractAction(value));
  const boundActionProps = bindActionCreators(
    {
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction,
      onClear: createClearAction,
      onAppendEntry: appendEntry,
      onDeleteEntry: createDeleteEntryAction,
      onRefreshHistory: refreshHistory,
    },
    useDispatch()
  );

  return <CalcTool {...stateProps} {...boundActionProps} />;
}
