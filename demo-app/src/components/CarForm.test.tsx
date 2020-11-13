import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';

import { NewCar, NewCarKeys } from '../models/car';
import { CarForm } from '../components/CarForm';

describe('CarViewRow testing library', () => {
  let car: NewCar;
  let textInputKeys: NewCarKeys[] = ['make', 'model', 'color'];
  let numberInputKeys: NewCarKeys[] = ['year', 'price'];
  let renderResult: RenderResult;
  let submitCarSpy: jest.Mock;

  beforeEach(() => {
    car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2020,
      color: 'red',
      price: 45000,
    };

    submitCarSpy = jest.fn();
  });

  beforeEach(() => {
    renderResult = render(
      <CarForm buttonText="Add Car" onSubmitCar={submitCarSpy} />,
    );
  });

  test('render CarViewRow component', () => {
    const { getAllByRole } = renderResult;

    const textboxInputs = getAllByRole('textbox');
    expect(textboxInputs.length).toBe(3);
    textboxInputs.forEach((input: HTMLElement, index: number) => {
      const evt = {
        target: {
          type: (input as HTMLInputElement).type,
          value: car[textInputKeys[index]],
          name: (input as HTMLInputElement).name,
        },
      };
      fireEvent.change(input, evt);
    });

    const spinbuttonInputs = getAllByRole('spinbutton');
    expect(spinbuttonInputs.length).toBe(2);
    spinbuttonInputs.forEach((input: HTMLElement, index: number) => {
      const evt = {
        target: {
          type: (input as HTMLInputElement).type,
          value: car[numberInputKeys[index]],
          name: (input as HTMLInputElement).name,
        },
      };
      fireEvent.change(input, evt);
    });

    const submitButton = renderResult.getByRole('button');

    fireEvent.click(submitButton);
    expect(submitCarSpy).toHaveBeenCalledWith(car);
  });
});
