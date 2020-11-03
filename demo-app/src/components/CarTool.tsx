import React from "react";

import { Car } from "../models/cars";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";

export type CarToolProps = {
  cars: Car[];
};

export function CarTool({ cars }: CarToolProps) {
  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} />
    </>
  );
}
