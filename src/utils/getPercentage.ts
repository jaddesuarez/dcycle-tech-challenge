export const getPercentage = (value: number) => {
  return value > 0 ? Number((value * 100).toFixed(2)) : 0;
};
