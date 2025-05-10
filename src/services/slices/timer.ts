import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSound, TTimerState } from "./types/types";
import { INTERVAL } from "@utils/constants";
import { defaultSound } from "@utils/sounds";

const initialState: TTimerState = {
  time: 0,
  isStarted: false,
  isPaused: false,
  isFinished: false,
  targetTime: 0,
  sound: defaultSound,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    timerStart: (state) => {
      state.isStarted = true;
      state.isPaused = false;
      state.isFinished = false;
      state.time = state.targetTime;
    },
    timerSetPause: (state, { payload }: PayloadAction<boolean>) => {
      state.isPaused = payload;
    },
    timerReset: (state) => {
      state.time = 0;
      state.isStarted = false;
      state.isPaused = false;
      state.isFinished = false;
    },
    timerTick: (state) => {
      if (!state.isStarted || state.isPaused) return;

      if (state.time <= INTERVAL) {
        state.time = 0;
        state.isPaused = false;
        state.isFinished = true;
      } else {
        state.time -= INTERVAL;
      }
    },
    setTargetTime: (state, { payload }: PayloadAction<number>) => {
      state.targetTime = payload;
    },
    addTargetTime: (state, { payload }: PayloadAction<number>) => {
      state.targetTime += payload;
    },
    setTimerSound: (state, { payload }: PayloadAction<TSound | null>) => {
      state.sound = payload;
    },
  },
  selectors: {
    getTimeSelector: (state) => state.time,
    getTargetTimeSelector: (state) => state.targetTime,
    getIsStartedSelector: (state) => state.isStarted,
    getIsPausedSelector: (state) => state.isPaused,
    getIsFinishedSelector: (state) => state.isFinished,
    getTimerSoundSelector: (state) => state.sound,
  },
});

export const reducer = timerSlice.reducer;
export const { actions } = timerSlice;
export const {
  getIsPausedSelector,
  getIsStartedSelector,
  getTimeSelector,
  getTargetTimeSelector,
  getIsFinishedSelector,
  getTimerSoundSelector,
} = timerSlice.selectors;
