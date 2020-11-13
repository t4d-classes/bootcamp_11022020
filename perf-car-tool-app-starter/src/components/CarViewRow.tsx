import React, { memo } from 'react';
import { TableRow, TableCell, Typography } from '@material-ui/core';

import { Car } from '../models/Car';
import { CarEditButton, CarDeleteButton } from './buttons';

export type CarViewRowProps = {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
};

export const CarViewRow = memo(function CarViewRow({
  car,
  onEditCar,
  onDeleteCar,
}: CarViewRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Typography>{car.id}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{car.make}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{car.model}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{car.year}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{car.color}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{car.price}</Typography>
      </TableCell>
      <TableCell>
        <CarEditButton onClick={() => onEditCar(car.id)} />
        <CarDeleteButton onClick={() => onDeleteCar(car.id)} />
      </TableCell>
    </TableRow>
  );
});
