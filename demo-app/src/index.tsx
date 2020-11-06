import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { CarTool } from "./components/CarTool";
import { carToolStore } from "./stores/carToolStore";

render(
  <>
    <Provider store={carToolStore}>
      <CarTool />
    </Provider>
  </>,
  document.querySelector("#root")
);
