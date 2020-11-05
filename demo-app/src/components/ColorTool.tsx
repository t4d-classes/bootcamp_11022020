import React from "react";

import { ToolHeader } from "./ToolHeader";
import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";
import { useColorStoreContext } from "../contexts/colorStoreContext";

import "./ColorTool.css";

export type ColorToolProps = {
  headerText?: string;
};

export function ColorTool({ headerText }: ColorToolProps) {
  const { colors, addColor, deleteColor } = useColorStoreContext();

  return (
    <div className="color-tool">
      <ToolHeader headerText={headerText} />
      <ColorList colors={colors} onDeleteColor={deleteColor} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </div>
  );
}

ColorTool.defaultProps = {
  headerText: "Color Tool",
};
