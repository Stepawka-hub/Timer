import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";
import clsx from "clsx";

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <NavLink
        to="/timer"
        className={({ isActive }) =>
          clsx(s.link, {
            [s.link_active]: isActive,
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
