import { useCallback, useEffect, useRef, useState } from "react";
import { TInterval } from "src/types/types";

export const useInterval = (STEP: number, initialValue = 0) => {
  const [time, setTime] = useState(initialValue);
  const interval = useRef<TInterval>(null);

  const startInterval = useCallback(() => {
    interval.current = setInterval(() => {
      setTime((p) => p + STEP);
    }, STEP);
  }, [STEP]);

  const stopInterval = useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  }, []);

  useEffect(() => {
    return () => stopInterval();
  }, [stopInterval]);

  return { time, setTime, startInterval, stopInterval };
};
