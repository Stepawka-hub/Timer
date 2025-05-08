import { FC, memo, useEffect, useRef } from "react";
import { CircleProps } from "./type";
import s from "./circle.module.css";

export const Circle: FC<CircleProps> = memo(({ isPause }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circleElement = circleRef.current;
    if (!circleElement) return;

    circleElement.style.animationPlayState = isPause ? "paused" : "running";
  }, [isPause]);

  return <div className={s.circle} ref={circleRef}></div>;
});
