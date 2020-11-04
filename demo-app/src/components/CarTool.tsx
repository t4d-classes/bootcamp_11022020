import React, { useState } from "react";

import { Car, NewCar } from "../models/cars";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export type CarToolProps = {
  cars: Car[];
};

export function CarTool({ cars: initialCars }: CarToolProps) {
  const [cars, setCars] = useState([...initialCars]);
  const [editCarId, setEditCarId] = useState(-1);

  const addCar = (newCar: NewCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map((c) => c.id), 0) + 1,
      },
    ]);
    setEditCarId(-1);
  };

  const saveCar = (car: Car) => {
    const carIndex = cars.findIndex((c) => c.id === car.id);
    const newCars = [...cars];
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const deleteCar = (carId: number) => {
    setCars(cars.filter((c) => c.id !== carId));
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
