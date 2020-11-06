import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAppendCarAction,
  createReplaceCarAction,
  createRemoveCarAction,
  createEditCarAction,
  createCancelCarAction,
} from "../actions/carToolActions";
import { CarTool } from "../components/CarTool";
import { CarToolState } from "../models/carStore";

export function CarToolContainer() {
  const stateProps = useSelector((state: CarToolState) => {
    return {
      cars: state.cars,
      editCarId: state.editCarId,
    };
  });

  const boundActionProps = bindActionCreators(
    {
      onAddCar: createAppendCarAction,
      onSaveCar: createReplaceCarAction,
      onDeleteCar: createRemoveCarAction,
      onEditCar: createEditCarAction,
      onCancelCar: createCancelCarAction,
    },
    useDispatch()
  );

  return <CarTool {...stateProps} {...boundActionProps} />;
}
