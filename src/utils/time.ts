export const getTimeParts = (time: number, byMs = false) => {
  const totalSeconds = byMs ? time / 1000 : time;

  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const hours = Math.floor(totalSeconds / 3600);
  return { hours, minutes, seconds };
};

// hh:mm:ss.ms || mm:ss.ms || ss.ms
export const optionalFormatTime = (time: number, byMs = false) => {
  const { hours, minutes, seconds } = getTimeParts(time, byMs);

  const hoursStr = hours ? `${hours}:` : "";
  const minutesStr = minutes ? `${minutes}:` : "";
  const secondsStr = seconds.toFixed(1);

  return hoursStr + minutesStr + secondsStr;
};

// hh:mm:ss
export const formatTimeHHMMSS = (time: number, byMs = false) => {
  const { hours, minutes, seconds } = getTimeParts(time, byMs);

  const hoursStr = toTimeString(hours);
  const minutesStr = toTimeString(minutes);
  const secondsStr = toTimeString(Math.floor(seconds));

  return `${hoursStr}:${minutesStr}:${secondsStr}`;
};

// hh:mm:ss
export const formatTimeMMSSMS = (ms: number) => {
  const { minutes, seconds } = getTimeParts(ms, true);

  const minutesStr = toTimeString(minutes);
  const secondsStr = toTimeString(Math.floor(seconds));
  const msStr = (ms % 1000)/100;

  return `${minutesStr}:${secondsStr}.${msStr}`;
};

export const convertTimeToMS = (
  seconds: number,
  minutes: number,
  hours: number
) =>
  (hours || 0) * 3600 * 1000 +
  (minutes || 0) * 60 * 1000 +
  (seconds || 0) * 1000;

export const toTimeString = (value: number): string =>
  value.toString().padStart(2, "0");
