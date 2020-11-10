import { Action, AnyAction, Dispatch } from "redux";

import { HistoryEntry } from "../models/calcStore";

export const ADD_ACTION = "ADD";
export const SUBTRACT_ACTION = "SUBTRACT";
export const MULTIPLY_ACTION = "MULTIPLY";
export const DIVIDE_ACTION = "DIVIDE";
export const CLEAR_ACTION = "CLEAR";
export const DELETE_ENTRY_ACTION = "DELETE_ENTRY";

export const APPEND_ENTRY_REQUEST_ACTION = "APPEND_ENTRY_REQUEST_ACTION";
export const APPEND_ENTRY_DONE_ACTION = "APPEND_ENTRY_DONE_ACTION";
export const REFRESH_HISTORY_REQUEST_ACTION = "REFRESH_HISTORY_REQUEST_ACTION";
export const REFRESH_HISTORY_DONE_ACTION = "REFRESH_HISTORY_DONE_ACTION";

export type RefreshHistoryRequestAction = Action<
  typeof REFRESH_HISTORY_REQUEST_ACTION
>;

export function isRefreshHistoryRequestAction(
  action: AnyAction
): action is RefreshHistoryRequestAction {
  return action.type === REFRESH_HISTORY_REQUEST_ACTION;
}

export type CreateRefreshHistoryRequestAction = () => RefreshHistoryRequestAction;

export const createRefreshHistoryRequestAction: CreateRefreshHistoryRequestAction = () => {
  return {
    type: REFRESH_HISTORY_REQUEST_ACTION,
  };
};

export interface RefreshHistoryDoneAction
  extends Action<typeof REFRESH_HISTORY_DONE_ACTION> {
  payload: {
    history: HistoryEntry[];
  };
}

export function isRefreshHistoryDoneAction(
  action: AnyAction
): action is RefreshHistoryDoneAction {
  return action.type === REFRESH_HISTORY_DONE_ACTION;
}

export type CreateRefreshHistoryDoneAction = (
  history: HistoryEntry[]
) => RefreshHistoryDoneAction;

export const createRefreshHistoryDoneAction: CreateRefreshHistoryDoneAction = (
  history
) => {
  return {
    type: REFRESH_HISTORY_DONE_ACTION,
    payload: {
      history,
    },
  };
};

export const refreshHistory = () => {
  return (dispatch: Dispatch) => {
    dispatch(createRefreshHistoryRequestAction());
    return fetch("http://localhost:3060/history")
      .then((res) => res.json())
      .then((history) => dispatch(createRefreshHistoryDoneAction(history)));
  };
};

export interface AppendEntryRequestAction
  extends Action<typeof APPEND_ENTRY_REQUEST_ACTION> {
  payload: {
    opName: string;
    opValue: number;
  };
}

export function isAppendEntryRequestAction(
  action: AnyAction
): action is AppendEntryRequestAction {
  return action.type === APPEND_ENTRY_REQUEST_ACTION;
}

export type CreateAppendEntryRequestAction = (
  opName: string,
  opValue: number
) => AppendEntryRequestAction;

export const createAppendEntryRequestAction: CreateAppendEntryRequestAction = (
  opName,
  opValue
) => {
  return {
    type: APPEND_ENTRY_REQUEST_ACTION,
    payload: {
      opName,
      opValue,
    },
  };
};

export const appendEntry = (opName: string, opValue: number) => {
  return (dispatch: Dispatch) => {
    dispatch(createAppendEntryRequestAction(opName, opValue));
    return fetch("http://localhost:3060/history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opName, opValue }),
    }).then(() => {
      refreshHistory()(dispatch);
    });
  };
};

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

export interface MultiplyAction extends Action<typeof MULTIPLY_ACTION> {
  payload: {
    value: number;
  };
}

export function isMultiplyAction(action: AnyAction): action is MultiplyAction {
  return action.type === MULTIPLY_ACTION;
}

export type CreateMultiplyAction = (value: number) => MultiplyAction;

export const createMultiplyAction: CreateMultiplyAction = (value) => {
  return {
    type: MULTIPLY_ACTION,
    payload: {
      value,
    },
  };
};

export interface DivideAction extends Action<typeof DIVIDE_ACTION> {
  payload: {
    value: number;
  };
}

export function isDivideAction(action: AnyAction): action is DivideAction {
  return action.type === DIVIDE_ACTION;
}

export type CreateDivideAction = (value: number) => DivideAction;

export const createDivideAction: CreateDivideAction = (value) => {
  return {
    type: DIVIDE_ACTION,
    payload: {
      value,
    },
  };
};

export type ClearAction = Action<typeof CLEAR_ACTION>;

export function isClearAction(action: AnyAction): action is ClearAction {
  return action.type === CLEAR_ACTION;
}

export type CreateClearAction = () => ClearAction;

export const createClearAction: CreateClearAction = () => {
  return {
    type: CLEAR_ACTION,
  };
};

export interface DeleteEntryAction extends Action<typeof DELETE_ENTRY_ACTION> {
  payload: {
    entryId: number;
  };
}

export function isDeleteEntryAction(
  action: AnyAction
): action is DeleteEntryAction {
  return action.type === DELETE_ENTRY_ACTION;
}

export type CreateDeleteEntryAction = (entryId: number) => DeleteEntryAction;

export const createDeleteEntryAction: CreateDeleteEntryAction = (entryId) => {
  return {
    type: DELETE_ENTRY_ACTION,
    payload: {
      entryId,
    },
  };
};

export type OpActions =
  | AddAction
  | SubtractAction
  | MultiplyAction
  | DivideAction;

export function isOpAction(action: AnyAction): action is OpActions {
  return [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(
    action.type
  );
}

export type CalcActions =
  | AddAction
  | SubtractAction
  | MultiplyAction
  | DivideAction
  | ClearAction
  | DeleteEntryAction
  | RefreshHistoryDoneAction;
