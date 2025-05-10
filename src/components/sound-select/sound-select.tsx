import { useActions } from "@hooks/useActions";
import { getTimerSoundSelector } from "@slices/timer";
import { useSelector } from "@store";
import { sounds } from "@utils/sounds";
import { FC } from "react";
import s from "./sound-select.module.css";

export const SoundSelect: FC = () => {
  const { setTimerSound } = useActions();
  const sound = useSelector(getTimerSoundSelector);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const selectedSound = sounds.find((s) => s.link === value) || null;
    setTimerSound(selectedSound);
  };

  return (
    <div>
      <label htmlFor="select-sound" className={s.selectTitle}>
        Выберите звук:
      </label>
      <select
        id="select-sound"
        name="select-sound"
        className={s.select}
        value={sound?.link || "none"}
        onChange={handleChange}
      >
        {sounds.map((s) => (
          <option key={s.id} value={s.link}>
            {s.name}
          </option>
        ))}
        <option value="none">Без звука</option>
      </select>
    </div>
  );
};
