import { TRecord } from 'src/types';

export type TStopWatchState = {
  time: number;
  isStarted: boolean;
  isPaused: boolean;
  records: TRecord[];
  maxRecords: number;
};