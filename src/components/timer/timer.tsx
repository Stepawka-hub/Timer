import { useActions } from "@hooks/useActions";

import { TimerSetup } from "@components/timer-setup";
import { useThemeControl } from "@hooks/useThemeControl";
import {
  getIsFinishedSelector,
  getIsPausedSelector,
  getIsStartedSelector,
  getTimeSelector,
} from "@slices/timer";
import { useSelector } from "@store";
import { getFormattedTime } from "@utils/time";
import clsx from "clsx";
import { FC, useCallback } from "react";
import s from "./timer.module.css";

export const Timer: FC = () => {
  const time = useSelector(getTimeSelector);
  const isStarted = useSelector(getIsStartedSelector);
  const isPaused = useSelector(getIsPausedSelector);
  const isFinished = useSelector(getIsFinishedSelector);

  const { timerStart, timerSetPause, timerReset } = useActions();
  const formattedTime = getFormattedTime(time);

  useThemeControl(isPaused, isFinished);

  const start = useCallback(() => {
    timerStart();
  }, [timerStart]);

  const togglePause = useCallback(() => {
    timerSetPause(!isPaused);
  }, [isPaused, timerSetPause]);

  const reset = useCallback(() => {
    timerReset();
  }, [timerReset]);

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
