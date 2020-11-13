import React from "react";
import { render } from "@testing-library/react";

import { Car } from "../models/cars";
import { CarsSort } from "../models/carStore";
import { CarTable } from "./CarTable";

jest.mock("./CarViewRow");
jest.mock("./CarEditRow");

describe("CarTable render", () => {
  let cars: Car[];
  let carsSort: CarsSort;

  beforeEach(() => {
    carsSort = {
      sortCol: "id",
      sortDir: "asc",
    };
    cars = [
      {
        id: 1,
        make: "Ford",
        model: "Fusion Hybrid",
        year: 2020,
        color: "blue",
        price: 45000,
      },
      {
        id: 2,
        make: "Tesla",
        model: "S",
        year: 2019,
        color: "red",
        price: 120000,
      },
    ];
  });

  test("render", () => {
    const { debug } = render(
      <CarTable
        cars={cars}
        editCarId={-1}
        carsSort={carsSort}
        onEditCar={() => null}
        onDeleteCar={() => null}
        onSaveCar={() => null}
        onCancelCar={() => null}
        onSortCars={() => null}
      />
    );

    debug();
  });
});
