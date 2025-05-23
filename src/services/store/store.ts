import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook,
} from "react-redux";
import { reducer as stopWatchReducer } from "@slices/stop-watch";
import { reducer as timerReducer } from "@slices/timer";
import { reducer as appReducer } from "@slices/app";

const rootReducer = combineReducers({
  app: appReducer,
  stopWatch: stopWatchReducer,
  timer: timerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
