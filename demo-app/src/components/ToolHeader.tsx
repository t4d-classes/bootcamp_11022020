import React from "react";

import "./ToolHeader.css";

export type ToolHeaderProps = {
  headerText?: string;
};

export function ToolHeader(props: ToolHeaderProps) {
  return (
    <header className="tool-header">
      <h1>{props.headerText}</h1>
    </header>
  );
}

ToolHeader.defaultProps = {
  headerText: "The Tool",
};
