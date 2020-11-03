import React from "react";

import { Car } from "../models/cars";

import "./CarViewRow.css";

export type CarViewRowProps = {
  car: Car;
};

export function CarViewRow(props: CarViewRowProps) {
  return (
    <tr>
      <td className="col-body">{props.car.id}</td>
      <td className="col-body">{props.car.make}</td>
      <td className="col-body">{props.car.model}</td>
      <td className="col-body">{props.car.year}</td>
      <td className="col-body">{props.car.color}</td>
      <td className="col-body">{props.car.price}</td>
    </tr>
  );
}
