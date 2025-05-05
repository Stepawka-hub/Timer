import { formatTimeHHMMSS } from '@utils/time';
import { FC, memo } from "react";
import s from "./record.module.css";
import { RecordProps } from "./type";

export const Record: FC<RecordProps> = memo(({ position, time }) => {
  const formattedPosition = position.toString().padStart(2, "0");
  const formattedTime = formatTimeHHMMSS(time);
  
  return <article className={s.record}>
    <span className={s.text}>{formattedPosition}</span>
    <span className={s.text}>{formattedTime}</span>
  </article>;
});
