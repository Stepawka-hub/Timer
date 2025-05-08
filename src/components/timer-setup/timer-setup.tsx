import { useActions } from "@hooks/useActions";
import { useTimeInput } from "@hooks/useTimeInput";
import { getTargetTimeSelector } from "@slices/timer";
import { useSelector } from "@store";
import { convertTimeToMS, getTimeParts, toTimeString } from "@utils/time";
import { FC, memo, useEffect } from "react";
import s from "./timer-setup.module.css";

export const TimerSetup: FC = memo(() => {
  const targetTime = useSelector(getTargetTimeSelector);
  const { addTargetTime, setTargetTime } = useActions();

  const hoursInput = useTimeInput();
  const minutesInput = useTimeInput(59);
  const secondsInput = useTimeInput(59);

  const getCurrentTimeMs = () =>
    convertTimeToMS(
      parseInt(secondsInput.value, 10),
      parseInt(minutesInput.value, 10),
      parseInt(hoursInput.value, 10)
    );

  const handleBlur = () => {
    hoursInput.handleBlur();
    minutesInput.handleBlur();
    secondsInput.handleBlur();

    const ms = getCurrentTimeMs();
    setTargetTime(ms);
  };

  const handleAddTime = (ms: number) => () => addTargetTime(ms);

  useEffect(() => {
    const { hours, minutes, seconds } = getTimeParts(targetTime);
    hoursInput.setValue(toTimeString(hours));
    minutesInput.setValue(toTimeString(minutes));
    secondsInput.setValue(toTimeString(Math.round(seconds)));
  }, [targetTime]);

  return (
    <div className={s.container}>
      <div className={s.inputs}>
        <input
          className={s.input}
          id="hours"
          name="hours"
          type="numeric"
          placeholder="00"
          maxLength={2}
          value={hoursInput.value}
          onBlur={handleBlur}
          onChange={hoursInput.handleChange}
        />
        <span>:</span>
        <input
          className={s.input}
          id="minutes"
          name="minutes"
          type="numeric"
          placeholder="00"
          maxLength={2}
          value={minutesInput.value}
          onBlur={handleBlur}
          onChange={minutesInput.handleChange}
        />
        <span>:</span>
        <input
          className={s.input}
          id="seconds"
          name="seconds"
          type="numeric"
          placeholder="00"
          maxLength={2}
          value={secondsInput.value}
          onBlur={handleBlur}
          onChange={secondsInput.handleChange}
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
