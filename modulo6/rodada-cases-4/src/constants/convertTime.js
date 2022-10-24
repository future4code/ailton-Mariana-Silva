export const convertTime = (runtime) => {
  const hours = Math.floor(runtime / 60);
  let minutes = runtime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}h${minutes}m`;
};
