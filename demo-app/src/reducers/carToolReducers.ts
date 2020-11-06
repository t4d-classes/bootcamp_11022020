import { Reducer, combineReducers } from "redux";

import { Car } from "../models/cars";
import { CarToolState } from "../models/carStore";
import {
  CarActions,
  isAppendCarAction,
  isEditCarAction,
} from "../actions/carToolActions";

export const carsReducer: Reducer<Car[], CarActions> = (cars = [], action) => {
  let newCars = cars;

  if (isAppendCarAction(action)) {
    newCars = [
      ...newCars,
      {
        id: Math.max(...newCars.map((c) => c.id), 0) + 1,
        ...action.payload.car,
      },
    ];
  }

  return newCars;
};

export const editCarIdReducer: Reducer<number, CarActions> = (
  editCarId = -1,
  action
) => {
  if (isEditCarAction(action)) {
    return action.payload.carId;
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

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});
