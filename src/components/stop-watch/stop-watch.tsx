import { Circle } from "@components/circle";
import { RecordsList } from "@components/records-list";
import { useActions } from "@hooks/useActions";

import { useThemeControl } from '@hooks/useThemeControl';
import {
  getIsPausedSelector,
  getIsStartedSelector,
  getTimeSelector,
} from "@slices/stop-watch";
import { useSelector } from "@store";
import { getFormattedTime } from "@utils/time";
import clsx from "clsx";
import { FC, useCallback } from "react";
import s from "./stop-watch.module.css";

export const StopWatch: FC = () => {
  const isStarted = useSelector(getIsStartedSelector);
  const isPaused = useSelector(getIsPausedSelector);
  const time = useSelector(getTimeSelector);

  const { stopWatchStart, stopWatchSetPause, stopWatchReset, addRecord } =
    useActions();
  const formattedTime = getFormattedTime(time);
  
  useThemeControl(isPaused);

  const startStopWatch = useCallback(() => {
    stopWatchStart();
  }, [stopWatchStart]);

  const togglePause = useCallback(() => {
    stopWatchSetPause(!isPaused);
  }, [isPaused, stopWatchSetPause]);

  const resetStopWatch = useCallback(() => {
    stopWatchReset();
  }, [stopWatchReset]);

  return (
    <div className={s.container}>
      <div
        className={s.stopWatch}
        onClick={isStarted ? togglePause : startStopWatch}
        tabIndex={0}
      >
        <span className={s.time}>{formattedTime}</span>
        {isStarted && <Circle isPause={isPaused} />}
      </div>

      <div className={clsx(s.controls, { [s.active]: isStarted })}>
        <div className={s.buttons}>
          <button
            className={s.button}
            disabled={!isStarted}
            onClick={() => addRecord()}
          >
            Записать
          </button>
          <button
            className={s.button}
            disabled={!isStarted}
            onClick={resetStopWatch}
          >
            Сбросить
          </button>
        </div>
        <RecordsList />
      </div>
    </div>
  );
};
