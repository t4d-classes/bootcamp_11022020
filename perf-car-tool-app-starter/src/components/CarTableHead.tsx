import React, { memo } from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

import { Car, CarKeys } from '../models/Car';
import { CarsSort } from '../models/CarsSort';

import { ColHeader } from './ColHeader';

export type CarTableHeadProps = {
  carsSort: CarsSort;
  onSortCars: (col: keyof Car) => void;
};

type ColHeaders = { id: number; col: CarKeys; caption: string }[];

const colHeaders: ColHeaders = [
  { id: 1, col: 'id', caption: 'Id' },
  { id: 2, col: 'make', caption: 'Make' },
  { id: 3, col: 'model', caption: 'Model' },
  { id: 4, col: 'year', caption: 'Year' },
  { id: 5, col: 'color', caption: 'Color' },
  { id: 6, col: 'price', caption: 'Price' },
];

export const CarTableHead = memo((props: CarTableHeadProps) => {
  return (
    <TableHead>
      <TableRow>
        {colHeaders.map((colHeader) => (
          <ColHeader
            key={colHeader.id}
            carsSort={props.carsSort}
            col={colHeader.col}
            caption={colHeader.caption}
            onClick={props.onSortCars}
          />
        ))}
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
});
