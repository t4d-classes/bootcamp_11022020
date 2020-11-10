export type HistoryEntry = {
  id: number;
  opName: string;
  opValue: number;
};

export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";

export type CalcToolState = {
  // result: number;
  history: HistoryEntry[];
  errorMessage: string;
};
