import { Action, AnyAction, Dispatch } from "redux";

import { Car, NewCar } from "../models/cars";

export const REFRESH_CARS_REQUEST_ACTION = "REFRESH_CARS_REQUEST";
export const REFRESH_CARS_DONE_ACTION = "REFRESH_CARS_DONE";
export const APPEND_CAR_REQUEST_ACTION = "APPEND_CAR_REQUEST";
export const REPLACE_CAR_REQUEST_ACTION = "REPLACE_CAR_REQUEST";
export const REMOVE_CAR_REQUEST_ACTION = "REMOVE_CAR_REQUEST";
export const EDIT_CAR_ACTION = "EDIT_CAR";
export const CANCEL_CAR_ACTION = "CANCEL_CAR";
export const SORT_CARS_ACTION = "SORT_CARS";

export type RefreshCarsRequestAction = Action<
  typeof REFRESH_CARS_REQUEST_ACTION
>;

export function isRefreshCarsRequestAction(
  action: AnyAction
): action is RefreshCarsRequestAction {
  return action.type === REFRESH_CARS_REQUEST_ACTION;
}

export type CreateRefreshCarsRequestAction = () => RefreshCarsRequestAction;

export const createRefreshCarsRequestAction: CreateRefreshCarsRequestAction = () => {
  return {
    type: REFRESH_CARS_REQUEST_ACTION,
  };
};

export interface RefreshCarsDoneAction
  extends Action<typeof REFRESH_CARS_DONE_ACTION> {
  payload: {
    cars: Car[];
  };
}

export function isRefreshCarsDoneAction(
  action: AnyAction
): action is RefreshCarsDoneAction {
  return action.type === REFRESH_CARS_DONE_ACTION;
}

export type CreateRefreshCarsDoneAction = (
  cars: Car[]
) => RefreshCarsDoneAction;

export const createRefreshCarsDoneAction: CreateRefreshCarsDoneAction = (
  cars
) => {
  return {
    type: REFRESH_CARS_DONE_ACTION,
    payload: {
      cars,
    },
  };
};

export const refreshCars = () => {
  return (dispatch: Dispatch) => {
    dispatch(createRefreshCarsRequestAction());
    return fetch("http://localhost:3060/cars")
      .then((res) => res.json())
      .then((cars) => dispatch(createRefreshCarsDoneAction(cars)));
  };
};

export interface AppendCarRequestAction
  extends Action<typeof APPEND_CAR_REQUEST_ACTION> {
  payload: {
    car: NewCar;
  };
}

export function isAppendCarRequestAction(
  action: AnyAction
): action is AppendCarRequestAction {
  return action.type === APPEND_CAR_REQUEST_ACTION;
}

export type CreateAppendCarRequestAction = (
  car: NewCar
) => AppendCarRequestAction;

export const createAppendCarRequestAction: CreateAppendCarRequestAction = (
  car: NewCar
) => {
  return {
    type: APPEND_CAR_REQUEST_ACTION,
    payload: {
      car,
    },
  };
};

export const appendCar = (car: NewCar) => {
  return (dispatch: Dispatch) => {
    dispatch(createAppendCarRequestAction(car));
    return fetch("http://localhost:3060/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    }).then(() => {
      refreshCars()(dispatch);
    });
  };
};

export interface ReplaceCarRequestAction
  extends Action<typeof REPLACE_CAR_REQUEST_ACTION> {
  payload: {
    car: Car;
  };
}

export function isReplaceCarRequestAction(
  action: AnyAction
): action is ReplaceCarRequestAction {
  return action.type === REPLACE_CAR_REQUEST_ACTION;
}

export type CreateReplaceCarRequestAction = (
  car: Car
) => ReplaceCarRequestAction;

export const createReplaceCarRequestAction: CreateReplaceCarRequestAction = (
  car
) => {
  return {
    type: REPLACE_CAR_REQUEST_ACTION,
    payload: {
      car,
    },
  };
};

export const replaceCar = (car: Car) => {
  return (dispatch: Dispatch) => {
    dispatch(createReplaceCarRequestAction(car));
    return fetch("http://localhost:3060/cars/" + encodeURIComponent(car.id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    }).then(() => {
      refreshCars()(dispatch);
    });
  };
};

export interface RemoveCarRequestAction
  extends Action<typeof REMOVE_CAR_REQUEST_ACTION> {
  payload: {
    carId: number;
  };
}

export function isRemoveCarRequestAction(
  action: AnyAction
): action is RemoveCarRequestAction {
  return action.type === REMOVE_CAR_REQUEST_ACTION;
}

export type CreateRemoveCarRequestAction = (
  carId: number
) => RemoveCarRequestAction;

export const createRemoveCarRequestAction: CreateRemoveCarRequestAction = (
  carId
) => {
  return {
    type: REMOVE_CAR_REQUEST_ACTION,
    payload: {
      carId,
    },
  };
};

export const removeCar = (carId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(createRemoveCarRequestAction(carId));
    return fetch("http://localhost:3060/cars/" + encodeURIComponent(carId), {
      method: "DELETE",
    }).then(() => {
      refreshCars()(dispatch);
    });
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

export interface SortCarsAction extends Action<typeof SORT_CARS_ACTION> {
  payload: {
    sortCol: keyof Car;
  };
}

export function isSortCarsAction(action: AnyAction): action is SortCarsAction {
  return action.type === SORT_CARS_ACTION;
}

export type CreateSortCarsAction = (sortCol: keyof Car) => SortCarsAction;

export const createSortCarsAction: CreateSortCarsAction = (
  sortCol: keyof Car
) => {
  return {
    type: SORT_CARS_ACTION,
    payload: {
      sortCol,
    },
  };
};

export type CarActions =
  | RefreshCarsRequestAction
  | RefreshCarsDoneAction
  | AppendCarRequestAction
  | ReplaceCarRequestAction
  | RemoveCarRequestAction
  | EditCarAction
  | CancelCarAction
  | SortCarsAction;
