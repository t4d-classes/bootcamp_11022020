import React from "react";

import { Color } from "../models/colors";

import "./ColorTool.css";

export type ColorToolProps = {
  colors: Color[];
  headerText: string;
};

export function ColorTool(props: ColorToolProps) {
  const colorListItems = props.colors.map((c) => (
    <li key={c.id}>
      {c.name} {c.hexcode}
    </li>
  ));

  return (
    <div className="color-tool">
      <header>
        <h1>{props.headerText}</h1>
      </header>
      <ul>{colorListItems}</ul>
    </div>
  );
}
