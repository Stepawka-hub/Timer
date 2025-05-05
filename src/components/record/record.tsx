import { FC, memo } from "react";
import { RecordProps } from "./type";
import s from "./record.module.css";
import { getFormattedTime } from '@utils/time';

export const Record: FC<RecordProps> = memo(({ position, time }) => {
  const formattedPosition = position.toString().padStart(2, "0");
  const formattedTime = getFormattedTime(time);
  
  return <article className={s.record}>
    <span>{formattedPosition}</span>
    <span>{formattedTime}</span>
  </article>;
});
