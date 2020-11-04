import React, { useState } from "react";

import { Car, NewCar } from "../models/cars";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

import { useList } from "../hooks/useList";

export type CarToolProps = {
  cars: Car[];
};

export function CarTool({ cars: initialCars }: CarToolProps) {
  const [cars, appendCar, replaceCar, removeCar] = useList([...initialCars]);
  const [editCarId, setEditCarId] = useState(-1);

  const addCar = (newCar: NewCar) => {
    appendCar(newCar);
    setEditCarId(-1);
  };

  const saveCar = (car: Car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const editCar = (carId: number) => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

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
