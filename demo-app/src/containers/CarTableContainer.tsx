import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createReplaceCarAction,
  createRemoveCarAction,
  createEditCarAction,
  createCancelCarAction,
  createSortCarsAction,
} from "../actions/carToolActions";
import { CarTable } from "../components/CarTable";
import { CarToolState } from "../models/carStore";

export function CarTableContainer() {
  const stateProps = useSelector((state: CarToolState) => {
    const { sortCol, sortDir } = state.carsSort;

    const sortedCars = [...state.cars].sort((a, b) => {
      if (a[sortCol] < b[sortCol]) {
        return sortDir === "asc" ? -1 : 1;
      } else if (a[sortCol] > b[sortCol]) {
        return sortDir === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });

    return {
      cars: sortedCars,
      editCarId: state.editCarId,
      carsSort: state.carsSort,
    };
  });

  const boundActionProps = bindActionCreators(
    {
      onSaveCar: createReplaceCarAction,
      onDeleteCar: createRemoveCarAction,
      onEditCar: createEditCarAction,
      onCancelCar: createCancelCarAction,
      onSortCars: createSortCarsAction,
    },
    useDispatch()
  );

  return <CarTable {...stateProps} {...boundActionProps} />;
}
