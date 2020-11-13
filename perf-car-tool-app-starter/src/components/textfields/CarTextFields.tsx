import React from 'react';

import { FormControlChange } from '../../models/FormControls';
import { BaseRequiredTextField, BaseTextFieldProps } from './baseTextFields';

export type CarTextFieldProps = {
  value: string;
  onChange: FormControlChange;
} & BaseTextFieldProps;

export function CarMakeField(props: CarTextFieldProps) {
  return <BaseRequiredTextField label="Make" name="make" {...props} />;
}

export function CarModelField(props: CarTextFieldProps) {
  return <BaseRequiredTextField label="Model" name="model" {...props} />;
}
