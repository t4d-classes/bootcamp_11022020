import React from 'react';
import { TextField } from '@material-ui/core';

import { getErrorProps, nanToString, SelectOption } from './helpers';

export type BaseTextFieldProps = {
  errorMessage?: string;
  [propName: string]: any;
};

export function BaseTextField({ errorMessage, ...props }: BaseTextFieldProps) {
  return (
    <TextField
      variant="outlined"
      size="small"
      {...getErrorProps(errorMessage)}
      {...props}
    ></TextField>
  );
}

export function BaseRequiredTextField(props: BaseTextFieldProps) {
  return <BaseTextField required {...props} />;
}

export type BaseNumericTextFieldProps = {
  value: number;
} & BaseTextFieldProps;

export function BaseNumericTextField({
  value,
  ...props
}: BaseNumericTextFieldProps) {
  return <BaseTextField value={nanToString(value)} {...props} />;
}

export function BaseRequiredNumericTextField(props: BaseNumericTextFieldProps) {
  return <BaseNumericTextField required {...props} />;
}

export type BaseSelectTextFieldProps = {
  options: SelectOption[];
} & BaseTextFieldProps;

export function BaseSelectTextField({
  errorMessage,
  options,
  ...props
}: BaseSelectTextFieldProps) {
  return (
    <BaseTextField select {...getErrorProps(errorMessage)} {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </BaseTextField>
  );
}
