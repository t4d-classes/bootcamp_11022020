import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

import { Car } from '../models/Car';
import { useForm } from '../hooks/useForm';
import {
  CarMakeField,
  CarModelField,
  CarYearField,
  CarColorField,
  CarPriceField,
} from './textfields';
import { CarSaveButton, CarCancelButton } from './buttons';
import { toCarFormData } from '../models/CarFormData';

export type CarEditRowProps = {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
};

export function CarEditRow({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}: CarEditRowProps) {
  const [carForm, change] = useForm(toCarFormData(car));

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };

  const extraProps = {
    label: 'Required',
  };

  return (
    <TableRow>
      <TableCell>{car.id}</TableCell>
      <TableCell>
        <CarMakeField value={carForm.make} onChange={change} {...extraProps} />
      </TableCell>
      <TableCell>
        <CarModelField
          {...extraProps}
          value={carForm.model}
          onChange={change}
        />
      </TableCell>
      <TableCell>
        <CarYearField value={carForm.year} onChange={change} {...extraProps} />
      </TableCell>
      <TableCell>
        <CarColorField
          value={carForm.color}
          onChange={change}
          {...extraProps}
        />
      </TableCell>
      <TableCell>
        <CarPriceField
          value={carForm.price}
          onChange={change}
          {...extraProps}
        />
      </TableCell>
      <TableCell>
        <CarSaveButton onClick={saveCar} />
        <CarCancelButton onClick={cancelCar} />
      </TableCell>
    </TableRow>
  );
}
