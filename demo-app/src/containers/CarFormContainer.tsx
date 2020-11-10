import React, { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { appendCar } from "../actions/carToolActions";
import { CarForm } from "../components/CarForm";

export function CarFormContainer() {
  const dispatch = useDispatch();

  const boundActionProps = useMemo(
    () =>
      bindActionCreators(
        {
          onSubmitCar: appendCar,
        },
        dispatch
      ),
    [dispatch]
  );

  return <CarForm buttonText="Add Car" {...boundActionProps} />;
}
