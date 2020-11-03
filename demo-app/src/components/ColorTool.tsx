import React, { useState } from "react";

import { Color, NewColor } from "../models/colors";
import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

import "./ColorTool.css";

export type ColorToolProps = {
  colors: Color[];
  headerText?: string;
};

export function ColorTool({
  headerText,
  colors: initialColors,
}: ColorToolProps) {
  const [colors, setColors] = useState([...initialColors]);

  const addColor = (newColor: NewColor) => {
    setColors([
      ...colors,
      {
        ...newColor,
        id: Math.max(...colors.map((c) => c.id), 0) + 1,
      },
    ]);
  };

  return (
    <div className="color-tool">
      <ToolHeader headerText={headerText} />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </div>
  );
}

ColorTool.defaultProps = {
  headerText: "Color Tool",
};
