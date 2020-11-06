import { Action, AnyAction } from "redux";

import { Car, NewCar } from "../models/cars";

export const APPEND_CAR_ACTION = "APPEND_CAR";
export const REPLACE_CAR_ACTION = "REPLACE_CAR";
export const REMOVE_CAR_ACTION = "REMOVE_CAR";
export const EDIT_CAR_ACTION = "EDIT_CAR";
export const CANCEL_CAR_ACTION = "CANCEL_CAR";

export interface AppendCarAction extends Action<typeof APPEND_CAR_ACTION> {
  payload: {
    car: NewCar;
  };
}

export function isAppendCarAction(
  action: AnyAction
): action is AppendCarAction {
  return action.type === APPEND_CAR_ACTION;
}

export type CreateAppendCarAction = (car: NewCar) => AppendCarAction;

export const createAppendCarAction: CreateAppendCarAction = (car: NewCar) => {
  return {
    type: APPEND_CAR_ACTION,
    payload: {
      car,
    },
  };
};

export interface ReplaceCarAction extends Action<typeof REPLACE_CAR_ACTION> {
  payload: {
    car: Car;
  };
}

export function isReplaceCarAction(
  action: AnyAction
): action is ReplaceCarAction {
  return action.type === REPLACE_CAR_ACTION;
}

export type CreateReplaceCarAction = (car: Car) => ReplaceCarAction;

export const createReplaceCarAction: CreateReplaceCarAction = (car: Car) => {
  return {
    type: REPLACE_CAR_ACTION,
    payload: {
      car,
    },
  };
};

export interface RemoveCarAction extends Action<typeof REMOVE_CAR_ACTION> {
  payload: {
    carId: number;
  };
}

export function isRemoveCarAction(
  action: AnyAction
): action is RemoveCarAction {
  return action.type === REMOVE_CAR_ACTION;
}

export type CreateRemoveCarAction = (carId: number) => RemoveCarAction;

export const createRemoveCarAction: CreateRemoveCarAction = (carId: number) => {
  return {
    type: REMOVE_CAR_ACTION,
    payload: {
      carId,
    },
  };
};

export interface EditCarAction extends Action<typeof EDIT_CAR_ACTION> {
  payload: {
    carId: number;
  };
}

export function isEditCarAction(action: AnyAction): action is EditCarAction {
  return action.type === EDIT_CAR_ACTION;
}

export type CreateEditCarAction = (carId: number) => EditCarAction;

export const createEditCarAction: CreateEditCarAction = (carId: number) => {
  return {
    type: EDIT_CAR_ACTION,
    payload: {
      carId,
    },
  };
};

export type CancelCarAction = Action<typeof CANCEL_CAR_ACTION>;

export function isCancelCarAction(
  action: AnyAction
): action is CancelCarAction {
  return action.type === CANCEL_CAR_ACTION;
}

export type CreateCancelCarAction = () => CancelCarAction;

export const createCancelCarAction: CreateCancelCarAction = () => {
  return {
    type: CANCEL_CAR_ACTION,
  };
};

export type CarActions =
  | AppendCarAction
  | ReplaceCarAction
  | RemoveCarAction
  | EditCarAction
  | CancelCarAction;
