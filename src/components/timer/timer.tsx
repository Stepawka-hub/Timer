import { Circle } from "@components/circle";
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
      setTheme("stopwatch-stop");
    }
  }, [isPaused, timerSetPause, setTheme]);

  const reset = useCallback(() => {
    timerReset();
    setTheme("default");
  }, [timerReset, setTheme]);

  useEffect(() => {
    if (isPaused) {
      setTheme("stopwatch-stop");
    }
  }, []);

  return (
    <div className={s.container}>
      <div
        className={s.timer}
        onClick={isStarted ? togglePause : start}
        tabIndex={0}
      >
        <span className={s.time}>{formattedTime}</span>
        {isStarted && <Circle isPause={isPaused} />}
      </div>

      <div className={clsx(s.controls, { [s.active]: isStarted })}>
        <div className={s.buttons}>
          <button className={s.button} disabled={!isStarted} onClick={reset}>
            Перезапустить
          </button>
        </div>
      </div>
    </div>
  );
};
