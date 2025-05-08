import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAppState, TTheme } from "./types/types";

const initialState: TAppState = {
  theme: "default",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<TTheme>) => {
      state.theme = payload;
    },
  },
  selectors: {
    getThemeSelector: (state) => state.theme,
  },
});

export const reducer = appSlice.reducer;
export const { actions } = appSlice;
export const { getThemeSelector } = appSlice.selectors;
