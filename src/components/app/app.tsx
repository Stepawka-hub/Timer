import { FC } from "react";
import "./app.css";
import { Header } from "@components/header";
import { Route, Routes } from "react-router-dom";
import { TimerPage } from '@pages';
import { StopWatchPage } from '@pages';
import { HomePage } from '@pages';

export const App: FC = () => {
  return (
    <main>
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/stopwatch" element={<StopWatchPage />} />
      </Routes>
    </main>
  );
};
