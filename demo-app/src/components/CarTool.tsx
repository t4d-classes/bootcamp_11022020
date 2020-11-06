import React from "react";

import { Car, NewCar } from "../models/cars";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export type CarToolProps = {
  cars: Car[];
  editCarId: number;
  onAddCar: (car: NewCar) => void;
  onSaveCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
};

export function CarTool(props: CarToolProps) {
  const {
    cars,
    editCarId,
    onAddCar: addCar,
    onSaveCar: saveCar,
    onDeleteCar: deleteCar,
    onEditCar: editCar,
    onCancelCar: cancelCar,
  } = props;

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onDeleteCar={deleteCar}
        onEditCar={editCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}
