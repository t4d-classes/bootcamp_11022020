import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { Car } from "../models/cars";
import {
  createAppendCarAction,
  createReplaceCarAction,
  createRemoveCarAction,
  createEditCarAction,
  createCancelCarAction,
} from "../actions/carToolActions";
import { CarTool } from "../components/CarTool";
import { CarToolState } from "../models/carStore";

// type CarKeys = "make" | "model" | "year" | "color" | "price";
type CarKeys = keyof Car;

export function CarToolContainer() {
  const stateProps = useSelector((state: CarToolState) => {
    let sortCol: CarKeys;

    sortCol = "make";

    const sortedCars = [...state.cars].sort((a, b) => {
      if (a[sortCol] < b[sortCol]) {
        return -1;
      } else if (a[sortCol] > b[sortCol]) {
        return 1;
      } else {
        return 0;
      }
    });

    return {
      cars: sortedCars,
      editCarId: state.editCarId,
    };
  });

  const boundActionProps = bindActionCreators(
    {
      onAddCar: createAppendCarAction,
      onSaveCar: createReplaceCarAction,
      onDeleteCar: createRemoveCarAction,
      onEditCar: createEditCarAction,
      onCancelCar: createCancelCarAction,
    },
    useDispatch()
  );

  return <CarTool {...stateProps} {...boundActionProps} />;
}
