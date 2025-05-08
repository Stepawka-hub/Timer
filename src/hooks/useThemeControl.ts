import { useEffect } from "react";
import { useActions } from "./useActions";

export const useThemeControl = (isPaused: boolean, isFinished = false) => {
  const { setTheme } = useActions();

  useEffect(() => {
    if (isFinished) {
      setTheme("finished");
    } else if (isPaused) {
      setTheme("paused");
    } else {
      setTheme("default");
    }
  }, [isPaused, isFinished, setTheme]);
};
