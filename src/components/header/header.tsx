import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <NavLink to="/timer" className={s.link}>
        Таймер
      </NavLink>
      <NavLink to="/stopwatch" className={s.link}>
        Секундомер
      </NavLink>
    </header>
  );
};
