import { actions as stopWatchActions } from "@slices/stop-watch";
import { actions as timerActions } from "@slices/timer";
import { actions as appActions } from "@slices/app";

export const rootActions = {
  ...stopWatchActions,
  ...timerActions,
  ...appActions,
};
