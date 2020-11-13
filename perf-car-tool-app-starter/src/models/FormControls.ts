import { ChangeEvent } from 'react';

export type FormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export function isInputControl(control: FormControls): control is HTMLInputElement {
  return control instanceof HTMLInputElement;
}

export function isSelectControl(control: FormControls): control is HTMLSelectElement {
  return control instanceof HTMLSelectElement;
}

export function isTextAreaControl(control: FormControls): control is HTMLSelectElement {
  return control instanceof HTMLTextAreaElement;
}

export type FormControlChangeEvent = ChangeEvent<FormControls>;

export type FormControlChange = (e: FormControlChangeEvent) => void;

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export type SelectChangeEvent = ChangeEvent<HTMLSelectElement>;

export type TextAreaChangeEvent = ChangeEvent<HTMLTextAreaElement>;
