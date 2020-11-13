import { ReactNode } from 'react';
import { isNil } from 'lodash';

export type ErrorProps = {
  error: boolean;
  helperText: string;
};

export type SelectOption = {
  value: string | number;
  label: string | number | ReactNode;
};

export function getErrorProps(errorMessage?: string): ErrorProps {
  let errorProps = {} as ErrorProps;

  if (!isNil(errorMessage)) {
    errorProps = {
      error: true,
      helperText: errorMessage,
    };
  }

  return errorProps;
}

export function nanToString(value: number) {
  return isNaN(value) ? '' : String(value);
}

export function selectOne(options: SelectOption[]) {
  return [{ value: -1, label: 'Select One...' }, ...options];
}
