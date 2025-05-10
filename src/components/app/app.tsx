import { Header } from "@components/header";
import { useActions } from "@hooks/useActions";
import { useTimer } from "@hooks/useTimer";
import { StopWatchPage, TimerPage } from "@pages";
import { getThemeSelector } from "@slices/app";
import {
  getIsPausedSelector as getIsStopwatchPaused,
  getIsStartedSelector as getIsStopwatchStarted,
} from "@slices/stop-watch";
import {
  getIsFinishedSelector,
  getIsPausedSelector as getIsTimerPaused,
  getIsStartedSelector as getIsTimerStarted,
} from "@slices/timer";
import { useSelector } from "@store";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import s from "./app.module.css";
import { SoundController } from "@components/sound-controller/sound-controller";

export const App: FC = () => {
  const theme = useSelector(getThemeSelector);
  const { stopWatchTick, timerTick } = useActions();
  useTimer({
    timerTick: stopWatchTick,
    getIsStarted: getIsStopwatchStarted,
    getIsPaused: getIsStopwatchPaused,
  });
  useTimer({
    timerTick: timerTick,
    getIsStarted: getIsTimerStarted,
    getIsPaused: getIsTimerPaused,
    getIsFinished: getIsFinishedSelector,
  });

  return (
    <main className={s.wrapper} data-theme={theme}>
      <Header />

      <section className={s.content}>
        <Routes>
          <Route index element={<Navigate to="/stopwatch" />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/stopwatch" element={<StopWatchPage />} />
        </Routes>
      </section>

      <SoundController />
    </main>
  );
};
