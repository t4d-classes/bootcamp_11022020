import { Action, AnyAction } from "redux";

export const ADD_ACTION = "ADD";
export const SUBTRACT_ACTION = "SUBTRACT";

export interface AddAction extends Action<typeof ADD_ACTION> {
  payload: {
    value: number;
  };
}

export function isAddAction(action: AnyAction): action is AddAction {
  return action.type === ADD_ACTION;
}

export type CreateAddAction = (value: number) => AddAction;

export const createAddAction: CreateAddAction = (value) => {
  return {
    type: ADD_ACTION,
    payload: {
      value,
    },
  };
};

export interface SubtractAction extends Action<typeof SUBTRACT_ACTION> {
  payload: {
    value: number;
  };
}

export function isSubtractAction(action: AnyAction): action is SubtractAction {
  return action.type === SUBTRACT_ACTION;
}

export type CreateSubtractAction = (value: number) => SubtractAction;

export const createSubtractAction: CreateSubtractAction = (value) => {
  return {
    type: SUBTRACT_ACTION,
    payload: {
      value,
    },
  };
};

export type OpActions = AddAction | SubtractAction;
