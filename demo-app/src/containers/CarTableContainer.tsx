import React, { useEffect, useMemo } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  replaceCar,
  removeCar,
  createEditCarAction,
  createCancelCarAction,
  createSortCarsAction,
  refreshCars,
} from "../actions/carToolActions";
import { CarTable } from "../components/CarTable";
import { CarToolState } from "../models/carStore";

export function CarTableContainer() {
  const stateProps = useSelector((state: CarToolState) => {
    return {
      unsortedCars: state.cars,
      editCarId: state.editCarId,
      carsSort: state.carsSort,
    };
  });

  const { sortCol, sortDir } = stateProps.carsSort;
  const { unsortedCars } = stateProps;

  const sortedCars = useMemo(
    () =>
      [...unsortedCars].sort((a, b) => {
        if (a[sortCol] < b[sortCol]) {
          return sortDir === "asc" ? -1 : 1;
        } else if (a[sortCol] > b[sortCol]) {
          return sortDir === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      }),
    [unsortedCars, sortCol, sortDir]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    refreshCars()(dispatch);
  }, [dispatch]);

  const boundActionProps = useMemo(
    () =>
      bindActionCreators(
        {
          onSaveCar: replaceCar,
          onDeleteCar: removeCar,
          onEditCar: createEditCarAction,
          onCancelCar: createCancelCarAction,
          onSortCars: createSortCarsAction,
        },
        dispatch
      ),
    [dispatch]
  );

  return <CarTable {...stateProps} cars={sortedCars} {...boundActionProps} />;
}
