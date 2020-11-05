import React from "react";
import { render } from "react-dom";

import { ColorTool } from "./components/ColorTool";
import { ColorStoreProvider } from "./contexts/colorStoreContext";
import { CarTool } from "./components/CarTool";
import { CarStoreProvider } from "./contexts/carStoreContext";

render(
  <>
    <ColorStoreProvider>
      <ColorTool headerText="Color Tool" />
    </ColorStoreProvider>
    <CarStoreProvider>
      <CarTool />
    </CarStoreProvider>
  </>,
  document.querySelector("#root")
);
