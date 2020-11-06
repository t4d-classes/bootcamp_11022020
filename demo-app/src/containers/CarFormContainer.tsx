import React from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { createAppendCarAction } from "../actions/carToolActions";
import { CarForm } from "../components/CarForm";

export function CarFormContainer() {
  const boundActionProps = bindActionCreators(
    {
      onSubmitCar: createAppendCarAction,
    },
    useDispatch()
  );

  return <CarForm buttonText="Add Car" {...boundActionProps} />;
}
