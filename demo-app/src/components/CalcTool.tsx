import React, { useState } from "react";
import { HistoryEntry } from "../models/calcStore";

export type CalcToolProps = {
  result: number;
  history: HistoryEntry[];
  errorMessage: string;
  onAdd: (value: number) => void;
  onSubtract: (value: number) => void;
  onMultiply: (value: number) => void;
  onDivide: (value: number) => void;
  onClear: () => void;
  onDeleteEntry: (entryId: number) => void;
};

export function CalcTool(props: CalcToolProps) {
  const [numInput, setNumInput] = useState(0);

  const clear = () => {
    setNumInput(0);
    props.onClear();
  };

  return (
    <>
      {props.errorMessage && <div>{props.errorMessage}</div>}
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
          <button type="button" onClick={() => props.onMultiply(numInput)}>
            Multiply
          </button>
          <button type="button" onClick={() => props.onDivide(numInput)}>
            Divide
          </button>
          <button type="button" onClick={clear}>
            Clear
          </button>
        </fieldset>
      </form>
      <ul>
        {props.history.map((entry) => (
          <li key={entry.id}>
            {entry.opName} {entry.opValue}
            <button type="button" onClick={() => props.onDeleteEntry(entry.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
