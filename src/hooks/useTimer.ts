import { useSelector } from "@store";
import { useActions } from "./useActions";
import { getIsPausedSelector, getIsStartedSelector } from "@slices/timer";
import { useCallback, useEffect, useRef } from "react";
import { TTimeout } from "src/types";

export const useTimer = () => {
  const { timerTick } = useActions();
  const isStarted = useSelector(getIsStartedSelector);
  const isPaused = useSelector(getIsPausedSelector);
  const timeoutRef = useRef<TTimeout>(null);

  const startTimer = useCallback(() => {
    if (!isStarted || isPaused) return;

    timerTick();
    timeoutRef.current = setTimeout(startTimer, 100);
  }, [isStarted, isPaused, timerTick]);

  useEffect(() => {
    if (isStarted && !isPaused) {
      startTimer();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isStarted, isPaused, startTimer]);
};
