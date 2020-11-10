import React, { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  appendEntry,
  refreshHistory,
  clearHistory,
  deleteEntry,
} from "../actions/calcToolActions";
import { CalcTool } from "../components/CalcTool";
import {
  CalcToolState,
  HistoryEntry,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
} from "../models/calcStore";

const computeResult = (history: HistoryEntry[]) => {
  console.log("I am computing...");
  return history.reduce((result, entry) => {
    switch (entry.opName) {
      case ADD:
        return result + entry.opValue;
      case SUBTRACT:
        return result - entry.opValue;
      case MULTIPLY:
        return result * entry.opValue;
      case DIVIDE:
        return result / entry.opValue;
      default:
        return result;
    }
  }, 0);
};

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

  const dispatch = useDispatch();

  const boundActionProps = useMemo(
    () =>
      bindActionCreators(
        {
          onClear: clearHistory,
          onAppendEntry: appendEntry,
          onDeleteEntry: deleteEntry,
          onRefreshHistory: refreshHistory,
        },
        dispatch
      ),
    [dispatch]
  );

  return <CalcTool {...stateProps} {...boundActionProps} />;
}
