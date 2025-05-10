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
  isFinished: boolean;
  targetTime: number;
  sound: TSound | null;
};

export type TSound = {
  id: number;
  name: string;
  link: string;
};

export type TTheme = "default" | "paused" | "finished";
