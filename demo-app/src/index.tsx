import React from "react";
import { render } from "react-dom";

import { HelloWorld } from "./components/HelloWorld";

render(
  // React.createElement(HelloWorld),
  <HelloWorld />,
  // "#root" - CSS selector - used to find an element with an id of 'root'
  document.querySelector("#root")
);
