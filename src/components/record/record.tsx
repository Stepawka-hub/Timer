import { formatTimeHHMMSS } from '@utils/time';
import { FC, memo } from "react";
import s from "./record.module.css";
import { RecordProps } from "./type";

export const Record: FC<RecordProps> = memo(({ position, diff, time }) => {
  const formattedPosition = position.toString().padStart(2, "0");
  const formattedTime = formatTimeHHMMSS(time);
  const formattedDiff = formatTimeHHMMSS(diff);
  
  return <article className={s.record}>
    <span className={s.position}>{formattedPosition}</span>
    <span className={s.diff}>+ {formattedDiff}</span>
    <span className={s.time}>{formattedTime}</span>
  </article>;
});
