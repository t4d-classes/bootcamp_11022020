import React, { useState } from "react";

export type CalcToolProps = {
  result: number;
  onAdd: (value: number) => void;
  onSubtract: (value: number) => void;
};

export function CalcTool(props: CalcToolProps) {
  const [numInput, setNumInput] = useState(0);

  return (
    <form>
      <div>Result: {props.result}</div>
      <div>
        Num Input:
        <input
          type="number"
          value={numInput}
          onChange={(e) => setNumInput(Number(e.target.value))}
        />
      </div>
      <fieldset>
        <button type="button" onClick={() => props.onAdd(numInput)}>
          Add
        </button>
        <button type="button" onClick={() => props.onSubtract(numInput)}>
          Subtract
        </button>
      </fieldset>
    </form>
  );
}
