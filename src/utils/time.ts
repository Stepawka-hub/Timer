export const getFormattedTime = (ms: number) => {
  const totalSeconds = ms / 1000;

  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const hours = Math.floor(totalSeconds / 3600);

  const hoursStr = hours ? `${hours}:` : "";
  const minutesStr = minutes ? `${minutes}:` : "";

  return hoursStr + minutesStr + (seconds % 60).toFixed(1);
};
