import React from "react";

import { Color } from "../models/colors";

import "./ColorTool.css";

export type ColorToolProps = {
  colors: Color[];
  headerText?: string;
};

export function ColorTool({ headerText, colors }: ColorToolProps) {
  // const headerText = props.headerText;
  // const colors = props.colors;
  // const { headerText, colors } = props;

  return (
    <div className="color-tool">
      <header>
        <h1>{headerText}</h1>
      </header>
      <ul>
        {colors.map((c) => (
          <li key={c.id}>
            {c.name} {c.hexcode}
          </li>
        ))}
      </ul>
    </div>
  );
}

ColorTool.defaultProps = {
  headerText: 'Color Tool'
};
