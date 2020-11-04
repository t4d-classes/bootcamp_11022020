import React from "react";

import { Car } from "../models/cars";

import "./CarViewRow.css";

export type CarViewRowProps = {
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
};

export function CarViewRow(props: CarViewRowProps) {
  const deleteCar = () => {
    props.onDeleteCar(props.car.id);
  };

  return (
    <tr>
      <td className="col-body">{props.car.id}</td>
      <td className="col-body">{props.car.make}</td>
      <td className="col-body">{props.car.model}</td>
      <td className="col-body">{props.car.year}</td>
      <td className="col-body">{props.car.color}</td>
      <td className="col-body">{props.car.price}</td>
      <td>
        <button type="button" onClick={() => props.onEditCar(props.car.id)}>
          Edit
        </button>
        <button type="button" onClick={deleteCar}>
          Delete
        </button>
      </td>
    </tr>
  );
}
