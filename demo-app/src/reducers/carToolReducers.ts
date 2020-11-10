import { Reducer, combineReducers } from "redux";

import { CarsSort } from "../models/carStore";
import { Car } from "../models/cars";
import {
  CarActions,
  isEditCarAction,
  isCancelCarAction,
  isSortCarsAction,
  isRefreshCarsDoneAction,
} from "../actions/carToolActions";

export const carsReducer: Reducer<Car[], CarActions> = (cars = [], action) => {
  if (isRefreshCarsDoneAction(action)) {
    return action.payload.cars;
  }

  return cars;
};

export const editCarIdReducer: Reducer<number, CarActions> = (
  editCarId = -1,
  action
) => {
  if (isEditCarAction(action)) {
    return action.payload.carId;
  }

  if (isCancelCarAction(action) || isRefreshCarsDoneAction(action)) {
    return -1;
  }

  return editCarId;
};

export const carsSortReducer: Reducer<CarsSort, CarActions> = (
  carsSort = { sortCol: "id", sortDir: "asc" },
  action
) => {
  if (isSortCarsAction(action)) {
    if (
      carsSort.sortCol === action.payload.sortCol &&
      carsSort.sortDir === "asc"
    ) {
      return {
        sortCol: action.payload.sortCol,
        sortDir: "desc",
      };
    } else {
      return {
        sortCol: action.payload.sortCol,
        sortDir: "asc",
      };
    }
  }

  return carsSort;
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
});
