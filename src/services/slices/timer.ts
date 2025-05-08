import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTimerState } from "./types/types";
import { INTERVAL } from "@utils/constants";

const initialState: TTimerState = {
  time: 0,
  isStarted: false,
  isPaused: false,
  targetTime: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    timerStart: (state) => {
      state.isStarted = true;
      state.isPaused = false;
      state.targetTime = 3000;
      state.time = state.targetTime;
    },
    timerSetPause: (state, { payload }: PayloadAction<boolean>) => {
      state.isPaused = payload;
    },
    timerReset: (state) => {
      state.time = 0;
      state.isStarted = false;
      state.isPaused = false;
    },
    timerTick: (state) => {
      if (!state.isStarted || state.isPaused) return;

      if (state.time <= INTERVAL) {
        state.time = 0;
        state.isStarted = false;
        state.isPaused = false;
        return;
      }

      state.time -= INTERVAL;
    },
  },
  selectors: {
    getTimeSelector: (state) => state.time,
    getIsStartedSelector: (state) => state.isStarted,
    getIsPausedSelector: (state) => state.isPaused,
  },
});

export const reducer = timerSlice.reducer;
export const { actions } = timerSlice;
export const { getIsPausedSelector, getIsStartedSelector, getTimeSelector } =
  timerSlice.selectors;
