import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddAction,
  createSubtractAction,
  createMultiplyAction,
  createDivideAction,
  createClearAction,
  createDeleteEntryAction,
} from "../actions/calcToolActions";
import { CalcTool } from "../components/CalcTool";
import { CalcToolState } from "../models/calcStore";

export function CalcToolContainer() {
  const stateProps = useSelector((state: CalcToolState) => {
    return {
      result: state.result,
      history: state.history,
      errorMessage: state.errorMessage,
    };
  });

  // onAdd = (value: number) => dispatch(createAddAction(value));
  // onSubtract = (value: number) => dispatch(createSubtractAction(value));
  const boundActionProps = bindActionCreators(
    {
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction,
      onClear: createClearAction,
      onDeleteEntry: createDeleteEntryAction,
    },
    useDispatch()
  );

  return <CalcTool {...stateProps} {...boundActionProps} />;
}
