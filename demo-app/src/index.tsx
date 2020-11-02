import React from "react";
import { render } from "react-dom";

import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

render(
  // React.createElement(ColorTool),
  <>
    <ColorTool />
    <CarTool />
  </>,
  // "#root" - CSS selector - used to find an element with an id of 'root'
  document.querySelector("#root")
);
