import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { CarToolContainer } from "./containers/CarToolContainer";
import { carToolStore } from "./stores/carToolStore";

render(
  <>
    <Provider store={carToolStore}>
      <CarToolContainer />
    </Provider>
  </>,
  document.querySelector("#root")
);
