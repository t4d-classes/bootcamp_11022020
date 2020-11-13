import React from 'react';

import { FormControlChange } from '../../models/FormControls';
import { BaseTextFieldProps, BaseSelectTextField } from './baseTextFields';
import { SelectOption, selectOne } from './helpers';

export type CarDropDownTextFieldProps = {
  value: string;
  onChange: FormControlChange;
} & BaseTextFieldProps;

const colorOptions: SelectOption[] = selectOne([
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
]);

export function CarColorField(props: CarDropDownTextFieldProps) {
  return (
    <BaseSelectTextField
      label="Color"
      name="color"
      options={colorOptions}
      {...props}
    />
  );
}
