import { useEffect } from "react";
import { useSelector } from "react-redux";
import timerSound from "@sounds/timerSound.mp3";
import useSound from "use-sound";
import { getIsFinishedSelector } from "@slices/timer";

export const SoundController = () => {
  const isFinished = useSelector(getIsFinishedSelector);
  const [play, { stop }] = useSound(timerSound);

  useEffect(() => {
    if (isFinished) {
      play();
    } else {
      stop();
    }
  }, [isFinished]);

  return null;
};
