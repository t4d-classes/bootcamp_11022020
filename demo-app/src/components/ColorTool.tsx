import React from "react";

import { Color } from "../models/colors";
import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";

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
      <ToolHeader headerText={headerText} />
      <ColorList colors={colors} />
    </div>
  );
}

ColorTool.defaultProps = {
  headerText: "Color Tool",
};
