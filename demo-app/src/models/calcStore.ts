export type HistoryEntry = {
  id: number;
  opName: string;
  opValue: number;
};

export type CalcToolState = {
  result: number;
  history: HistoryEntry[];
  errorMessage: string;
};
