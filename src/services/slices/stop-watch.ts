import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStopWatchState } from "./types/types";

const initialState: TStopWatchState = {
  time: 0,
  isStarted: false,
  isPaused: false,
  records: [],
  maxRecords: 15,
};

const stopWatchSlice = createSlice({
  name: "stopWatch",
  initialState,
  reducers: {
    start: (state) => {
      state.isStarted = true;
      state.isPaused = false;
    },
    setPause: (state, { payload }: PayloadAction<boolean>) => {
      state.isPaused = payload;
    },
    reset: (state) => {
      state.time = 0;
      state.isStarted = false;
      state.isPaused = false;
      state.records = [];
    },
    tick: (state) => {
      if (state.isStarted && !state.isPaused) {
        state.time += 100;
      }
    },
    addRecord: (state) => {
      const { records, time, maxRecords } = state;

      // Если массив достиг максимума - убираем первый элемент
      const updatedRecords = [...records].slice(-maxRecords + 1);

      const length = updatedRecords.length;
      const diff = updatedRecords[length - 1]
        ? time - updatedRecords[length - 1].time
        : 0;
      const newRecord = { time, diff, position: length + 1 };

      state.records = [...updatedRecords, newRecord].map((e, i) => ({
        ...e,
        position: i + 1,
      }));
    },
  },
  selectors: {
    getTimeSelector: (state) => state.time,
    getIsStartedSelector: (state) => state.isStarted,
    getIsPausedSelector: (state) => state.isPaused,
    getRecordsSelector: (state) => state.records,
  },
});

export const reducer = stopWatchSlice.reducer;
export const { actions } = stopWatchSlice;
export const {
  getIsPausedSelector,
  getRecordsSelector,
  getIsStartedSelector,
  getTimeSelector,
} = stopWatchSlice.selectors;
