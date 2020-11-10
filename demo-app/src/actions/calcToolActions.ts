import { Action, AnyAction, Dispatch } from "redux";

import { HistoryEntry, DIVIDE } from "../models/calcStore";

export const REFRESH_HISTORY_REQUEST_ACTION = "REFRESH_HISTORY_REQUEST_ACTION";
export const REFRESH_HISTORY_DONE_ACTION = "REFRESH_HISTORY_DONE_ACTION";
export const APPEND_ENTRY_REQUEST_ACTION = "APPEND_ENTRY_REQUEST_ACTION";
export const APPEND_ENTRY_DONE_ACTION = "APPEND_ENTRY_DONE_ACTION";
export const DELETE_ENTRY_REQUEST_ACTION = "DELETE_ENTRY_REQUEST";
export const CLEAR_HISTORY_REQUEST_ACTION = "CLEAR_HISTORY_REQUEST_ACTION";
export const SET_ERROR_MESSAGE_ACTION = "SET_ERROR_MESSAGE_ACTION";

export interface SetErrorMessageAction
  extends Action<typeof SET_ERROR_MESSAGE_ACTION> {
  payload: {
    errorMessage: string;
  };
}

export function isSetErrorMessageAction(
  action: AnyAction
): action is SetErrorMessageAction {
  return action.type === SET_ERROR_MESSAGE_ACTION;
}

export type CreateSetErrorMessageAction = (
  errorMessage: string
) => SetErrorMessageAction;

export const createSetErrorMessageAction: CreateSetErrorMessageAction = (
  errorMessage
) => {
  return {
    type: SET_ERROR_MESSAGE_ACTION,
    payload: {
      errorMessage,
    },
  };
};

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
    if (opName === DIVIDE && opValue === 0) {
      dispatch(createSetErrorMessageAction("Divide by zero"));
      return;
    }

    dispatch(createAppendEntryRequestAction(opName, opValue));
    return fetch("http://localhost:3060/history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opName, opValue }),
    }).then(() => {
      const fn = refreshHistory();
      fn(dispatch);
    });
  };
};

export type ClearHistoryRequestAction = Action<
  typeof CLEAR_HISTORY_REQUEST_ACTION
>;

export function isClearHistoryRequestAction(
  action: AnyAction
): action is ClearHistoryRequestAction {
  return action.type === CLEAR_HISTORY_REQUEST_ACTION;
}

export type CreateClearHistoryRequestAction = () => ClearHistoryRequestAction;

export const createClearHistoryRequestAction: CreateClearHistoryRequestAction = () => {
  return {
    type: CLEAR_HISTORY_REQUEST_ACTION,
  };
};

export const clearHistory = () => {
  return (dispatch: Dispatch) => {
    dispatch(createClearHistoryRequestAction());
    return fetch("http://localhost:3060/history")
      .then((res) => res.json())
      .then((history) => {
        return Promise.all(
          history.map((h: HistoryEntry) => {
            return fetch("http://localhost:3060/history/" + h.id, {
              method: "DELETE",
            });
          })
        );
      })
      .then(() => dispatch(createRefreshHistoryDoneAction([])));
  };
};

export interface DeleteEntryRequestAction
  extends Action<typeof DELETE_ENTRY_REQUEST_ACTION> {
  payload: {
    entryId: number;
  };
}

export function isDeleteEntryRequestAction(
  action: AnyAction
): action is DeleteEntryRequestAction {
  return action.type === DELETE_ENTRY_REQUEST_ACTION;
}

export type CreateDeleteEntryRequestAction = (
  entryId: number
) => DeleteEntryRequestAction;

export const createDeleteEntryRequestAction: CreateDeleteEntryRequestAction = (
  entryId
) => {
  return {
    type: DELETE_ENTRY_REQUEST_ACTION,
    payload: {
      entryId,
    },
  };
};

export const deleteEntry = (entryId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(createDeleteEntryRequestAction(entryId));
    return fetch("http://localhost:3060/history/" + entryId, {
      method: "DELETE",
    }).then(() => {
      return refreshHistory()(dispatch);
    });
  };
};

export type CalcActions = RefreshHistoryDoneAction | SetErrorMessageAction;
