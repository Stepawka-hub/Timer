import { FC } from "react";
import { Header } from "@components/header";
import { Navigate, Route, Routes } from "react-router-dom";
import { TimerPage } from "@pages";
import { StopWatchPage } from "@pages";
import s from "./app.module.css";
import { useStopwatchTimer } from "@hooks/useStopwatchTimer";

export const App: FC = () => {
  console.log("RENDER");
  useStopwatchTimer();

  return (
    <main className={s.wrapper}>
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
