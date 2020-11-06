import { Car } from "./cars";

export type SortDir = 'asc' | 'desc';

export type CarsSort = {
  sortCol: keyof Car;
  sortDir: SortDir;
};

export type CarToolState = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
};
