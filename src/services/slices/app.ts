import { createSlice } from "@reduxjs/toolkit";
import { TInitialAppState } from './types/types';

const initialState: TInitialAppState = {};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  selectors: {}
});

export const reducer = appSlice.reducer;