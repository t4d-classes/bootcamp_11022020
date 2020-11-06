import React from "react";

import { Car } from "../models/cars";
import { CarEditRow } from "./CarEditRow";
import { CarViewRow } from "./CarViewRow";

import "./CarTable.css";
import { CarsSort } from "../models/carStore";

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
  onSortCars: (car: keyof Car) => void;
};

const sortArrow = (carsSort: CarsSort, sortCol: keyof Car) => {
  return (
    carsSort.sortCol === sortCol && (carsSort.sortDir === "asc" ? "v" : "^")
  );
};

export function CarTable(props: CarTableProps) {
  return (
    <table id="car-table">
      <thead>
        <tr>
          <th className="col-header">
            <button type="button" onClick={() => props.onSortCars("id")}>
              Id {sortArrow(props.carsSort, "id")}
            </button>
          </th>
          <th className="col-header">
            <button type="button" onClick={() => props.onSortCars("make")}>
              Make {sortArrow(props.carsSort, "make")}
            </button>
          </th>
          <th className="col-header">
            <button type="button" onClick={() => props.onSortCars("model")}>
              Model {sortArrow(props.carsSort, "model")}
            </button>
          </th>
          <th className="col-header">
            <button type="button" onClick={() => props.onSortCars("year")}>
              Year {sortArrow(props.carsSort, "year")}
            </button>
          </th>
          <th className="col-header">
            <button type="button" onClick={() => props.onSortCars("color")}>
              Color {sortArrow(props.carsSort, "color")}
            </button>
          </th>
          <th className="col-header">
            <button type="button" onClick={() => props.onSortCars("price")}>
              Price {sortArrow(props.carsSort, "price")}
            </button>
          </th>
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
