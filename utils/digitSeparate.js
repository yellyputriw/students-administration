export const digitSeparate = (digit) => {
  return digit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
