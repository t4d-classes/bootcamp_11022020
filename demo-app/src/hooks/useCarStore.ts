import { useState } from "react";

import { Car, NewCar } from "../models/cars";
import { useList } from "../hooks/useList";

export type CarStoreState = {
  cars: Car[];
  editCarId: number;
};

export type CarStoreActions = {
  addCar: (car: NewCar) => void;
  saveCar: (car: Car) => void;
  deleteCar: (carId: number) => void;
  editCar: (carId: number) => void;
  cancelCar: () => void;
};

export type CarStore = CarStoreState & CarStoreActions;

export const useCarStore = (initialCars: Car[]) => {
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

  return {
    cars,
    editCarId,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
  };
};
