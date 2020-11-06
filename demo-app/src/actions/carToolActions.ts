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

export type CarActions = AppendCarAction | EditCarAction;
