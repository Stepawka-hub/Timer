import { FC, memo, useEffect, useRef } from "react";
import s from "./time-circle.module.css";
import { TimeCircleProps } from "./type";

export const TimeCircle: FC<TimeCircleProps> = memo(({ onClick, children }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && circleRef.current) {
        circleRef.current.blur();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div
      ref={circleRef}
      className={s.timeCircle}
      onClick={onClick}
      tabIndex={0}
    >
      {children}
    </div>
  );
});
