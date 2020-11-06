import React from "react";

import { Car, NewCar } from "../models/cars";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export type CarToolProps = {
  cars: Car[];
  editCarId: number;
  onAddCar: (car: NewCar) => void;
  onEditCar: (carId: number) => void;
};

export function CarTool(props: CarToolProps) {
  const { cars, editCarId, onAddCar: addCar, onEditCar: editCar } = props;

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onDeleteCar={() => null}
        onEditCar={editCar}
        onSaveCar={() => null}
        onCancelCar={() => null}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}
