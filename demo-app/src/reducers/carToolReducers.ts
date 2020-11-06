import { Reducer, combineReducers } from "redux";

import { CarsSort, SortDir } from "../models/carStore";
import { Car } from "../models/cars";
import {
  CarActions,
  isAppendCarAction,
  isEditCarAction,
  isCancelCarAction,
  isRemoveCarAction,
  isReplaceCarAction,
  APPEND_CAR_ACTION,
  REPLACE_CAR_ACTION,
  REMOVE_CAR_ACTION,
  isSortCarsAction,
} from "../actions/carToolActions";

export const carsReducer: Reducer<Car[], CarActions> = (cars = [], action) => {
  switch (action.type) {
    case APPEND_CAR_ACTION:
      return [
        ...cars,
        {
          id: Math.max(...cars.map((c) => c.id), 0) + 1,
          ...action.payload.car,
        },
      ];
    case REPLACE_CAR_ACTION:
      const carIndex = cars.findIndex((c) => c.id === action.payload.car.id);
      const newCars = [...cars];
      newCars[carIndex] = action.payload.car;
      return newCars;
    case REMOVE_CAR_ACTION:
      return cars.filter((c) => c.id !== action.payload.carId);
    default:
      return cars;
  }
};

export const editCarIdReducer: Reducer<number, CarActions> = (
  editCarId = -1,
  action
) => {
  if (isEditCarAction(action)) {
    return action.payload.carId;
  }

  if (
    isCancelCarAction(action) ||
    isAppendCarAction(action) ||
    isReplaceCarAction(action) ||
    isRemoveCarAction(action)
  ) {
    return -1;
  }

  return editCarId;
};

// export const carToolReducer: Reducer<CarToolState, CarActions> = (
//   state = {} as CarToolState,
//   action
// ) => {
//   return {
//     ...state,
//     cars: carsReducer(state.cars, action),
//     editCarId: editCarIdReducer(state.editCarId, action),
//   };
// };

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
