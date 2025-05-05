import { FC } from "react";
import { StopWatch } from "@components/stop-watch";
import s from "./stop-watch-page.module.css";

export const StopWatchPage: FC = () => {
  console.log('RENDER');
  return (
    <section className={s.page}>
      <StopWatch />
    </section>
  );
};
