import { Circle } from "@components/circle";
import { RecordsList } from "@components/records-list";
import { useActions } from "@hooks/useActions";

import {
  getIsPausedSelector,
  getIsStartedSelector,
  getTimeSelector,
} from "@slices/stop-watch";
import { useSelector } from "@store";
import { getFormattedTime } from "@utils/time";
import clsx from "clsx";
import { FC, useCallback, useEffect } from "react";
import s from "./stop-watch.module.css";

export const StopWatch: FC = () => {
  const isStarted = useSelector(getIsStartedSelector);
  const isPaused = useSelector(getIsPausedSelector);
  const time = useSelector(getTimeSelector);

  const {
    stopWatchStart,
    stopWatchSetPause,
    stopWatchReset,
    addRecord,
    setTheme,
  } = useActions();
  const formattedTime = getFormattedTime(time);

  const startStopWatch = useCallback(() => {
    stopWatchStart();
  }, [stopWatchStart]);

  const togglePause = useCallback(() => {
    if (isPaused) {
      stopWatchSetPause(false);
      setTheme("default");
    } else {
      stopWatchSetPause(true);
      setTheme("stopwatch-stop");
    }
  }, [isPaused, stopWatchSetPause, setTheme]);

  const resetStopWatch = useCallback(() => {
    stopWatchReset();
    setTheme("default");
  }, [stopWatchReset, setTheme]);

  useEffect(() => {
    if (isPaused) {
      setTheme("stopwatch-stop");
    }
  }, []);

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
