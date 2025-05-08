import { ActionCreatorWithoutPayload, Selector } from "@reduxjs/toolkit";
import { RootState, useSelector } from "@store";
import { INTERVAL } from '@utils/constants';
import { useCallback, useEffect, useRef } from "react";
import { TTimeout } from "src/types";

type TUseTimerArgs = {
  timerTick: ActionCreatorWithoutPayload<string>;
  getIsStarted: Selector<RootState, boolean>;
  getIsPaused: Selector<RootState, boolean>;
};

export const useTimer = ({
  timerTick,
  getIsStarted,
  getIsPaused,
}: TUseTimerArgs) => {
  const isStarted = useSelector(getIsStarted);
  const isPaused = useSelector(getIsPaused);
  const timeoutRef = useRef<TTimeout>(null);

  const startTimer = useCallback(() => {
    if (!isStarted || isPaused) return;

    timerTick();
    timeoutRef.current = setTimeout(startTimer, INTERVAL);
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
