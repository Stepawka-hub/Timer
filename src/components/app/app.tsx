import { FC } from "react";
import { Header } from "@components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import { TimerPage } from "@pages";
import { StopWatchPage } from "@pages";
import s from "./app.module.css";
import { useStopwatchTimer } from "@hooks/useStopwatchTimer";
import { useSelector } from "@store";
import { getThemeSelector } from "@slices/app";
import { useTimer } from '@hooks/useTimer';

export const App: FC = () => {
  const theme = useSelector(getThemeSelector);
  useStopwatchTimer();
  useTimer();

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
    </main>
  );
};
