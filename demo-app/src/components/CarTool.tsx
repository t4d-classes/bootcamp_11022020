import React from "react";

import { ToolHeader } from "./ToolHeader";
import { CarTableContainer } from "../containers/CarTableContainer";
import { CarFormContainer } from "../containers/CarFormContainer";

export function CarTool() {
  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTableContainer />
      <CarFormContainer />
    </>
  );
}
