import { FC, useEffect } from "react";
import { useActions } from "@hooks/useActions";
import { Timer } from "@components/timer";

export const TimerPage: FC = () => {
  const { setTheme } = useActions();

  useEffect(() => {
    setTheme("default");
  }, []);

  return (
    <section>
      <Timer />
    </section>
  );
};
