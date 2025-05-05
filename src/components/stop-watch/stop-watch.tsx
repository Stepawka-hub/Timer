import { Circle } from "@components/circle";
import { useInterval } from "@hooks/useInterval";
import { STEP } from "@utils/constants";
import { getFormattedTime } from "@utils/time";
import { FC, useCallback, useState } from "react";
import s from "./stop-watch.module.css";
import { RecordsList } from "@components/records-list";
import { useRecords } from "@hooks/useRecords";

export const StopWatch: FC = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const { records, addRecord } = useRecords();

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
    <div className={s.container}>
      <div
        className={s.stopWatch}
        onClick={isStart ? pauseStopWatch : startStopWatch}
      >
        <span className={s.time}>{formattedTime}</span>
        {isStart && <Circle isPause={isPause} />}
      </div>

      <div className={s.controls}>
        <div className={s.buttons}>
          <button className={s.button} onClick={() => addRecord(time)}>
            Записать
          </button>
          <button className={s.button} onClick={stopStopWatch}>
            Сбросить
          </button>
        </div>
        <RecordsList records={records} />
      </div>
    </div>
  );
};
