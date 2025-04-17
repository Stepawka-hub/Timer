import { FC } from "react";
import { Header } from "@components/header";
import { Route, Routes } from "react-router-dom";
import { TimerPage } from "@pages";
import { StopWatchPage } from "@pages";
import { HomePage } from "@pages";
import s from './app.module.css';

export const App: FC = () => {
  return (
    <main className={s.wrapper}>
      <Header />

      <section className={s.content}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/stopwatch" element={<StopWatchPage />} />
        </Routes>
      </section>
    </main>
  );
};
