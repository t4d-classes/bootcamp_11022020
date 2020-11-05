import React from "react";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

import { useCarStoreContext } from "../contexts/carStoreContext";

export function CarTool() {
  const {
    cars,
    editCarId,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
  } = useCarStoreContext();

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onDeleteCar={deleteCar}
        onEditCar={editCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}
