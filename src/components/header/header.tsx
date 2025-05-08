import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import clsx from "clsx";
import { useSelector } from '@store';
import { getIsFinishedSelector } from '@slices/timer';

export const Header: FC = () => {
  const isTimerFinished = useSelector(getIsFinishedSelector);

  return (
    <header className={s.header}>
      <NavLink
        to="/timer"
        className={({ isActive }) =>
          clsx(s.link, {
            [s.link_active]: isActive,
            [s.link_notify]: !isActive && isTimerFinished
          })
        }
      >
        Таймер
      </NavLink>
      <NavLink
        to="/stopwatch"
        className={({ isActive }) =>
          clsx(s.link, {
            [s.link_active]: isActive,
          })
        }
      >
        Секундомер
      </NavLink>
    </header>
  );
};
