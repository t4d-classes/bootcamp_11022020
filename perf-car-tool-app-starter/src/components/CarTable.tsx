import React from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  Typography,
} from '@material-ui/core';

import { Car, CarKeys } from '../models/Car';
import { CarsSort } from '../models/CarsSort';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';
import { CarTableHead } from './CarTableHead';

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
  onSortCars: (col: keyof Car) => void;
};

type ColHeaders = { id: number; col: CarKeys; caption: string }[];

export function CarTable({
  cars,
  editCarId,
  carsSort,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
  onSortCars: sortCars,
}: CarTableProps) {
  return (
    <TableContainer>
      <header>
        <Typography variant="h2">Car Table</Typography>
      </header>
      <Table>
        <CarTableHead carsSort={carsSort} onSortCars={sortCars} />
        <TableBody>
          {cars.map((car) =>
            car.id === editCarId ? (
              <CarEditRow
                key={car.id}
                car={car}
                onSaveCar={saveCar}
                onCancelCar={cancelCar}
              />
            ) : (
              <CarViewRow
                key={car.id}
                car={car}
                onEditCar={editCar}
                onDeleteCar={deleteCar}
              />
            ),
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
