import { useActions } from "@hooks/useActions";

import {
  getIsPausedSelector,
  getIsStartedSelector,
  getTimeSelector,
} from "@slices/timer";
import { useSelector } from "@store";
import { getFormattedTime } from "@utils/time";
import { FC, useCallback, useEffect } from "react";
import clsx from "clsx";
import s from "./timer.module.css";
import { TimerSetup } from "@components/timer-setup";

export const Timer: FC = () => {
  const time = useSelector(getTimeSelector);
  const isStarted = useSelector(getIsStartedSelector);
  const isPaused = useSelector(getIsPausedSelector);

  const { timerStart, timerSetPause, timerReset, setTheme } = useActions();
  const formattedTime = getFormattedTime(time);

  const start = useCallback(() => {
    timerStart();
  }, [timerStart]);

  const togglePause = useCallback(() => {
    if (isPaused) {
      timerSetPause(false);
      setTheme("default");
    } else {
      timerSetPause(true);
      setTheme("paused");
    }
  }, [isPaused, timerSetPause, setTheme]);

  const reset = useCallback(() => {
    timerReset();
    setTheme("default");
  }, [timerReset, setTheme]);

  useEffect(() => {
    if (isPaused) {
      setTheme("paused");
    }
  }, []);

  return (
    <div className={s.container}>
      {!isStarted ? (
        <TimerSetup />
      ) : (
        <div
          className={s.timer}
          onClick={isStarted ? togglePause : start}
          tabIndex={0}
        >
          <span className={s.time}>{formattedTime}</span>
        </div>
      )}

      <div className={clsx(s.controls, { [s.active]: isStarted })}>
        <div className={s.buttons}>
          {!isStarted ? (
            <button className={s.button} onClick={start}>
              Запустить
            </button>
          ) : (
            <button className={s.button} onClick={reset}>
              Перезапустить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
