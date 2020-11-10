import React, { useState, useEffect } from "react";
import { refreshHistory } from "../actions/calcToolActions";
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
  onAppendEntry: (opName: string, opValue: number) => void;
  onRefreshHistory: () => void;
};

export function CalcTool(props: CalcToolProps) {
  const [numInput, setNumInput] = useState(0);

  const refreshHistory = props.onRefreshHistory;

  useEffect(() => {
    refreshHistory();
  }, [refreshHistory]);

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
          <button
            type="button"
            onClick={() => props.onAppendEntry("ADD", numInput)}
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => props.onAppendEntry("SUBTRACT", numInput)}
          >
            Subtract
          </button>
          <button
            type="button"
            onClick={() => props.onAppendEntry("MULTIPLY", numInput)}
          >
            Multiply
          </button>
          <button
            type="button"
            onClick={() => props.onAppendEntry("DIVIDE", numInput)}
          >
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
