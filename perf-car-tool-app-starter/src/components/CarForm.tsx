import React, { memo } from 'react';
import { Box, Typography } from '@material-ui/core';

import { CarFormData } from '../models/CarFormData';
import { useForm } from '../hooks/useForm';
import { useStyles } from '../components/CarForm.styles';
import { ClickableComponent } from '../models/ClickableComponent';
import {
  CarMakeField,
  CarModelField,
  CarYearField,
  CarColorField,
  CarPriceField,
} from './textfields';

export type CarFormProps = {
  submitButton: ClickableComponent;
  onSubmitCar: (carForm: CarFormData) => void;
  headerText: string;
};

function BaseCarForm({
  headerText,
  submitButton: SubmitButton,
  onSubmitCar,
}: CarFormProps) {
  const classes = useStyles();

  const [carForm, change, resetCarForm] = useForm(new CarFormData());

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    resetCarForm();
  };

  return (
    <Box>
      <header>
        <Typography variant="h2">{headerText}</Typography>
      </header>
      <form noValidate autoComplete="off" className={classes.form}>
        <div className={classes.formRow}>
          <CarMakeField
            value={carForm.make}
            onChange={change}
            className={classes.formControl}
          />
        </div>
        <div className={classes.formRow}>
          <CarModelField
            value={carForm.model}
            onChange={change}
            className={classes.formControl}
          />
        </div>
        <div className={classes.formRow}>
          <CarYearField
            value={carForm.year}
            onChange={change}
            className={classes.formControl}
          />
        </div>
        <div className={classes.formRow}>
          <CarColorField
            value={carForm.color}
            onChange={change}
            className={classes.formControl}
          />
        </div>
        <div className={classes.formRow}>
          <CarPriceField
            value={carForm.price}
            onChange={change}
            className={classes.formControl}
          />
        </div>
        <div className={classes.formRow}>
          <SubmitButton onClick={submitCar} />
        </div>
      </form>
    </Box>
  );
}

BaseCarForm.defaultProps = {
  headerText: 'Car Form',
};

export const CarForm = memo(BaseCarForm);
