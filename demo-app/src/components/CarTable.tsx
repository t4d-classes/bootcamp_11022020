import React from "react";

import { Car } from "../models/cars";
import { CarEditRow } from "./CarEditRow";
import { CarViewRow } from "./CarViewRow";

import "./CarTable.css";

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
};

export function CarTable(props: CarTableProps) {
  return (
    <table id="car-table">
      <thead>
        <tr>
          <th className="col-header">Id</th>
          <th className="col-header">Make</th>
          <th className="col-header">Model</th>
          <th className="col-header">Year</th>
          <th className="col-header">Color</th>
          <th className="col-header">Price</th>
          <th className="col-header">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car) =>
          car.id === props.editCarId ? (
            <CarEditRow
              key={car.id}
              car={car}
              onSaveCar={props.onSaveCar}
              onCancelCar={props.onCancelCar}
            />
          ) : (
            <CarViewRow
              key={car.id}
              car={car}
              onEditCar={props.onEditCar}
              onDeleteCar={props.onDeleteCar}
            />
          )
        )}
      </tbody>
    </table>
  );
}

CarTable.defaultProps = {
  cars: [],
};
