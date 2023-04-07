export const generateRoomCode = () => {
  const MAX = 9999;
  const MIN = 1000;

  return String(Math.round(Math.random() * (MAX - MIN) + MIN));
};
