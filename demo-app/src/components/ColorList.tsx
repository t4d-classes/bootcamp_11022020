import React from "react";

import { Color } from "../models/colors";

export type ColorListProps = {
  colors: Color[];
  onDeleteColor: (colorId: number) => void;
};

export function ColorList({ colors, onDeleteColor }: ColorListProps) {
  return (
    <ul>
      {colors.map((c) => (
        <li key={c.id}>
          {c.name} {c.hexcode}
          <button type="button" onClick={() => onDeleteColor(c.id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

ColorList.defaultProps = {
  colors: [],
};
