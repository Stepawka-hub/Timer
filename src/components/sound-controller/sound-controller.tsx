import { getIsFinishedSelector, getTimerSoundSelector } from "@slices/timer";
import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import useSound from "use-sound";
import { SoundPlayerProps } from "./type";

export const SoundController: FC = () => {
  const isFinished = useSelector(getIsFinishedSelector);
  const sound = useSelector(getTimerSoundSelector);

  return sound && <SoundPlayer isFinished={isFinished} sound={sound} />;
};

const SoundPlayer: FC<SoundPlayerProps> = ({ isFinished, sound }) => {
  const [play, { stop }] = useSound(sound.link);

  useEffect(() => {
    if (isFinished) {
      play();
    } else {
      stop();
    }
  }, [isFinished]);

  return null;
};
