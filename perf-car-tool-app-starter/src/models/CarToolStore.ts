import { Car } from './Car';
import { CarsSort } from './CarsSort';
import { CarFormData } from './CarFormData';
import { ConfirmDeleteCarMessage } from './ConfirmDeleteCarMessage';

export type CarToolState = {
  sortedCars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  confirmDeleteCarMessage: ConfirmDeleteCarMessage;
};

export type CarToolActions = {
  addCar: (carForm: CarFormData) => void;
  saveCar: (car: Car) => void;
  confirmDeleteCar: (carId: number) => void;
  deleteCar: (carId: number) => void;
  editCar: (carId: number) => void;
  cancelCar: () => void;
  sortCars: (col: keyof Car) => void;
  cancelConfirmDeleteCar: () => void;
};

export type CarToolStore = CarToolState & CarToolActions;
