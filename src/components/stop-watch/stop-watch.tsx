import { STEP } from "@utils/constants";
import { getFormattedTime } from "@utils/time";
import { FC, useCallback, useState } from "react";
import s from "./stop-watch.module.css";
import { useInterval } from "@hooks/useInterval";

export const StopWatch: FC = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const { time, setTime, startInterval, stopInterval } = useInterval(STEP);
  const formattedTime = getFormattedTime(time);

  const startStopWatch = useCallback(() => {
    setIsStart(true);
    startInterval();
  }, [startInterval]);

  const pauseStopWatch = useCallback(() => {
    if (isPause) {
      setIsPause(false);
      startInterval();
    } else {
      setIsPause(true);
      stopInterval();
    }
  }, [isPause, stopInterval, startInterval]);

  const stopStopWatch = useCallback(() => {
    setIsPause(false);
    setIsStart(false);
    setTime(0);
    stopInterval();
  }, [setTime, stopInterval]);

  return (
    <>
      <div
        className={s.stopWatch}
        onClick={isStart ? pauseStopWatch : startStopWatch}
      >
        <span className={s.time}>{formattedTime}</span>
        {isPause && <span>Пауза</span>}
      </div>
      <div className={s.buttons}>
        <button className={s.button}>Записать</button>
        <button className={s.button} onClick={stopStopWatch}>
          Сбросить
        </button>
      </div>
    </>
  );
};
