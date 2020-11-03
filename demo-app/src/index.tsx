import React from "react";
import { render } from "react-dom";

import { Color } from "./models/colors";
import { Car } from "./models/cars";

import { ColorTool } from "./components/ColorTool";
import { CarTool } from "./components/CarTool";

const colorList: Color[] = [
  { id: 1, name: "red", hexcode: "FF0000" },
  { id: 2, name: "blue", hexcode: "0000FF" },
  { id: 3, name: "white", hexcode: "FFFFFF" },
  { id: 4, name: "green", hexcode: "00FF00" },
  { id: 5, name: "brown", hexcode: "A52A2A" },
  { id: 6, name: "aqua", hexcode: "00FFFF" },
];

const carList: Car[] = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2019,
    color: "white",
    price: 45000,
  },
  {
    id: 2,
    make: "Tesla",
    model: "S",
    year: 2020,
    color: "red",
    price: 100000,
  },
];

render(
  <>
    {/* React.createElement(ColorTool, { colors: colorList, headerText: 'Color Tool }) */}
    <ColorTool colors={colorList} headerText="Color Tool" />
    <CarTool cars={carList} />
  </>,
  // "#root" - CSS selector - used to find an element with an id of 'root'
  document.querySelector("#root")
);
