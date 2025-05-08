import { useActions } from "@hooks/useActions";
import { getTargetTimeSelector } from "@slices/timer";
import { useSelector } from "@store";
import { getTimeParts } from "@utils/time";
import { ChangeEvent, FC, memo, useState } from "react";
import s from "./timer-setup.module.css";

export const TimerSetup: FC = memo(() => {
  const targetTime = useSelector(getTargetTimeSelector);
  const { minutes, seconds } = getTimeParts(targetTime);
  const { setTargetTime } = useActions();
  const [initTime, setInitTime] = useState(targetTime);

  const handleAddTime = (ms: number) => () => setInitTime((t) => t + ms);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInitTime(Number(e.target.value));
  };

  const handleStart = () => {
    setTargetTime(initTime);
  };

  return (
    <div className={s.form}>
      <div>
        <input
          className={s.input}
          type="numeric"
          value={initTime}
          placeholder="00:00:00"
          onChange={handleInputChange}
        />
      </div>
      <div className={s.inputBtns}>
        <button className={s.inputBtn} onClick={handleAddTime(30 * 1000)}>
          + 0:30
        </button>
        <button className={s.inputBtn} onClick={handleAddTime(60 * 1000)}>
          + 1:00
        </button>
        <button className={s.inputBtn} onClick={handleAddTime(5 * 60 * 1000)}>
          + 5:00
        </button>
      </div>
    </div>
  );
});
