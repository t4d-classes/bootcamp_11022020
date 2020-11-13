import React from 'react';
import { Grid } from '@material-ui/core';

import { CarToolStore } from '../models/CarToolStore';
import { CarToolLayout } from './CarToolLayout';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { CarAddButton } from './buttons';
import { useStyles } from './CarTool.styles';
import { ConfirmDeleteCarDialog } from './ConfirmDeleteCarDialog';

export type CarToolProps = CarToolStore;

export function CarTool(props: CarToolProps) {
  const classes = useStyles();

  const {
    sortedCars,
    editCarId,
    carsSort,
    confirmDeleteCarMessage,
    addCar,
    saveCar,
    confirmDeleteCar,
    cancelConfirmDeleteCar,
    deleteCar,
    sortCars,
    editCar,
    cancelCar,
  } = props;

  return (
    <>
      <CarToolLayout>
        <Grid container>
          <Grid item xs={8} className={classes.block}>
            <CarTable
              cars={sortedCars}
              carsSort={carsSort}
              editCarId={editCarId}
              onEditCar={editCar}
              onDeleteCar={confirmDeleteCar}
              onSaveCar={saveCar}
              onCancelCar={cancelCar}
              onSortCars={sortCars}
            />
          </Grid>
          <Grid item xs={4} className={classes.block}>
            <CarForm submitButton={CarAddButton} onSubmitCar={addCar} />
          </Grid>
        </Grid>
      </CarToolLayout>
      {confirmDeleteCarMessage.carId > 0 && (
        <ConfirmDeleteCarDialog
          message={confirmDeleteCarMessage.message}
          carId={confirmDeleteCarMessage.carId}
          onCancel={cancelConfirmDeleteCar}
          onOk={deleteCar}
        />
      )}
    </>
  );
}
