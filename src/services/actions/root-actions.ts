import { actions as stopWatchActions } from "@slices/stop-watch";
import { actions as appActions } from "@slices/app";

export const rootActions = {
  ...stopWatchActions,
  ...appActions,
};
