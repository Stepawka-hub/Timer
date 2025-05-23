import { useActions } from "@hooks/useActions";

import { TimeCircle } from "@components/time-circle";
import { TimerSetup } from "@components/timer-setup";
import { useThemeControl } from "@hooks/useThemeControl";
import {
  getIsFinishedSelector,
  getIsPausedSelector,
  getIsStartedSelector,
  getTimeSelector,
} from "@slices/timer";
import { useSelector } from "@store";
import { formatTimeHHMMSS } from "@utils/time";
import { FC, useCallback, useMemo } from "react";
import clsx from "clsx";
import s from "./timer.module.css";
import { SoundSelect } from "@components/sound-select";

export const Timer: FC = () => {
  const time = useSelector(getTimeSelector);
  const isStarted = useSelector(getIsStartedSelector);
  const isPaused = useSelector(getIsPausedSelector);
  const isFinished = useSelector(getIsFinishedSelector);

  const { timerStart, timerSetPause, timerReset } = useActions();

  const seconds = Math.floor(time / 1000);
  const formattedTime = useMemo(() => formatTimeHHMMSS(seconds), [seconds]);

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

  const children = useMemo(
    () => <span className={s.time}>{formattedTime}</span>,
    [formattedTime]
  );

  return (
    <div className={s.container}>
      {!isStarted ? (
        <TimerSetup />
      ) : (
        <TimeCircle onClick={isFinished ? reset : togglePause}>
          {children}
        </TimeCircle>
      )}

      <div className={clsx(s.controls)}>
        {!isStarted ? (
          <div className={s.options}>
            <button className={s.button} onClick={start}>
              Запустить
            </button>
            <SoundSelect />
          </div>
        ) : (
          <button className={s.button} onClick={reset}>
            Перезапустить
          </button>
        )}
      </div>
    </div>
  );
};
