import { TRecord } from "src/types";

export type TAppState = {
  theme: TTheme;
};

export type TBaseTimeState = {
  time: number;
  isStarted: boolean;
  isPaused: boolean;
};

export type TStopWatchState = TBaseTimeState & {
  records: TRecord[];
  maxRecords: number;
};

export type TTimerState = TBaseTimeState & {
  targetTime: number;
};

export type TTheme = "default" | "paused" | "finished";
