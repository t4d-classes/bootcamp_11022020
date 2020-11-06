import React from "react";

import { Car, NewCar } from "../models/cars";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";
import { CarsSort } from "../models/carStore";

export type CarToolProps = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  onAddCar: (car: NewCar) => void;
  onSaveCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
  onSortCars: (sortCol: keyof Car) => void;
};

export function CarTool(props: CarToolProps) {
  const {
    cars,
    editCarId,
    carsSort,
    onAddCar: addCar,
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: editCar,
    onCancelCar: cancelCar,
    onSortCars: sortCars,
  } = props;

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        carsSort={carsSort}
        onDeleteCar={deleteCar}
        onEditCar={editCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar}
        onSortCars={sortCars}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}
