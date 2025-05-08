import { FC } from "react";
import s from "./time-circle.module.css";
import { TimeCircleProps } from "./type";

export const TimeCircle: FC<TimeCircleProps> = ({ onClick, children }) => {
  return (
    <div className={s.timeCircle} onClick={onClick} tabIndex={0}>
      {children}
    </div>
  );
};
