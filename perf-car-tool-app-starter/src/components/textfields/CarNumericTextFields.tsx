import React from 'react';

import { FormControlChange } from '../../models/FormControls';
import {
  BaseRequiredNumericTextField,
  BaseNumericTextFieldProps,
} from './baseTextFields';

export type CarNumericTextFieldProps = {
  value: number;
  onChange: FormControlChange;
} & BaseNumericTextFieldProps;

export function CarYearField(props: CarNumericTextFieldProps) {
  return <BaseRequiredNumericTextField label="Year" name="year" {...props} />;
}

export function CarPriceField(props: CarNumericTextFieldProps) {
  return <BaseRequiredNumericTextField name="price" label="Price" {...props} />;
}
