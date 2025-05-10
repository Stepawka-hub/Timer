import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useSelector } from "@store";
import { INTERVAL } from "@utils/constants";
import { useCallback, useEffect, useRef } from "react";
import { TSelector, TTimeout } from "src/types";

type TUseTimerArgs = {
  timerTick: ActionCreatorWithoutPayload<string>;
  getIsStarted: TSelector<boolean>;
  getIsPaused: TSelector<boolean>;
  getIsFinished?: TSelector<boolean>;
};

export const useTimer = ({
  timerTick,
  getIsStarted,
  getIsPaused,
  getIsFinished,
}: TUseTimerArgs) => {
  const isStarted = useSelector(getIsStarted);
  const isPaused = useSelector(getIsPaused);
  const isFinished = useSelector(getIsFinished || (() => false));
  const timeoutRef = useRef<TTimeout>(null);

  const startTimer = useCallback(() => {
    if (!isStarted || isPaused) return;

    timerTick();
    timeoutRef.current = setTimeout(startTimer, INTERVAL);
  }, [isStarted, isPaused, timerTick]);

  const stopTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    if (isFinished) {
      stopTimer();
      return;
    }

    if (isStarted && !isPaused) {
      startTimer();
    }

    return () => {
      stopTimer();
    };
  }, [isStarted, isPaused, isFinished, startTimer, stopTimer]);
};
