import React from "react";

import { Color } from "../models/colors";

import "./ColorTool.css";

export function ColorTool() {
  const colors: Color[] = [
    { id: 1, name: "red", hexcode: "FF0000" },
    { id: 2, name: "blue", hexcode: "0000FF" },
    { id: 3, name: "white", hexcode: "FFFFFF" },
    { id: 4, name: "green", hexcode: "00FF00" },
    { id: 5, name: "brown", hexcode: "A52A2A" },
    { id: 6, name: "aqua", hexcode: "00FFFF" },
  ];

  const colorListItems = colors.map((c) => (
    <li key={c.id}>
      {c.name} {c.hexcode}
    </li>
  ));

  return (
    <div className="color-tool">
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>{colorListItems}</ul>
    </div>
  );
}
