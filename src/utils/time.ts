export const getTimeParts = (ms: number) => {
  const totalSeconds = ms / 1000;

  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const hours = Math.floor(totalSeconds / 3600);
  return { hours, minutes, seconds };
};

export const getFormattedTime = (ms: number) => {
  const { hours, minutes, seconds } = getTimeParts(ms);

  const hoursStr = hours ? `${hours}:` : "";
  const minutesStr = minutes ? `${minutes}:` : "";
  const secondsStr = seconds.toFixed(1);

  return hoursStr + minutesStr + secondsStr;
};

export const formatTimeHHMMSS = (ms: number) => {
  const { hours, minutes, seconds } = getTimeParts(ms);

  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = Math.floor(seconds).toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};

export const formatTimeHHMMSSMS = (ms: number) => {
  const { hours, minutes, seconds } = getTimeParts(ms);

  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = Math.round(seconds).toString().padStart(2, "0");

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};
