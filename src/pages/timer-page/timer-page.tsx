import { FC, useEffect } from "react";
import s from "./timer-page.module.css";
import { useActions } from '@hooks/useActions';

export const TimerPage: FC = () => {
  const { setTheme } = useActions();

  useEffect(() => {
    setTheme('default');
  }, []);

  return <div className={s.page}>Timer Page</div>;
};
