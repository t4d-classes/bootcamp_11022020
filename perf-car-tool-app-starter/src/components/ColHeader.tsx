import React from 'react';
import { TableCell, Box } from '@material-ui/core';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

import { CarsSort, SORT_ASC } from '../models/CarsSort';
import { CarKeys } from '../models/Car';
import { Typography } from '@material-ui/core';
import { useStyles } from './ColHeader.styles';

export type ColHeaderProps = {
  carsSort: CarsSort;
  col: CarKeys;
  caption: string;
  onClick: (col: CarKeys) => void;
};

export function ColHeader(props: ColHeaderProps) {
  const classes = useStyles();
  const { carsSort, col, caption, onClick } = props;

  return (
    <TableCell onClick={() => onClick(col)}>
      <Box className={classes.columnHeader}>
        <Typography>{caption}</Typography>
        {carsSort.col === col &&
          (carsSort.dir === SORT_ASC ? <ArrowDownward /> : <ArrowUpward />)}
      </Box>
    </TableCell>
  );
}
