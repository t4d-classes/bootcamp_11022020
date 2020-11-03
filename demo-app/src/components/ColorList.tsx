import React from "react";

import { Color } from "../models/colors";

export type ColorListProps = {
  colors: Color[];
};

export function ColorList({ colors }: ColorListProps) {
  return (
    <ul>
      {colors.map((c) => (
        <li key={c.id}>
          {c.name} {c.hexcode}
        </li>
      ))}
    </ul>
  );
}

ColorList.defaultProps = {
  colors: [],
};
